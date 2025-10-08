'use client'
import { PATHS } from '@/constants/path'
import Image from 'next/image'
import Link from 'next/link'
import { DesktopNestedNavLinks, NavLink } from './NavLinks'
import { CONSULTER, SOINS } from './constants'

export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden lg:block">
      <Header />
    </div>
  )
}

const Header = () => {
  return (
    <div className="p-4 flex flex-col justify-center gap-y-1">
      <div className="flex items-center justify-center gap-x-2">
        <Image src="/img/pierre.png" alt="logo" width={30} height={30} />
        <Link href={PATHS.HOME} className="no-underline">
          <h1 className="text-2xl font-bold text-center">Amandine D&apos;Elia</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex flex-wrap gap-x-8 text-lg mx-auto w-fit">
          <NavLink href={PATHS.HOME} label="Accueil" />
          <NavLink href={PATHS.ACUPUNCTURE} label="Acupuncture" />
          <NavLink href={PATHS.MEDECINE_CHINOISE} label="La Médecine Chinoise" />
          <DesktopNestedNavLinks title="Les Soins" links={SOINS} />
          <DesktopNestedNavLinks title="Consulter" links={CONSULTER} />
          <NavLink href={PATHS.RENDEZ_VOUS} label="Prendre Rendez-vous" />
        </ul>
      </nav>
    </div>
  )
}
