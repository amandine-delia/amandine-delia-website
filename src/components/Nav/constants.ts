import { PATHS } from '@/constants/path'
import { MenuLink } from './NavLinks'

export const SOINS: MenuLink[] = [
  { label: 'Acupuncture', href: PATHS.ACUPUNCTURE },
  { label: 'Moxibustion', href: PATHS.MOXIBUSTION },
  { label: 'Massage Tui Na', href: PATHS.MASSAGE_TUI_NA },
  { label: 'Pharmacopée', href: PATHS.PHARMACOPEE },
  { label: 'Ventouse', href: PATHS.VENTOUSES },
]

export const CONSULTER: MenuLink[] = [
  { label: 'Premier Rendez-vous', href: PATHS.PREMIER_RENDEZ_VOUS },
  { label: 'À propos', href: PATHS.A_PROPOS },
  { label: 'Tarifs et modalités de paiement', href: PATHS.TARIFS },
  { label: 'FAQ', href: PATHS.FAQ },
]
