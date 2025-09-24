'use client'
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
    <div className="lg:hidden">
      <Header handleToggle={dialog.toggle} />

      <MobileDrawer store={dialog}>
        <nav>
          <ul className="flex flex-col gap-4 mt-8 text-lg">
            <NavLink store={dialog} href="/" label="Accueil" />
            <NavLink store={dialog} href="/acupuncture" label="Acupuncture" />
            <NavLink store={dialog} href="/medecine-chinoise" label="La Médecine Chinoise" />
            <NestedNavLinks title="Les Soins" store={dialog} links={SOINS} />
            <NestedNavLinks title="Consulter" store={dialog} links={CONSULTER} />
            <NavLink store={dialog} href="/rendez-vous" label="Prendre Rendez-vous" />
          </ul>
        </nav>
      </MobileDrawer>
    </div>
  )
}

const Header = ({ handleToggle }: { handleToggle: VoidFunction }) => {
  return (
    <div className="p-2 grid grid-cols-[auto_1fr] items-center">
      <Bars2Icon className="size-6 text-gray-800 z-10" role="button" onClick={handleToggle} />

      <Link href="/" className="no-underline relative left-[-24px]">
        <h1 className="text-2xl font-bold text-center">Amandine D&apos;Elia</h1>
      </Link>
    </div>
  )
}
