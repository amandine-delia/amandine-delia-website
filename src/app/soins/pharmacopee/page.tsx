import { Breadcrumb } from '@/components/Breadcrumb'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import type { Metadata } from 'next'
import Image from 'next/image'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import pharmacopee from '../../../../public/img/pages/pharmacopee_compressed.webp'

export const metadata: Metadata = {
  title: "Pharmacopée Chinoise - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'La pharmacopée chinoise, utilisation de plantes médicinales selon la tradition millénaire pour traiter les déséquilibres énergétiques.',
  keywords:
    'pharmacopée chinoise, plantes médicinales, herbes chinoises, décoctions, médecine chinoise',
}

export default function PharmacopeePage() {
  const pageData = getPageData('data/pages/pharma.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <Breadcrumb step3="Pharmacopée" />

      <PageTitle>{data?.pageTitle || 'Pharmacopée Chinoise'}</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image alt="Pharmacopée Chinoise" src={pharmacopee} priority placeholder="blur" />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
