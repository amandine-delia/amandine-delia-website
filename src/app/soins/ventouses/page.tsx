import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ventouses - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'La technique des ventouses, méthode de succion pour stimuler la circulation énergétique et sanguine selon la médecine traditionnelle chinoise.',
  keywords: 'ventouses, cupping, succion, circulation, médecine chinoise, détoxification',
}

export default function VentousesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2 text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Accueil
            </Link>
          </li>
          <li className="before:content-['>'] before:mx-2">
            <Link href="/soins" className="hover:text-blue-600">
              Les Soins
            </Link>
          </li>
          <li className="before:content-['>'] before:mx-2 text-gray-800">Ventouses</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Ventouses</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          La technique des ventouses consiste à créer une dépression dans des coupelles appliquées
          sur la peau pour stimuler la circulation et lever les stagnations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Principe de fonctionnement</h2>

        <p className="mb-6">
          L&apos;effet de succion créé par les ventouses favorise la circulation du sang et du Qi,
          permet d&apos;extraire les facteurs pathogènes et de détoxifier l&apos;organisme.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">Action thérapeutique</h3>
          <p>
            Les ventouses agissent en profondeur sur les tissus, améliorent la microcirculation,
            détendent les fascias et stimulent les mécanismes naturels de guérison du corps.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Types de ventouses</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Ventouses sèches</h3>
            <p>
              Application simple de ventouses sur la peau intacte. Technique de base pour stimuler
              la circulation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Ventouses mobiles</h3>
            <p>
              Déplacement des ventouses sur la peau huilée pour un effet de massage en profondeur.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Ventouses flash</h3>
            <p>Application et retrait rapides et répétés pour une stimulation énergétique douce.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Ventouses avec saignée</h3>
            <p>
              Technique spécialisée pour évacuer la chaleur et les stagnations importantes (pratique
              avancée).
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Indications thérapeutiques</h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            <strong>Douleurs musculaires :</strong> Contractures, tensions, courbatures
          </li>
          <li>
            <strong>Troubles respiratoires :</strong> Rhumes, bronchites, asthme
          </li>
          <li>
            <strong>Problèmes circulatoires :</strong> Stagnations sanguines, œdèmes
          </li>
          <li>
            <strong>Détoxification :</strong> Élimination des toxines, drainage lymphatique
          </li>
          <li>
            <strong>Stress et fatigue :</strong> Relaxation profonde, revitalisation
          </li>
          <li>
            <strong>Cellulite :</strong> Amélioration de l&apos;aspect de la peau
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Déroulement d&apos;une séance</h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>
            <strong>Préparation :</strong> Nettoyage et préparation de la peau
          </li>
          <li>
            <strong>Application :</strong> Pose des ventouses selon les zones à traiter
          </li>
          <li>
            <strong>Durée :</strong> 10 à 20 minutes selon la technique utilisée
          </li>
          <li>
            <strong>Retrait :</strong> Relâchement progressif de la succion
          </li>
          <li>
            <strong>Massage :</strong> Massage doux pour favoriser la circulation
          </li>
        </ol>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">À savoir</h3>
          <p className="mb-3">
            Les ventouses laissent des marques circulaires temporaires qui disparaissent en quelques
            jours. Ces marques témoignent de l&apos;évacuation des stagnations.
          </p>
          <p>
            <strong>Contre-indications :</strong> Grossesse (certaines zones), troubles de la
            coagulation, fièvre élevée, plaies ouvertes.
          </p>
        </div>
      </div>
    </div>
  )
}
