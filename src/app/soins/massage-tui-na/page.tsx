import { Breadcrumb } from '@/components/Breadcrumb'
import { Container } from '@/components/Container'
import { H1, P, Strong, Ul } from '@/components/Text'
import type { Metadata } from 'next'

import Image from 'next/image'
import massageTuiNa from '../../../../public/img/pages/massage-tui-na.jpg'

export const metadata: Metadata = {
  title: "Massage Tui Na - Soins en Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    "Le massage Tui Na, technique manuelle de la médecine chinoise pour harmoniser l'énergie, détendre les tensions et rétablir l'équilibre du corps.",
  keywords:
    'massage tui na, massage chinois, énergie, méridiens, tensions, relaxation, thérapeutique',
}

export default function MassageTuiNaPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <Breadcrumb step3="Massage Tui Na" />

      <H1 className="mb-8">Massage Tui Na</H1>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="massage Tui Na"
          // Importing an image will
          // automatically set the width and height
          src={massageTuiNa}
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
          Le Tui Na est l’une des grandes techniques de la médecine traditionnelle chinoise. C’est
          un massage énergétique qui utilise des pressions, des étirements et des mobilisations pour
          stimuler la circulation du Qi (énergie vitale) et harmoniser les fonctions du corps.
        </P>

        <P className=" mb-8">
          Pratiqué seul ou en complément d’une séance d’acupuncture, le Tui Na aide à :
        </P>

        <Ul className="mb-8">
          <li>détendre les muscles et soulager les tensions,</li>
          <li>améliorer la circulation et la mobilité,</li>
          <li>apaiser le stress et favoriser un sommeil réparateur,</li>
          <li>renforcer les effets des points d’acupuncture pour un travail en profondeur.</li>
        </Ul>

        <P>
          C’est une approche <Strong>à la fois tonique et enveloppante</Strong>, qui s’adapte aux
          besoins de chacun·e et offre une sensation de vitalité et d’équilibre.
        </P>
      </div>
    </Container>
  )
}
