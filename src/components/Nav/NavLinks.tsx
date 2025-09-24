import { DialogOptions } from '@ariakit/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import './nav.css'

export type MenuLink = { label: string; href: string }
type NavLinkProps = MenuLink & { store?: DialogOptions['store']; onClick?: VoidFunction }

export const NavLink = ({ label, store, href, onClick }: NavLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        onClick={() => {
          store?.hide()
          onClick?.()
        }}
        className="cursor-pointer w-full inline-block"
      >
        {label}
      </Link>
    </li>
  )
}

type NestedNavLinksProps = {
  title: string
  store?: DialogOptions['store']
  links?: MenuLink[]
}

export const NestedNavLinks = ({ title, store, links }: NestedNavLinksProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li>
      <span className="flex items-center gap-x-1.5" onClick={handleToggle}>
        <span>{title}</span>
        <ChevronDownIcon
          className={`size-5 text-gray-800 transition-transform duration-(--duration-slow) ${isOpen ? 'rotate-180' : ''}`}
        />
      </span>
      <ul className="nested-menu pl-3" data-enter={isOpen}>
        {links?.map(link => (
          <NavLink
            key={link.href}
            onClick={handleToggle}
            href={link.href}
            label={link.label}
            store={store}
          />
        ))}
      </ul>
    </li>
  )
}
