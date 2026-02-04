'use client'
import { PATHS } from '@/constants/path'
import { useDialogStore } from '@ariakit/react'
import Link from 'next/link'
import { MenuBar } from '../Icons'
import { CONSULTER, SOINS } from './constants'
import { MobileDrawer } from './MobileDrawer'
import './nav.css'
import { NavLink, NestedNavLinks } from './NavLinks'

export const MobileNav = () => {
  const dialog = useDialogStore()

  return (
    <header className="lg:hidden">
      <Header handleToggle={dialog.toggle} />

      <MobileDrawer store={dialog}>
        <nav>
          <ul className="flex flex-col gap-6 mt-8 text-lg">
            <NavLink store={dialog} href="/" label="Accueil" />
            <NavLink store={dialog} href="/acupuncture" label="Acupuncture Chinoise" />
            <NavLink store={dialog} href="/medecine-chinoise" label="La Médecine Chinoise" />
            <NestedNavLinks title="Tous les Soins" store={dialog} links={SOINS} />
            <NestedNavLinks title="Consulter" store={dialog} links={CONSULTER} />
            <NavLink store={dialog} href="/rendez-vous" label="Prendre Rendez-vous" />
          </ul>
        </nav>
      </MobileDrawer>
    </header>
  )
}

const Header = ({ handleToggle }: { handleToggle: VoidFunction }) => {
  return (
    <div className="p-2 grid grid-cols-[1fr_auto] items-center">
      <Link href={PATHS.HOME} className="no-underline">
        <span className="text-2xl font-semibold relative">Amandine DELIA</span>
      </Link>

      <div onClick={handleToggle} className="p-2 cursor-pointer rounded-full bg-gray-100">
        <MenuBar className="text-gray-800 z-10" role="button" aria-label="Toggle menu" />
      </div>
    </div>
  )
}
