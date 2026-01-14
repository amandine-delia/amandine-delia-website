import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Tarifs des consultations en médecine traditionnelle chinoise, modalités de paiement et informations sur les remboursements par les mutuelles.',
  keywords: [
    'tarifs',
    'prix',
    'consultation',
    'médecine chinoise',
    'acupuncture',
    'remboursement',
    'mutuelle',
  ],
  openGraph: {
    title: "Tarifs | Médecine Traditionnelle Chinoise Marseille Amandine D'Elia",
    description:
      'Tarifs des consultations en médecine traditionnelle chinoise, modalités de paiement et informations sur les remboursements par les mutuelles.',
    url: 'https://delia-acupuncture.fr/consulter/tarifs',
    type: 'website',
  },
}

export default function TarifsPage() {
  const pageData = getPageData('data/pages/tarifs.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <PageTitle>{data?.pageTitle || 'Tarifs et modalités de paiement'}</PageTitle>
      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
