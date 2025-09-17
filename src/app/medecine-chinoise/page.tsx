import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "La Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'Découvrez les principes fondamentaux de la médecine traditionnelle chinoise : théories du Yin-Yang, des 5 éléments et des méridiens énergétiques.',
  keywords:
    'médecine traditionnelle chinoise, MTC, yin yang, 5 éléments, méridiens, qi, énergie vitale',
}

export default function MedecineChinoisePage() {
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
          <li className="before:content-['>'] before:mx-2 text-gray-800">La Médecine Chinoise</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">La Médecine Traditionnelle Chinoise</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          La médecine traditionnelle chinoise (MTC) est un système médical complet qui existe depuis
          plus de 3000 ans. Elle considère l&apos;être humain dans sa globalité et vise à maintenir
          l&apos;harmonie entre le corps et l&apos;esprit.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Les Principes Fondamentaux</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Le Yin et le Yang</h3>
            <p>
              Concept fondamental représentant la dualité complémentaire de toute chose.
              L&apos;équilibre entre ces deux forces opposées est essentiel à la santé.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Les 5 Éléments</h3>
            <p>
              Bois, Feu, Terre, Métal et Eau. Chaque élément correspond à des organes et fonctions
              spécifiques, créant un système d&apos;interactions complexes.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Le Qi (Énergie Vitale)</h3>
            <p>
              L&apos;énergie vitale qui circule dans le corps à travers les méridiens. Sa
              circulation harmonieuse est garante de la bonne santé.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Les Méridiens</h3>
            <p>
              Canaux énergétiques dans lesquels circule le Qi. Il existe 12 méridiens principaux
              reliés aux organes et viscères.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Les Techniques Thérapeutiques</h2>

        <p className="mb-6">
          La MTC utilise différentes techniques pour rétablir l&apos;équilibre énergétique :
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Acupuncture :</strong> Stimulation des points énergétiques par de fines
            aiguilles
          </li>
          <li>
            <strong>Moxibustion :</strong> Application de chaleur sur les points d&apos;acupuncture
          </li>
          <li>
            <strong>Massage Tui Na :</strong> Techniques manuelles de mobilisation énergétique
          </li>
          <li>
            <strong>Pharmacopée :</strong> Utilisation de plantes médicinales chinoises
          </li>
          <li>
            <strong>Ventouses :</strong> Technique de succion pour stimuler la circulation
          </li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Consultation et Diagnostic</h3>
          <p>
            Le diagnostic en MTC se base sur l&apos;observation (teint, langue), l&apos;écoute, la
            palpation (pouls) et l&apos;interrogatoire. Cette approche globale permet
            d&apos;identifier les déséquilibres énergétiques à l&apos;origine des troubles.
          </p>
        </div>
      </div>
    </div>
  )
}
