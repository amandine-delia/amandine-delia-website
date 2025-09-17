import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pharmacopée Chinoise - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'La pharmacopée chinoise, utilisation de plantes médicinales selon la tradition millénaire pour traiter les déséquilibres énergétiques.',
  keywords:
    'pharmacopée chinoise, plantes médicinales, herbes chinoises, décoctions, médecine chinoise',
}

export default function PharmacopeePage() {
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
          <li className="before:content-['>'] before:mx-2 text-gray-800">Pharmacopée</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Pharmacopée Chinoise</h1>

      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-8">
          La pharmacopée chinoise constitue l&apos;un des piliers de la médecine traditionnelle
          chinoise, utilisant les propriétés thérapeutiques des plantes, minéraux et substances
          animales.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Principe de la pharmacopée</h2>
          <p>
            Chaque substance possède des propriétés énergétiques spécifiques (nature, saveur,
            tropisme) qui permettent de rééquilibrer l&apos;organisme selon les principes de la
            médecine chinoise.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Formes de préparation</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Décoctions</h3>
            <p>
              Préparations liquides obtenues par décoction de plantes. Forme traditionnelle la plus
              courante et efficace.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Poudres</h3>
            <p>
              Plantes broyées finement, plus pratiques à utiliser et se conservant mieux que les
              décoctions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Gélules</h3>
            <p>
              Forme moderne facilitant la prise et le dosage, particulièrement adaptée au mode de
              vie occidental.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Extraits concentrés</h3>
            <p>
              Concentrés liquides standardisés offrant une action puissante et une facilité
              d&apos;usage.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Principales catégories</h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            <strong>Tonifiants :</strong> Ginseng, Astragale, Angélique chinoise pour renforcer
            l&apos;énergie
          </li>
          <li>
            <strong>Dispersants :</strong> Menthe, Chrysanthème pour évacuer les facteurs pathogènes
          </li>
          <li>
            <strong>Régulateurs :</strong> Pivoine, Réglisse pour harmoniser les fonctions
          </li>
          <li>
            <strong>Transformateurs :</strong> Pinellia, Citrus pour traiter les mucosités
          </li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Important</h3>
          <p>
            La prescription de pharmacopée nécessite un diagnostic précis en médecine chinoise. Les
            formules sont personnalisées selon le terrain de chaque patient et évoluent au cours du
            traitement.
          </p>
        </div>
      </div>
    </div>
  )
}
