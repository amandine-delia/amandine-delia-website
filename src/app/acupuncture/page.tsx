import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { P, PageTitle, Ul } from '@/components/Text'
import type { Metadata } from 'next'

import Image from 'next/image'
import acupuncture from '../../../public/img/pages/acupuncture.jpg'

export const metadata: Metadata = {
  title: "Acupuncture - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "L'acupuncture, technique millénaire de stimulation des points énergétiques par de fines aiguilles pour rétablir l'équilibre du corps et de l'esprit.",
  keywords:
    'acupuncture, aiguilles, points énergétiques, méridiens, médecine chinoise, douleur, stress',
}

export default function AcupuncturePage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Acupuncture" />

      <PageTitle>Acupuncture</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="acupuncture"
          // Importing an image will
          // automatically set the width and height
          src={acupuncture}
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

      <div className="mt-4 md:mt-8">
        <P className=" mb-8">
          L’acupuncture est l’une des pratiques les plus connues de la Médecine Traditionnelle
          Chinoise. Elle repose sur l’idée que l’énergie vitale, appelée Qi, circule dans le corps à
          travers des canaux appelés méridiens.
        </P>

        <P className=" mb-8">
          Lorsque cette circulation est fluide, le corps et l’esprit restent en équilibre. Mais en
          cas de blocage, de vide ou de déséquilibre, des troubles physiques ou émotionnels peuvent
          apparaître.
        </P>

        <P className=" mb-8">
          L’acupuncture consiste à stimuler des points précis situés sur les méridiens, à l’aide de
          très fines aiguilles stériles et à usage unique. Cette stimulation permet de :
        </P>

        <Ul className="text-lg list-disc pl-6 space-y-1 mb-8">
          <li>libérer l’énergie bloquée,</li>
          <li>harmoniser le Yin et le Yang,</li>
          <li>soutenir les fonctions naturelles du corps,</li>
          <li>soulager douleurs et tensions,</li>
          <li>renforcer la vitalité et prévenir les déséquilibres.</li>
        </Ul>

        <P>
          C’est une méthode douce, respectueuse et adaptée à chacun. L’objectif n’est pas seulement
          de soulager un symptôme, mais de favoriser un retour global à l’équilibre.
        </P>
      </div>
    </Container>
  )
}
