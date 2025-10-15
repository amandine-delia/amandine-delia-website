'use client'
import { PATHS } from '@/constants/path'
import { useDialogStore } from '@ariakit/react'
import { Bars2Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
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
          <ul className="flex flex-col gap-4 mt-8 text-lg">
            <NavLink store={dialog} href="/" label="Accueil" />
            <NavLink store={dialog} href="/acupuncture" label="Acupuncture" />
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
    <div className="p-2 grid grid-cols-[auto_1fr] items-center">
      <div onClick={handleToggle} className="p-2 cursor-pointer">
        <Bars2Icon className="size-6 text-gray-800 z-10" role="button" />
      </div>

      <Link href={PATHS.HOME} className="no-underline text-center">
        <span className="text-2xl font-bold relative left-[-27px]">Amandine D&apos;Elia</span>
      </Link>
    </div>
  )
}
