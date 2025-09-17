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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Consulter</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          Découvrez toutes les informations pratiques pour votre consultation en médecine
          traditionnelle chinoise.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Premier Rendez-vous</h2>
            <p className="text-gray-600 mb-4">
              Comment se déroule votre première consultation et que faut-il savoir.
            </p>
            <Link
              href="/consulter/premier-rendez-vous"
              className="text-blue-600 hover:text-blue-800"
            >
              En savoir plus →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">À propos</h2>
            <p className="text-gray-600 mb-4">
              Présentation d&apos;Amandine D&apos;Elia et de son parcours professionnel.
            </p>
            <Link href="/consulter/a-propos" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Tarifs et modalités</h2>
            <p className="text-gray-600 mb-4">
              Informations sur les tarifs des consultations et modalités de paiement.
            </p>
            <Link href="/consulter/tarifs" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">FAQ</h2>
            <p className="text-gray-600 mb-4">
              Réponses aux questions les plus fréquemment posées.
            </p>
            <Link href="/consulter/faq" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Prêt(e) à prendre rendez-vous ?</h3>
          <p className="mb-4">
            Contactez-moi pour planifier votre consultation en médecine traditionnelle chinoise.
          </p>
          <Link
            href="/rendez-vous"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </div>
  )
}
