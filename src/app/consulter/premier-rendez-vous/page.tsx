import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { PageTitle } from '@/components/Text'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premier Rendez-vous',
  description:
    'Découvrez comment se déroule une première consultation en médecine traditionnelle chinoise : bilan énergétique, entretien et soins personnalisés.',
  keywords: [
    'premier rendez-vous',
    'première consultation',
    'bilan énergétique',
    'médecine chinoise',
    'acupuncture',
  ],
  openGraph: {
    title: "Premier Rendez-vous | Médecine Traditionnelle Chinoise Marseille Amandine D'Elia",
    description:
      'Découvrez comment se déroule une première consultation en médecine traditionnelle chinoise : bilan énergétique, entretien et soins personnalisés.',
    url: 'https://delia-acupuncture.fr/consulter/premier-rendez-vous',
    type: 'website',
  },
}

export default function PremierRendezVousPage() {
  const pageData = getPageData('data/pages/first-session.json')
  const { data, isError } = parseJsonData<{ body: string; pageTitle: string }>(pageData)

  return (
    <PageContainer>
      <PageTitle>
        {data?.pageTitle || 'Première séance de Médecine Traditionnelle Chinoise'}
      </PageTitle>
      <div className="mt-4 md:mt-8">
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
