import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { P, PageTitle } from '@/components/Text'
import type { Metadata } from 'next'
import Image from 'next/image'

import pharmacopee from '../../../../public/img/pages/pharmacopee.jpg'

export const metadata: Metadata = {
  title: "Pharmacopée Chinoise - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'La pharmacopée chinoise, utilisation de plantes médicinales selon la tradition millénaire pour traiter les déséquilibres énergétiques.',
  keywords:
    'pharmacopée chinoise, plantes médicinales, herbes chinoises, décoctions, médecine chinoise',
}

export default function PharmacopeePage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Pharmacopée" />

      <PageTitle>Pharmacopée Chinoise</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="Pharmacopée Chinoise"
          // Importing an image will
          // automatically set the width and height
          src={pharmacopee}
          sizes="100vw"
          // Make the image display full width
          // and preserve its aspect ratio
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={true}
        />
      </div>

      <div>
        <P className=" mb-8">
          La pharmacopée chinoise est l’un des piliers de la Médecine Traditionnelle Chinoise. Elle
          repose sur l’utilisation de plantes, minéraux et parfois produits naturels, combinés en
          formules personnalisées.
        </P>

        <P className=" mb-8">
          Chaque plante possède une énergie (froid, tiède, neutre, chaud), une saveur (amer, doux,
          piquant, acide, salé) et une affinité avec certains organes. Selon le bilan énergétique
          établi lors de la consultation, le praticien associe plusieurs ingrédients afin de
          rétablir l’équilibre du corps.
        </P>

        <P className=" mb-8">
          L’objectif de la pharmacopée n’est pas seulement de traiter un symptôme, mais de corriger
          le terrain énergétique : nourrir ce qui est en vide, disperser ce qui est en excès,
          harmoniser le Qi et le Sang, renforcer les organes.
        </P>

        <P>
          Utilisée depuis des millénaires, cette approche reste aujourd’hui un outil puissant pour
          soutenir la vitalité, prévenir les déséquilibres et accompagner le retour à l’harmonie.
        </P>
      </div>
    </Container>
  )
}
