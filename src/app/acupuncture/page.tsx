import { Breadcrumb } from '@/components/Breadcrumb'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'

import type { Metadata } from 'next'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import Image from 'next/image'
import acupuncture from '../../../public/img/pages/acupuncture.jpg'

export const metadata: Metadata = {
  title: "Acupuncture - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "L'acupuncture, technique millénaire de stimulation des points énergétiques par de fines aiguilles pour rétablir l'équilibre du corps et de l'esprit.",
  keywords:
    'acupuncture, aiguilles, points énergétiques, méridiens, médecine chinoise, douleur, stress',
}

export default function AcupuncturePage() {
  const pageData = getPageData('data/pages/acupuncture.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  const pageTitle = data?.pageTitle || 'Acupuncture'

  return (
    <PageContainer>
      <Breadcrumb step3="Acupuncture" />

      <PageTitle>{pageTitle}</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image alt="acupuncture" src={acupuncture} priority placeholder="blur" />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
