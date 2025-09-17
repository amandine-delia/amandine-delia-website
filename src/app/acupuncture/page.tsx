import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Acupuncture - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "L'acupuncture, technique millénaire de stimulation des points énergétiques par de fines aiguilles pour rétablir l'équilibre du corps et de l'esprit.",
  keywords:
    'acupuncture, aiguilles, points énergétiques, méridiens, médecine chinoise, douleur, stress',
}

export default function AcupuncturePage() {
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
          <li className="before:content-['>'] before:mx-2 text-gray-800">Acupuncture</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Acupuncture</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          L&apos;acupuncture est une technique thérapeutique de la médecine traditionnelle chinoise
          qui consiste à stimuler des points précis du corps à l&apos;aide de fines aiguilles
          stériles.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Comment fonctionne l&apos;acupuncture ?</h2>

        <p className="mb-6">
          Selon la médecine chinoise, l&apos;acupuncture agit en régulant la circulation du Qi
          (énergie vitale) dans les méridiens. La stimulation de points spécifiques permet de
          rétablir l&apos;équilibre énergétique et de traiter diverses affections.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">Les points d&apos;acupuncture</h3>
          <p>
            Il existe plus de 360 points d&apos;acupuncture répartis le long des 12 méridiens
            principaux. Chaque point a des propriétés thérapeutiques spécifiques et peut être
            utilisé seul ou en combinaison avec d&apos;autres points.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Indications thérapeutiques</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Troubles musculo-squelettiques</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Douleurs articulaires</li>
              <li>Lombalgies, cervicalgies</li>
              <li>Tendinites</li>
              <li>Arthrose</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Troubles digestifs</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Troubles du transit</li>
              <li>Nausées</li>
              <li>Reflux gastrique</li>
              <li>Syndrome de l&apos;intestin irritable</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Troubles émotionnels</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Stress, anxiété</li>
              <li>Troubles du sommeil</li>
              <li>Dépression légère</li>
              <li>Fatigue chronique</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Autres indications</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Migraines, céphalées</li>
              <li>Allergies</li>
              <li>Troubles gynécologiques</li>
              <li>Sevrage tabagique</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Déroulement d&apos;une séance</h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>
            <strong>Bilan énergétique :</strong> Observation, palpation du pouls, examen de la
            langue
          </li>
          <li>
            <strong>Sélection des points :</strong> Choix des points selon le diagnostic énergétique
          </li>
          <li>
            <strong>Insertion des aiguilles :</strong> Placement précis des aiguilles stériles
          </li>
          <li>
            <strong>Stimulation :</strong> Manipulation douce pour obtenir la sensation de Qi
          </li>
          <li>
            <strong>Repos :</strong> Les aiguilles restent en place 20 à 30 minutes
          </li>
          <li>
            <strong>Retrait :</strong> Enlèvement délicat des aiguilles
          </li>
        </ol>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Sécurité et contre-indications</h3>
          <p>
            L&apos;acupuncture est une technique sûre pratiquée avec des aiguilles stériles à usage
            unique. Quelques contre-indications existent : troubles de la coagulation, grossesse
            (certains points), pacemaker (pour l&apos;électro-acupuncture).
          </p>
        </div>
      </div>
    </div>
  )
}
