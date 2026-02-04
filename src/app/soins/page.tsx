import { PageContainer } from '@/components/PageContainer'
import { H2, P, PageTitle } from '@/components/Text'
import { PATHS } from '@/constants/path'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Les Soins',
  description:
    "Découvrez l'ensemble des soins en médecine traditionnelle chinoise : acupuncture, moxibustion, massage Tui Na, pharmacopée et ventouses.",
  keywords: [
    'médecine traditionnelle chinoise',
    'acupuncture',
    'moxibustion',
    'massage tui na',
    'pharmacopée',
    'ventouses',
    'MTC',
  ],
  openGraph: {
    title: 'Les Soins | Médecine Traditionnelle Chinoise Marseille Amandine DELIA',
    description:
      "Découvrez l'ensemble des soins en médecine traditionnelle chinoise : acupuncture, moxibustion, massage Tui Na, pharmacopée et ventouses.",
    url: 'https://acupuncture-traditionnelle-marseille.fr/soins',
    type: 'website',
  },
}

export default function SoinsPage() {
  return (
    <PageContainer>
      <PageTitle>Les Soins en Médecine Traditionnelle Chinoise</PageTitle>

      <P className="mb-8 w-full text-center">
        La médecine traditionnelle chinoise offre une approche holistique de la santé, utilisant des
        techniques millénaires pour rétablir l&apos;équilibre énergétique du corps.
      </P>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <H2 className="text-xl font-semibold mb-3">Acupuncture Chinoise</H2>
          <P className="mb-4">
            Technique de stimulation des points énergétiques par de fines aiguilles.
          </P>
          <Link href={PATHS.ACUPUNCTURE} className="text-ds-rose-900">
            En savoir plus →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <H2 className="text-xl font-semibold mb-3">Moxibustion</H2>
          <P className="mb-4">
            Technique de chauffe des points d&apos;acupuncture avec l&apos;armoise.
          </P>
          <Link href={PATHS.MOXIBUSTION} className="text-ds-rose-900">
            En savoir plus →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <H2 className="text-xl font-semibold mb-3">Massage Tui Na</H2>
          <P className="mb-4">Massage thérapeutique chinois pour harmoniser l&apos;énergie.</P>
          <Link href={PATHS.MASSAGE_TUI_NA} className="text-ds-rose-900">
            En savoir plus →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <H2 className="text-xl font-semibold mb-3">Pharmacopée</H2>
          <P className="mb-4">Utilisation de plantes médicinales selon la tradition chinoise.</P>
          <Link href={PATHS.PHARMACOPEE} className="text-ds-rose-900">
            En savoir plus →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <H2 className="text-xl font-semibold mb-3">Ventouses</H2>
          <P className="mb-4">Technique de succion pour stimuler la circulation énergétique.</P>
          <Link href={PATHS.VENTOUSES} className="text-ds-rose-900">
            En savoir plus →
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
