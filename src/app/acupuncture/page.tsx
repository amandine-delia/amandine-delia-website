import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
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
  const { data, isError } = parseJsonData<{ body: string }>(pageData)

  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Acupuncture" />

      <PageTitle>Acupuncture</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="acupuncture"
          // Importing an image will
          // automatically set the width and height
          src={acupuncture}
          sizes="100vw"
          // Make the image display full width
          // and preserve its aspect ratio
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={true}
        />
      </div>

      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </Container>
  )
}
