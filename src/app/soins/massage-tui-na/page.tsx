import { Breadcrumb } from '@/components/Breadcrumb'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { Metadata } from 'next'
import Image from 'next/image'
import massageTuiNa from '../../../../public/img/pages/massage-tui-na_compressed.webp'

export const metadata: Metadata = {
  title: 'Massage Tui Na',
  description:
    "Le Tui Na est un massage thérapeutique issu de la médecine chinoise qui agit sur les méridiens et points d'acupuncture pour soulager tensions musculaires, douleurs et déséquilibres énergétiques.",
  keywords: [
    'massage tui na',
    'tui na marseille',
    'massage chinois',
    'massage thérapeutique',
    'médecine chinoise',
    'tensions musculaires',
    'douleurs',
  ],
  openGraph: {
    title: "Massage Tui Na | Médecine Traditionnelle Chinoise Marseille Amandine D'Elia",
    description:
      "Le Tui Na est un massage thérapeutique issu de la médecine chinoise qui agit sur les méridiens et points d'acupuncture pour soulager tensions musculaires, douleurs et déséquilibres énergétiques.",
    url: 'https://acupuncture-traditionnelle-marseille.fr/soins/massage-tui-na',
    type: 'website',
    images: 'https://acupuncture-traditionnelle-marseille.fr/img/seo_amandine_delia.jpg',
  },
}

export default function MassageTuiNaPage() {
  const pageData = getPageData('data/pages/tuina.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <Breadcrumb step3="Massage Tui Na" step2="soins" />

      <PageTitle>{data?.pageTitle || 'Massage Tui Na'}</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image alt="massage Tui Na" src={massageTuiNa} priority placeholder="blur" />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
