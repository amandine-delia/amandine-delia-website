import { Container } from '@/components/Container'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'

export default function PremierRendezVousPage() {
  const pageData = getPageData('data/pages/first-session.json')
  const { data, isError } = parseJsonData<{ body: string }>(pageData)

  return (
    <Container className="px-4 pt-8 pb-24">
      <PageTitle>Première séance de Médecine Traditionnelle Chinoise</PageTitle>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </Container>
  )
}
