import { Container } from '@/components/Container'
import { P, PageTitle } from '@/components/Text'
import { PATHS } from '@/constants/path'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Consulter - Informations Pratiques | Amandine D'Elia",
  description:
    'Toutes les informations pour consulter : premier rendez-vous, à propos, tarifs et modalités de paiement, foire aux questions.',
  keywords:
    'consultation, rendez-vous, tarifs, informations pratiques, médecine chinoise, acupuncture',
}

export default function ConsulterPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <PageTitle>Consulter</PageTitle>

      <div className="prose lg:prose-xl max-w-none">
        <P className="text-lg mb-8 text-center w-full">
          Découvrez toutes les informations pratiques pour votre consultation en médecine
          traditionnelle chinoise.
        </P>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Premier Rendez-vous</h2>
            <p className="text-gray-600 mb-4">
              Comment se déroule votre première consultation et que faut-il savoir.
            </p>
            <Link href={PATHS.PREMIER_RENDEZ_VOUS} className="text-ds-rose-900">
              En savoir plus →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">À propos</h2>
            <p className="text-gray-600 mb-4">
              Présentation d&apos;Amandine D&apos;Elia et de son parcours professionnel.
            </p>
            <Link href={PATHS.A_PROPOS} className="text-ds-rose-900">
              En savoir plus →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Tarifs et modalités</h2>
            <p className="text-gray-600 mb-4">
              Informations sur les tarifs des consultations et modalités de paiement.
            </p>
            <Link href={PATHS.TARIFS} className="text-ds-rose-900">
              En savoir plus →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">FAQ</h2>
            <p className="text-gray-600 mb-4">
              Réponses aux questions les plus fréquemment posées.
            </p>
            <Link href={PATHS.FAQ} className="text-ds-rose-900">
              En savoir plus →
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
