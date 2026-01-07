import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'

export default function TarifsPage() {
  const pageData = getPageData('data/pages/tarifs.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <PageTitle>{data?.pageTitle || 'Tarifs et modalités de paiement'}</PageTitle>
      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
