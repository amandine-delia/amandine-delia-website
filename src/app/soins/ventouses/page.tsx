import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { H1, P, Strong, Ul } from '@/components/Text'
import type { Metadata } from 'next'
import Image from 'next/image'

import ventouses from '../../../../public/img/pages/ventouses.jpg'

export const metadata: Metadata = {
  title: "Ventouses - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'La technique des ventouses, méthode de succion pour stimuler la circulation énergétique et sanguine selon la médecine traditionnelle chinoise.',
  keywords: 'ventouses, cupping, succion, circulation, médecine chinoise, détoxification',
}

export default function VentousesPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Ventouses" />

      <H1 className="mb-8">Ventouses</H1>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="ventouses"
          // Importing an image will
          // automatically set the width and height
          src={ventouses}
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
          Les ventouses sont comme de petits bols posés sur la peau, qui créent une douce
          aspiration. Cette « étreinte » attire le sang et l’énergie vitale (Qi) vers la surface du
          corps, un peu comme si l’on ouvrait une fenêtre pour laisser circuler l’air frais dans une
          maison.
        </P>
        <P className=" mb-8">Cela permet de :</P>

        <Ul className="mb-8">
          <li>Débloquer les tensions et libérer les nœuds énergétiques,</li>
          <li>Réchauffer les zones froides et douloureuses,</li>
          <li>Stimuler la circulation, comme une rivière qui retrouve son cours,</li>
          <li>Apporter un profond sentiment de détente et de légèreté.</li>
        </Ul>

        <P className="mb-8">On peut utiliser différentes façons de poser les ventouses :</P>

        <Ul className="mb-8">
          <li>
            <Strong>Classique :</Strong> elles restent posées quelques minutes,
          </li>
          <li>
            <Strong>Glissées avec de l’huile :</Strong> comme un massage profond qui « lisse » les
            tensions,
          </li>
          <li>
            <Strong>Avec chaleur :</Strong> lorsque le feu est utilisé pour créer le vide, apportant
            une énergie réconfortante.
          </li>
        </Ul>

        <P>
          En Chine, on dit souvent que les ventouses « chassent le vent et le froid » qui se sont
          installés dans le corps. C’est une pratique qui relie à la fois le soin du corps et une
          dimension de bien-être intérieur, presque comme un câlin thérapeutique.
        </P>
      </div>
    </Container>
  )
}
