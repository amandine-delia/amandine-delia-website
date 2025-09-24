'use client'
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
        <Link href="/">
          <h1 className="text-2xl font-bold text-center">Amandine D&apos;Elia</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex flex-wrap gap-x-8 text-lg mx-auto w-fit">
          <NavLink href="/" label="Accueil" />
          <NavLink href="/acupuncture" label="Acupuncture" />
          <NavLink href="/medecine-chinoise" label="La Médecine Chinoise" />
          <DesktopNestedNavLinks title="Les Soins" links={SOINS} />
          <DesktopNestedNavLinks title="Consulter" links={CONSULTER} />
          <NavLink href="/rendez-vous" label="Prendre Rendez-vous" />
        </ul>
      </nav>
    </div>
  )
}
