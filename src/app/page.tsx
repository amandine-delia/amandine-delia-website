import { Button } from '@/components/Button'
import { PATHS } from '@/constants/path'
import Image from 'next/image'
import Link from 'next/link'
import placeholderImg from '../../public/img/placeholder-img.jpg'

export default async function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="pt-3 md:p-3  bg-ds-rose-100">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
          <div className="flex flex-col md:max-w-[440px] md:rounded-md overflow-hidden">
            <Image
              alt="Mountains"
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
            />
          </div>
          <div className="flex-1 py-16 px-4">
            <h2 className="text-2xl font-bold text-ds-rose-900 inline-block w-fit">
              Médecine Chinoise
            </h2>
            <p className="inline-block w-fit">
              Un accompagnement bienveillant pour retrouver équilibre et vitalité.
            </p>

            <div className="mt-8">
              <Link href={PATHS.RENDEZ_VOUS}>
                <Button>Prendre rendez-vous</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">Medecine chinoise</div>
      <div className="bg-ds-rose-500 py-16">A propos (About Section)</div>
      <div className="py-16">Tous les soins (All Treatments Section)</div>
      <div className="bg-ds-blue-200 py-16">Consultation (Consultation Section)</div>
    </>
  )
}
