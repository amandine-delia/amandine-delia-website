import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Massage Tui Na - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "Le massage Tui Na, technique manuelle de la médecine chinoise pour harmoniser l'énergie, détendre les tensions et rétablir l'équilibre du corps.",
  keywords:
    'massage tui na, massage chinois, énergie, méridiens, tensions, relaxation, thérapeutique',
}

export default function MassageTuiNaPage() {
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
          <li className="before:content-['>'] before:mx-2 text-gray-800">Massage Tui Na</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Massage Tui Na</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          Le Tui Na est une forme de massage thérapeutique issue de la médecine traditionnelle
          chinoise. Il combine techniques manuelles et principes énergétiques pour rétablir
          l&apos;harmonie du corps.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce que le Tui Na ?</h2>

        <p className="mb-6">
          &quot;Tui&quot; signifie pousser et &quot;Na&quot; signifie saisir. Cette technique
          millénaire utilise diverses manipulations (pressions, frictions, vibrations, étirements)
          pour stimuler la circulation du Qi dans les méridiens et harmoniser les fonctions
          organiques.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">Principes du Tui Na</h3>
          <p>
            Le massage Tui Na s&apos;appuie sur la théorie des méridiens et des points
            d&apos;acupuncture. Il vise à lever les blocages énergétiques, tonifier les organes
            affaiblis et disperser les excès d&apos;énergie pour rétablir l&apos;équilibre.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Techniques principales</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">An Fa (Pression)</h3>
            <p>
              Pressions rythmées avec la paume, les doigts ou le poing sur les points
              d&apos;acupuncture et les zones réflexes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Tui Fa (Poussée)</h3>
            <p>
              Mouvements de poussée le long des méridiens pour favoriser la circulation énergétique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Na Fa (Saisie)</h3>
            <p>
              Saisie et mobilisation des muscles et tendons pour relâcher les tensions profondes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Gun Fa (Roulement)</h3>
            <p>
              Mouvements de roulement avec l&apos;avant-bras pour détendre les masses musculaires.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Rou Fa (Pétrissage)</h3>
            <p>
              Pétrissage en spirale pour assouplir les tissus et améliorer la circulation locale.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Dou Fa (Vibration)</h3>
            <p>Vibrations transmises aux tissus profonds pour stimuler l&apos;énergie vitale.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Bienfaits du Tui Na</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Bienfaits physiques</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Détente musculaire profonde</li>
              <li>Amélioration de la circulation sanguine</li>
              <li>Soulagement des douleurs articulaires</li>
              <li>Augmentation de la mobilité</li>
              <li>Stimulation du système immunitaire</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Bienfaits énergétiques</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Harmonisation du Qi</li>
              <li>Rééquilibrage des fonctions organiques</li>
              <li>Amélioration de la vitalité</li>
              <li>Réduction du stress et de l&apos;anxiété</li>
              <li>Amélioration de la qualité du sommeil</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Indications thérapeutiques</h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            <strong>Troubles musculo-squelettiques :</strong> Contractures, lombalgies,
            cervicalgies, tendinites
          </li>
          <li>
            <strong>Troubles digestifs :</strong> Constipation, ballonnements, troubles du transit
          </li>
          <li>
            <strong>Troubles du sommeil :</strong> Insomnie, réveils nocturnes, sommeil non
            réparateur
          </li>
          <li>
            <strong>Stress et fatigue :</strong> Surmenage, anxiété, épuisement nerveux
          </li>
          <li>
            <strong>Troubles circulatoires :</strong> Jambes lourdes, œdèmes, frilosité
          </li>
          <li>
            <strong>Maux de tête :</strong> Migraines, céphalées de tension
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Déroulement d&apos;une séance</h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>
            <strong>Bilan énergétique :</strong> Évaluation de l&apos;état général et des
            déséquilibres
          </li>
          <li>
            <strong>Préparation :</strong> Installation confortable, vêtements souples
          </li>
          <li>
            <strong>Massage :</strong> Application des techniques selon les besoins identifiés
          </li>
          <li>
            <strong>Durée :</strong> 45 minutes à 1 heure selon la zone traitée
          </li>
          <li>
            <strong>Repos :</strong> Moment de détente pour intégrer les bienfaits
          </li>
        </ol>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">À savoir</h3>
          <p>
            Le massage Tui Na peut être vigoureux et solliciter intensément les tissus. Il est
            normal de ressentir des courbatures légères le lendemain, signe que l&apos;énergie
            circule à nouveau librement dans l&apos;organisme.
          </p>
        </div>
      </div>
    </div>
  )
}
