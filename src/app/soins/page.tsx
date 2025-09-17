import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Les Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "Découvrez l'ensemble des soins en médecine traditionnelle chinoise : acupuncture, moxibustion, massage Tui Na, pharmacopée et ventouses.",
  keywords:
    'médecine traditionnelle chinoise, acupuncture, moxibustion, massage tui na, pharmacopée, ventouses, MTC',
}

export default function SoinsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Les Soins en Médecine Traditionnelle Chinoise</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          La médecine traditionnelle chinoise offre une approche holistique de la santé, utilisant
          des techniques millénaires pour rétablir l&apos;équilibre énergétique du corps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">La Médecine Chinoise</h2>
            <p className="text-gray-600 mb-4">
              Découvrez les principes fondamentaux de cette médecine ancestrale.
            </p>
            <a href="/medecine-chinoise" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Acupuncture</h2>
            <p className="text-gray-600 mb-4">
              Technique de stimulation des points énergétiques par de fines aiguilles.
            </p>
            <a href="/acupuncture" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Moxibustion</h2>
            <p className="text-gray-600 mb-4">
              Technique de chauffe des points d&apos;acupuncture avec l&apos;armoise.
            </p>
            <a href="/soins/moxibustion" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Massage Tui Na</h2>
            <p className="text-gray-600 mb-4">
              Massage thérapeutique chinois pour harmoniser l&apos;énergie.
            </p>
            <a href="/soins/massage-tui-na" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Pharmacopée</h2>
            <p className="text-gray-600 mb-4">
              Utilisation de plantes médicinales selon la tradition chinoise.
            </p>
            <a href="/soins/pharmacopee" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Ventouses</h2>
            <p className="text-gray-600 mb-4">
              Technique de succion pour stimuler la circulation énergétique.
            </p>
            <a href="/soins/ventouses" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
