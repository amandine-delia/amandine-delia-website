import { Button } from '@/components/Button'
import { SoinCards } from '@/components/SoinCards'
import { Temoignages } from '@/components/Temoignages'
import { H3, P } from '@/components/Text'
import { PATHS } from '@/constants/path'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import heroImg from '../../public/img/amandine_delia_compressed.webp'

export const metadata: Metadata = {
  title: 'Médecine Traditionnelle Chinoise Marseille | Amandine DELIA',
  description:
    'Cabinet de médecine chinoise à Marseille : acupuncture, pharmacopée, massages Tui Na. Praticien certifié avec plusieurs cabinets.',
  keywords: ['médecine chinoise marseille', 'acupuncture marseille', 'MTC marseille'],
  openGraph: {
    title: 'Médecine Traditionnelle Chinoise Marseille | Amandine DELIA',
    description:
      'Cabinet de médecine chinoise à Marseille : acupuncture, pharmacopée, massages Tui Na. Praticien certifié avec plusieurs cabinets.',
    url: 'https://acupuncture-traditionnelle-marseille.fr',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default async function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section
        id="hero"
        className="p-3 flex flex-col md:flex-row gap-y-10 gap-x-4 xl:gap-x-7 max-w-[1200px] mx-auto md:min-h-screen"
      >
        <div className="flex-1">
          <div className="md:mt-[20%]">
            <H3 color="black" className="lg:text-4xl/snug!">
              Un accompagnement bienveillant pour{' '}
              <span className="bg-ds-rose-200 rounded-2xl px-2 whitespace-nowrap">
                retrouver équilibre
              </span>{' '}
              et vitalité.
            </H3>
            <h1 className="mt-4 text-smd text-gray-600">
              Amandine DELIA praticienne à Marseille en Médecine Traditionnelle Chinoise :
              Acupuncture, Pharmacopée, massage traditionnel Tuina et conseils préventifs.
            </h1>

            <div className="mt-10 flex gap-x-3 gap-y-4 flex-wrap">
              <Link href={PATHS.A_PROPOS}>
                <Button variant="fullBlack" id="amandine-delia-savoir-plus">
                  En savoir plus
                </Button>
              </Link>

              <Link href={PATHS.RENDEZ_VOUS}>
                <Button variant="fullRose">Prendre RDV</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <Image alt="Amandine DELIA" src={heroImg} className="rounded-xl" placeholder="blur" />
        </div>
      </section>

      {/* TOUS LES SOINS */}
      <section
        id="tous-les-soins"
        className="p-3 max-w-[1200px] mx-auto mt-[100px] min-h-screen flex flex-col justify-center items-center"
      >
        <div>
          <div className="max-w-[900px] mx-auto">
            <H3 color="black" className="text-center text-3xl md:text-3xl hidden! md:block!">
              Une prise en charge personnalisée pour soulager durablement vos troubles du quotidien.
            </H3>
            <H3 color="black" className="text-center text-3xl md:text-4xl md:hidden!">
              Nos soins adaptés à vos besoins spécifiques.
            </H3>
          </div>
          <p className="text-lg text-center w-full mb-8 mt-2">
            Découvrez l&apos;ensemble des soins proposés.
          </p>
          <SoinCards />
        </div>
      </section>

      {/* MEDECINE TRADITIONNELLE CHINOISE */}
      <section
        id="medecine-traditionnelle-chinoise"
        className="p-3 max-w-[1200px] mx-auto mt-20 min-h-[400px] flex flex-col justify-center items-center"
      >
        <div>
          <H3 color="black" className="md:text-center w-full lg:text-4xl/snug!">
            La Médecine Traditionnelle Chinoise
          </H3>
          <p className="text-lg/relaxed text-justify w-full mt-2 mb-6 max-w-[700px] mx-auto">
            La Médecine Traditionnelle Chinoise est une pratique millénaire qui considère l’être
            humain dans sa globalité. Elle ne se limite pas à un symptôme : elle cherche à
            comprendre l’équilibre entre le corps, l’esprit et les émotions, afin d’accompagner
            chacun vers plus d’harmonie.
          </p>

          <div className="w-full flex justify-center">
            <Link href={PATHS.MEDECINE_CHINOISE}>
              <Button variant="blue">En savoir plus</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="temoignages" className="bg-ds-blue-200 py-24 px-4 mt-20">
        <div className="p-3 max-w-[1200px] mx-auto mt-20">
          <div className="text-center flex flex-col items-center">
            <H3 color="blue">Témoignages de nos patient·e·s</H3>
            <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
              Découvrez les avis de nos patient·e·s.
            </p>
          </div>
          <Temoignages />
        </div>
      </section>

      {/* CONSULTATION */}
      <section id="consultation" className="py-24 px-4 text-center">
        <div className="max-w-[1200px] mx-auto">
          <H3 customColor="text-black" className=" w-full">
            En Savoir plus sur la Consultation
          </H3>
          <Link className="flex flex-col items-center" href={PATHS.PREMIER_RENDEZ_VOUS}>
            <H3 color="lightBlue" className="underline text-xl underline-offset-4 mt-6">
              Comment se déroule la première&nbsp;séance&nbsp;?
            </H3>
            <P className="mt-1.5">
              Une première séance en Médecine Traditionnelle Chinoise est avant tout un temps
              d’écoute et de découverte.
            </P>
          </Link>

          <Link className="flex flex-col items-center" href={PATHS.TARIFS}>
            <H3 color="lightBlue" className="underline text-xl underline-offset-4 mt-8">
              Tarifs et modalités de paiement
            </H3>
            <P className="mt-1.5">N’hésitez pas à nous consulter notre grille tarifaire.</P>
          </Link>

          <Link className="flex flex-col items-center" href={PATHS.FAQ}>
            <H3 color="lightBlue" className="underline text-xl underline-offset-4 mt-8">
              FAQ
            </H3>
            <P className="mt-1.5">
              Vous n&apos;avez pas trouvé ce que vous cherchiez&nbsp;? Consultez notre FAQ.
            </P>
          </Link>

          <div className="mt-20">
            <Link href={PATHS.RENDEZ_VOUS}>
              <Button variant="blue">Prendre rendez-vous</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
