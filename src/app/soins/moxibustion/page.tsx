import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { H1, P, Ul } from '@/components/Text'
import type { Metadata } from 'next'

import Image from 'next/image'
import moxibustion from '../../../../public/img/pages/moxibustion.jpg'

export const metadata: Metadata = {
  title: "Moxibustion - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "La moxibustion, technique de chauffe des points d'acupuncture avec l'armoise pour tonifier l'énergie et traiter les affections chroniques.",
  keywords: 'moxibustion, armoise, moxa, chaleur, tonification, yang, médecine chinoise',
}

export default function MoxibustionPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Moxibustion" />

      <H1 className="mb-8">Moxibustion</H1>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="moxibustion"
          // Importing an image will
          // automatically set the width and height
          src={moxibustion}
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
          La moxibustion est une pratique traditionnelle de la médecine chinoise qui utilise la
          chaleur douce de l’armoise (plante séchée et roulée en bâton ou en cône). Cette chaleur
          est appliquée près de points d’acupuncture afin de stimuler la circulation de l’énergie
          (le Qi) et d’apporter confort et vitalité.
        </P>

        <P className=" mb-8">Ce soin est particulièrement apprécié pour :</P>

        <Ul className="mb-8">
          <li>soulager les tensions et les douleurs,</li>
          <li>réchauffer le corps et soutenir l’énergie vitale,</li>
          <li>renforcer les défenses naturelles,</li>
          <li>favoriser détente et bien-être profond.</li>
        </Ul>

        <P>
          La moxibustion est une approche douce, naturelle et non invasive, qui complète
          harmonieusement d’autres pratiques de santé et de prévention.
        </P>
      </div>
    </Container>
  )
}
