import { Breadcrumb } from '@/components/Breadcrumb'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import type { Metadata } from 'next'
import Image from 'next/image'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import ventouses from '../../../../public/img/pages/ventouses.jpg'

export const metadata: Metadata = {
  title: "Ventouses - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'La technique des ventouses, méthode de succion pour stimuler la circulation énergétique et sanguine selon la médecine traditionnelle chinoise.',
  keywords: 'ventouses, cupping, succion, circulation, médecine chinoise, détoxification',
}

export default function VentousesPage() {
  const pageData = getPageData('data/pages/ventouses.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <Breadcrumb step3="Ventouses" />

      <PageTitle>{data?.pageTitle || 'Ventouses'}</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image alt="ventouses" src={ventouses} priority placeholder="blur" />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
