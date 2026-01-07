import { AProposData } from '@/api/aPropos'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { H2, PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import Image from 'next/image'
import aboutImg from '../../../../public/img/pages/a-propos.jpg'

export default function AProposPage() {
  const pageData = getPageData('data/pages/about.json')
  const { data, isError } = parseJsonData<AProposData>(pageData)

  const pageTitle = data?.pageTitle || 'À Propos de moi'

  return (
    <PageContainer className="max-w-[700px]! px-4 pt-8 pb-24">
      <PageTitle>{pageTitle}</PageTitle>

      <div className="max-w-[700px] mx-auto">
        <Image alt="Amadine d'Elia" src={aboutImg} priority placeholder="blur" />
      </div>

      {data && !isError ? (
        <>
          <H2 className="mt-4 text-lg md:text-3xl md:mt-8" customColor="text-black">
            {data.header}
          </H2>
          <p className="mt-1 text-ds-rose-900 md:text-lg font-semibold">{data.subheader}</p>
          <div className="mt-4 md:mt-8">
            <Markdown>{data.body}</Markdown>
          </div>
        </>
      ) : (
        <ErrorMessage />
      )}
    </PageContainer>
  )
}
