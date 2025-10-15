import { Container } from '@/components/Container'
import { H1, H2, H3, P } from '@/components/Text'
import Image from 'next/image'

export default function AProposPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <H1 className="mb-4 inline-block w-full text-center">À Propos de moi</H1>

      <div className="relative h-screen">
        <Image
          alt="amadine d'Elia"
          src="/img/pages/a-propos.jpg"
          fill
          style={{ objectFit: 'cover', objectPosition: '14%' }}
          priority={true}
        />
      </div>

      <H2 className="mt-4 text-lg md:text-3xl md:mt-8" customColor="text-black">
        Practicienne en acupuncture et Médecine Traditionnelle Chinoise
      </H2>
      <p className="mt-1 text-ds-rose-900 md:text-lg font-semibold">
        Prendre soin de l’humain a toujours été au cœur de mon parcours.
      </p>

      <div className="flex flex-col gap-y-6 mt-8 md:mt-12">
        <P>
          Avant de me tourner vers la Médecine Traditionnelle Chinoise, j’ai longtemps travaillé
          dans le domaine social. J’y ai appris la richesse de l’écoute, l’importance de la
          bienveillance et la force de l’accompagnement.
        </P>

        <P>
          Peu à peu, j’ai ressenti le besoin d’aller plus loin, d’offrir un soutien qui relie aussi
          le corps et les émotions. La Médecine Traditionnelle Chinoise s’est alors imposée comme
          une évidence. Elle m’a ouvert une autre façon de prendre soin : en cherchant l’équilibre,
          en réharmonisant l’énergie vitale, en accompagnant chacun dans son chemin vers plus de
          sérénité et de santé.
        </P>

        <P>
          Aujourd’hui, j’ai à cœur de réunir ces deux expériences – le lien humain et la pratique
          énergétique – pour vous offrir un accompagnement complet, dans un espace de confiance, de
          douceur et de respect.
        </P>

        <H3 className="mt-4 text-lg md:text-xl md:mt-8" customColor="text-black">
          Déontologie
        </H3>

        <P>
          La médecine traditionnelle chinoise, dont l’acupuncture, ne se substitue pas au suivi du
          consultant par son médecin traitant ou son médecin spécialiste. Le bilan énergétique
          réalisé lors des séances ne remplace pas un diagnostic établi par votre médecin. De même,
          votre suivi ou traitement allopathique ne pourra être modifié ou interrompu que par votre
          médecin référent.
        </P>
      </div>
    </Container>
  )
}
