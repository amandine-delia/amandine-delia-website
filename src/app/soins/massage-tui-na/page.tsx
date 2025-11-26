import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/Text'
import type { Metadata } from 'next'

import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import Image from 'next/image'
import massageTuiNa from '../../../../public/img/pages/massage-tui-na.jpg'

export const metadata: Metadata = {
  title: "Massage Tui Na - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "Le massage Tui Na, technique manuelle de la médecine chinoise pour harmoniser l'énergie, détendre les tensions et rétablir l'équilibre du corps.",
  keywords:
    'massage tui na, massage chinois, énergie, méridiens, tensions, relaxation, thérapeutique',
}

export default function MassageTuiNaPage() {
  const pageData = getPageData('data/pages/tuina.json')
  const { data, isError } = parseJsonData<{ body: string }>(pageData)

  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Massage Tui Na" />

      <PageTitle>Massage Tui Na</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="massage Tui Na"
          // Importing an image will
          // automatically set the width and height
          src={massageTuiNa}
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
