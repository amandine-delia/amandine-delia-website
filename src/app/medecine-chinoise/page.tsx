import { Container } from '@/components/Container'
import { P, PageTitle, Strong } from '@/components/Text'
import type { Metadata } from 'next'
import Image from 'next/image'
import mtc from '../../../public/img/pages/mtc.jpg'

export const metadata: Metadata = {
  title: "La Médecine Traditionnelle Chinoise | Amandine D'Elia",
  description:
    'Découvrez les principes fondamentaux de la médecine traditionnelle chinoise : théories du Yin-Yang, des 5 éléments et des méridiens énergétiques.',
  keywords:
    'médecine traditionnelle chinoise, MTC, yin yang, 5 éléments, méridiens, qi, énergie vitale',
}

export default function MedecineChinoisePage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <PageTitle>La Médecine Traditionnelle Chinoise</PageTitle>

      <div className="flex flex-col md:rounded-md overflow-hidden mb-8">
        <Image
          alt="médecine traditionnelle chinoise"
          // Importing an image will
          // automatically set the width and height
          src={mtc}
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
          La Médecine Traditionnelle Chinoise est une pratique millénaire qui considère l’être
          humain dans sa globalité. Elle ne se limite pas à un symptôme : elle cherche à comprendre
          l’équilibre entre le corps, l’esprit et les émotions, afin d’accompagner chacun vers plus
          d’harmonie.
        </P>

        <P className=" mb-8">
          Au cœur de cette approche se trouve le <Strong>Qi</Strong>, l’énergie vitale qui circule
          en nous. Lorsqu’elle circule librement, nous nous sentons en bonne santé. La MTC s’appuie
          aussi sur les notions de <Strong>Yin et Yang</Strong>, ces forces complémentaires qui
          doivent rester équilibrées, et sur les <Strong>Cinq Éléments</Strong> (Bois, Feu, Terre,
          Métal, Eau), qui reflètent les rythmes de la nature et nos propres cycles de vie.
        </P>

        <P className=" mb-8">
          Pour favoriser cet équilibre, différentes méthodes peuvent être utilisées :{' '}
          <Strong>acupuncture</Strong>, <Strong>moxibustion</Strong>, <Strong>massage Tuina</Strong>
          , <Strong>diététique chinoise</Strong> et <Strong>Qi Gong</Strong>.
        </P>

        <P>
          Son but est simple : vous aider à retrouver vitalité, sérénité et bien-être, en douceur et
          toujours dans le respect de votre singularité.
        </P>
      </div>
    </Container>
  )
}
