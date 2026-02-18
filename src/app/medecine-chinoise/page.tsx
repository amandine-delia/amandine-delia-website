import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { Metadata } from 'next'
import Image from 'next/image'
import mtc from '../../../public/img/pages/mtc_compressed.webp'

export const metadata: Metadata = {
  title: 'La Médecine Traditionnelle Chinoise',
  description:
    'Découvrez les principes fondamentaux de la médecine traditionnelle chinoise : théories du Yin-Yang, des 5 éléments et des méridiens énergétiques.',
  keywords: [
    'médecine traditionnelle chinoise',
    'MTC',
    'yin yang',
    '5 éléments',
    'médecine chinoise',
  ],
  openGraph: {
    title:
      'La Médecine Traditionnelle Chinoise | Médecine Traditionnelle Chinoise Marseille Amandine DELIA',
    description:
      'Découvrez les principes fondamentaux de la médecine traditionnelle chinoise : théories du Yin-Yang, des 5 éléments et des méridiens énergétiques.',
    url: 'https://acupuncture-traditionnelle-marseille.fr/medecine-chinoise',
    type: 'website',
    images: 'https://acupuncture-traditionnelle-marseille.fr/img/seo_amandine_delia.jpg',
  },
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
