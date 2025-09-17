import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Moxibustion - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "La moxibustion, technique de chauffe des points d'acupuncture avec l'armoise pour tonifier l'énergie et traiter les affections chroniques.",
  keywords: 'moxibustion, armoise, moxa, chaleur, tonification, yang, médecine chinoise',
}

export default function MoxibustionPage() {
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
          <li className="before:content-['>'] before:mx-2 text-gray-800">Moxibustion</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Moxibustion</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          La moxibustion est une technique thérapeutique consistant à chauffer des points
          d&apos;acupuncture à l&apos;aide d&apos;armoise séchée (Artemisia vulgaris) appelée
          &quot;moxa&quot;.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Principe de la moxibustion</h2>

        <p className="mb-6">
          Cette technique millénaire utilise la chaleur pour stimuler et tonifier l&apos;énergie
          Yang. Elle complète parfaitement l&apos;acupuncture en apportant une dimension thermique
          au traitement des déséquilibres énergétiques.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">L&apos;armoise (Moxa)</h3>
          <p>
            L&apos;armoise est choisie pour ses propriétés réchauffantes et pénétrantes. Séchée et
            broyée finement, elle forme une poudre douce qui brûle lentement en dégageant une
            chaleur bienfaisante et des propriétés thérapeutiques.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Techniques de moxibustion</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Moxibustion directe</h3>
            <p>
              De petits cônes de moxa sont placés directement sur la peau. Technique traditionnelle
              très efficace mais nécessitant une grande expertise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Moxibustion indirecte</h3>
            <p>
              Le moxa est séparé de la peau par une substance (gingembre, ail, sel) ou maintenu à
              distance. Plus douce et couramment utilisée.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Bâtons de moxa</h3>
            <p>
              Cigares d&apos;armoise tenus à distance de la peau. Technique pratique permettant de
              chauffer de plus grandes zones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Moxa sur aiguille</h3>
            <p>
              Combinaison acupuncture-moxibustion où le moxa est fixé sur les aiguilles
              d&apos;acupuncture pour une action renforcée.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Indications thérapeutiques</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">
            La moxibustion est particulièrement efficace pour :
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Troubles digestifs :</strong> Diarrhées chroniques, digestion difficile,
              ballonnements
            </li>
            <li>
              <strong>Fatigue chronique :</strong> Épuisement, manque d&apos;énergie, convalescence
            </li>
            <li>
              <strong>Troubles respiratoires :</strong> Asthme, bronchites chroniques,
              refroidissements répétés
            </li>
            <li>
              <strong>Troubles gynécologiques :</strong> Règles douloureuses, infertilité,
              présentation en siège
            </li>
            <li>
              <strong>Douleurs articulaires :</strong> Rhumatismes aggravés par le froid et
              l&apos;humidité
            </li>
            <li>
              <strong>Troubles circulatoires :</strong> Sensation de froid, œdèmes, mauvaise
              circulation
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Déroulement d&apos;une séance</h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>
            <strong>Diagnostic :</strong> Évaluation énergétique pour déterminer les points à
            traiter
          </li>
          <li>
            <strong>Préparation :</strong> Installation confortable du patient
          </li>
          <li>
            <strong>Application :</strong> Placement du moxa selon la technique choisie
          </li>
          <li>
            <strong>Surveillance :</strong> Contrôle de la température et des sensations
          </li>
          <li>
            <strong>Durée :</strong> 15 à 30 minutes selon les points traités
          </li>
        </ol>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Sensations et contre-indications</h3>
          <p className="mb-3">
            La moxibustion procure une sensation de chaleur douce et pénétrante, souvent ressentie
            comme très agréable et relaxante.
          </p>
          <p>
            <strong>Contre-indications :</strong> Fièvre, inflammation aiguë, certaines zones
            pendant la grossesse, troubles de la sensibilité cutanée.
          </p>
        </div>
      </div>
    </div>
  )
}
