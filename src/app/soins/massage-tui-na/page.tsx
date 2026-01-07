import { Breadcrumb } from '@/components/Breadcrumb'
import { PageContainer } from '@/components/PageContainer'
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
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <Breadcrumb step3="Massage Tui Na" />

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
