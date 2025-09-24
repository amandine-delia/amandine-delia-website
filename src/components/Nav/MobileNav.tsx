'use client'
import { Dialog, DialogOptions, useDialogStore } from '@ariakit/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { CONSULTER, SOINS } from './constants'
import './nav.css'
import { NavLink, NestedNavLinks } from './NavLinks'

export const MobileNav = () => {
  const dialog = useDialogStore()

  return (
    <div className="lg:hidden">
      <Header handleToggle={dialog.toggle} />

      <Drawer store={dialog}>
        <nav>
          <ul className="flex flex-col gap-1 mt-8 text-lg">
            <NavLink store={dialog} href="/" label="Accueil" />
            <NavLink store={dialog} href="/acupuncture" label="Acupuncture" />
            <NestedNavLinks title="Les Soins" store={dialog} links={SOINS} />
            <NestedNavLinks title="Consulter" store={dialog} links={CONSULTER} />
            <NavLink store={dialog} href="/rendez-vous" label="Prendre Rendez-vous" />
          </ul>
        </nav>
      </Drawer>
    </div>
  )
}

// type MenuLink = { label: string; href: string }
// type NavLinksProps = MenuLink & { store?: DialogOptions['store'] }

// const NavLinks = ({ children, store, href }: NavLinksProps) => {
//   return (
//     <li>
//       <Link href={href} onClick={store?.hide} className="cursor-pointer w-full inline-block">
//         {children}
//       </Link>
//     </li>
//   )
// }

// type NestedNavLinksProps = {
//   title: string
//   store?: DialogOptions['store']
//   links?: MenuLink[]
// }

// const NestedNavLinks = ({ title, store }: NestedNavLinksProps) => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <li>
//       <span
//         className="flex items-center gap-x-1.5 font-semibold"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>{title}</span>
//         <ChevronDownIcon className="size-5 text-gray-800" />
//       </span>
//       <ul className="nested-menu" data-enter={isOpen}>
//         <li>
//           <Link
//             href="/nested/one"
//             onClick={store?.hide}
//             className="cursor-pointer w-full inline-block"
//           >
//             One
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/nested/two"
//             onClick={store?.hide}
//             className="cursor-pointer w-full inline-block"
//           >
//             Two
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/nested/three"
//             onClick={store?.hide}
//             className="cursor-pointer w-full inline-block"
//           >
//             Three
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/nested/four"
//             onClick={store?.hide}
//             className="cursor-pointer w-full inline-block"
//           >
//             Four
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/nested/five"
//             onClick={store?.hide}
//             className="cursor-pointer w-full inline-block"
//           >
//             Five
//           </Link>
//         </li>
//       </ul>
//     </li>
//   )
// }

const Drawer = ({
  children,
  store,
}: {
  children: React.ReactNode
  store: DialogOptions['store']
}) => {
  return (
    <Dialog
      backdrop={<div className="nav-backdrop" />}
      hideOnInteractOutside
      modal
      render={<div className="nav-drawer" />}
      store={store}
    >
      <div className="p-4 h-full">
        <div className="flex justify-end">
          <XMarkIcon className="size-6 text-gray-800 z-10" onClick={store?.hide} />
        </div>
        {children}
      </div>
    </Dialog>
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
