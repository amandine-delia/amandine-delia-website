import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SoinCards } from '@/components/SoinCards'
import { Temoignages } from '@/components/Temoignages'
import { H2, H3, P } from '@/components/Text'
import { PATHS } from '@/constants/path'
import Image from 'next/image'
import Link from 'next/link'
import amandine from '../../public/img/amandine_delia.jpg'
import chinaPainting from '../../public/img/china-painting.jpg'
import placeholderImg from '../../public/img/placeholder-img.jpg'

export default async function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="pt-5 md:p-3  bg-ds-rose-100">
        <Container className="flex flex-col md:flex-row">
          <div className="flex flex-col md:max-w-[440px] md:rounded-md overflow-hidden">
            <Image
              alt="header"
              // Importing an image will
              // automatically set the width and height
              src={placeholderImg}
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
          <div className="flex-1 py-16 px-4">
            <H3 className="text-center">
              Un accompagnement bienveillant pour retrouver équilibre et vitalité.
            </H3>

            <div id="prendre-rendez-vous" className="mt-10 flex justify-center">
              <Link href={PATHS.RENDEZ_VOUS}>
                <Button>Prendre rendez-vous</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="a-propos" className="py-24 md:pl-4">
        <Container className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-3">
          <div className="row-span-2 flex flex-col mt-2 overflow-hidden md:max-w-[440px] md:rounded-md">
            <Image
              alt="amandine d'elia"
              // Importing an image will
              // automatically set the width and height
              src={amandine}
              sizes="100vw"
              // Make the image display full width
              // and preserve its aspect ratio
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="flex flex-col md:pt-[20%] px-4">
            <H2 color="lightBlue">Amandine D&apos;Elia</H2>
            <P className="inline-block w-fit mt-3">
              Acupuncture, phytothérapie, diététique chinoise, tuina (massage thérapeutique) et
              conseils en hygiène de vie.
            </P>

            <div className="mt-10">
              <Link href={PATHS.A_PROPOS}>
                <Button variant="blue" id="amandine-delia-savoir-plus">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="medecine-traditionnelle-chinoise" className="bg-ds-rose-100 py-24 md:pl-4">
        <Container className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-3">
          <div className="flex flex-col mt-2 overflow-hidden md:max-w-[440px] md:rounded-md">
            <Image
              alt="medecine traditionnelle chinoise"
              // Importing an image will
              // automatically set the width and height
              src={chinaPainting}
              sizes="100vw"
              // Make the image display full width
              // and preserve its aspect ratio
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

          <div className="flex flex-col px-4">
            <H2 className="col-span-full">La Médecine Traditionnelle Chinoise</H2>

            <P className="inline-block w-fit mt-3">
              La Médecine Traditionnelle Chinoise est une pratique millénaire qui considère l’être
              humain dans sa globalité. Elle ne se limite pas à un symptôme : elle cherche à
              comprendre l’équilibre entre le corps, l’esprit et les émotions, afin d’accompagner
              chacun vers plus d’harmonie.
            </P>

            <div id="medecine-traditionnelle-chinoise-savoir-plus" className="mt-10">
              <Link href={PATHS.MEDECINE_CHINOISE}>
                <Button>En savoir plus</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="tous-les-soins" className="py-24 px-4">
        <Container>
          <div className="text-center">
            <H2>Tous les soins</H2>
            <p>Découvrez l&apos;ensemble des soins proposés.</p>
          </div>
          <SoinCards />
        </Container>
      </section>

      <section id="temoignages" className="bg-ds-blue-200 py-24 px-4">
        <Container>
          <div className="text-center flex flex-col items-center">
            <H2 color="blue">Témoignages de nos patient·e·s</H2>
            <P className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
              Découvrez les avis de nos patient·e·s.
            </P>
          </div>
          <Temoignages />
        </Container>
      </section>

      <section id="consultation" className="py-24 px-4 text-center">
        <Container>
          <H2 customColor="text-black" className=" w-full">
            En Savoir plus sur la Consultation
          </H2>
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
        </Container>
      </section>
    </>
  )
}
