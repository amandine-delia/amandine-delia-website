import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'

export default function PremierRendezVousPage() {
  const pageData = getPageData('data/pages/first-session.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <PageTitle>
        {data?.pageTitle || 'Première séance de Médecine Traditionnelle Chinoise'}
      </PageTitle>
      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
