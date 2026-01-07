import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import type { Metadata } from 'next'
import Image from 'next/image'
import mtc from '../../../public/img/pages/mtc.jpg'

export const metadata: Metadata = {
  title: "La Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'Découvrez les principes fondamentaux de la médecine traditionnelle chinoise : théories du Yin-Yang, des 5 éléments et des méridiens énergétiques.',
  keywords:
    'médecine traditionnelle chinoise, MTC, yin yang, 5 éléments, méridiens, qi, énergie vitale',
}

export default function MedecineChinoisePage() {
  const pageData = getPageData('data/pages/med-chinoise.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <PageTitle>{data?.pageTitle || 'La Médecine Traditionnelle Chinoise'}</PageTitle>
      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image alt="médecine traditionnelle chinoise" src={mtc} priority placeholder="blur" />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
