import { Container } from '@/components/Container'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { H2, PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import Image from 'next/image'

type DataType = {
  body: string
  title: string
  subtitle: string
}

export default function AProposPage() {
  const pageData = getPageData('data/pages/about.json')
  const { data, isError } = parseJsonData<DataType>(pageData)

  return (
    <Container className="px-4 pt-8 pb-24">
      <PageTitle>À Propos de moi</PageTitle>

      <div className="relative h-screen">
        <Image
          alt="amadine d'Elia"
          src="/img/pages/a-propos.jpg"
          fill
          style={{ objectFit: 'cover', objectPosition: '14%' }}
          priority={true}
        />
      </div>

      {data && !isError ? (
        <>
          <H2 className="mt-4 text-lg md:text-3xl md:mt-8" customColor="text-black">
            {data.title}
          </H2>
          <p className="mt-1 text-ds-rose-900 md:text-lg font-semibold">{data.subtitle}</p>
          <div className="mt-4 md:mt-8">
            <Markdown>{data.body}</Markdown>
          </div>
        </>
      ) : (
        <ErrorMessage />
      )}
    </Container>
  )
}
