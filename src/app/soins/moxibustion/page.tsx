import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/Text'
import type { Metadata } from 'next'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import Image from 'next/image'
import moxibustion from '../../../../public/img/pages/moxibustion.jpg'

export const metadata: Metadata = {
  title: "Moxibustion - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "La moxibustion, technique de chauffe des points d'acupuncture avec l'armoise pour tonifier l'énergie et traiter les affections chroniques.",
  keywords: 'moxibustion, armoise, moxa, chaleur, tonification, yang, médecine chinoise',
}

export default function MoxibustionPage() {
  const pageData = getPageData('data/pages/moxibustion.json')
  const { data, isError } = parseJsonData<{ body: string }>(pageData)

  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Moxibustion" />

      <PageTitle>Moxibustion</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="moxibustion"
          // Importing an image will
          // automatically set the width and height
          src={moxibustion}
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
