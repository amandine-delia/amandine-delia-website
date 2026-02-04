import { Breadcrumb } from '@/components/Breadcrumb'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { Metadata } from 'next'
import Image from 'next/image'
import moxibustion from '../../../../public/img/pages/moxibustion_compressed.webp'

export const metadata: Metadata = {
  title: 'Moxibustion',
  description:
    "La moxibustion, technique de chauffe des points d'acupuncture avec l'armoise pour tonifier l'énergie et traiter les affections chroniques.",
  keywords: [
    'moxibustion',
    'armoise',
    'moxa',
    'chaleur',
    'tonification',
    'yang',
    'médecine chinoise',
  ],
  openGraph: {
    title: 'Moxibustion | Médecine Traditionnelle Chinoise Marseille Amandine DELIA',
    description:
      "La moxibustion, technique de chauffe des points d'acupuncture avec l'armoise pour tonifier l'énergie et traiter les affections chroniques.",
    url: 'https://delia-acupuncture.fr/soins/moxibustion',
    type: 'website',
  },
}

export default function MoxibustionPage() {
  const pageData = getPageData('data/pages/moxibustion.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <Breadcrumb step3="Moxibustion" />

      <PageTitle>{data?.pageTitle || 'Moxibustion'}</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image alt="moxibustion" src={moxibustion} priority placeholder="blur" />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
