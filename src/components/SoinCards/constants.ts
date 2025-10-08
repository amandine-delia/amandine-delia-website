import { PATHS } from '@/constants/path'
import type { StaticImageData } from 'next/image'
import acupuncture from '../../../public/img/soins/acupuncture.jpg'
import massageTuiNa from '../../../public/img/soins/massage-tui-na.jpg'
import moxibustion from '../../../public/img/soins/moxibustion.jpg'
import pharmacopee from '../../../public/img/soins/pharmacopee.jpg'
import ventouses from '../../../public/img/soins/ventouses.jpg'

export type SoinCardProps = {
  title: string
  image: StaticImageData
  description: string
  path: string
}

export const SOIN_CARDS: SoinCardProps[] = [
  {
    title: 'Acupuncture',
    image: acupuncture,
    description:
      'L’acupuncture est l’une des pratiques les plus connues de la Médecine Traditionnelle Chinoise. Elle repose sur l’idée que l’énergie vitale, appelée Qi, circule dans le corps à travers des canaux appelés méridiens.',
    path: PATHS.ACUPUNCTURE,
  },
  {
    title: 'Moxibustion',
    image: moxibustion,
    description:
      'La moxibustion est une pratique traditionnelle de la médecine chinoise qui utilise la chaleur douce de l’armoise (plante séchée et roulée en bâton ou en cône). Cette chaleur est appliquée près de points d’acupuncture afin de stimuler la circulation de l’énergie (le Qi) et d’apporter confort et vitalité.',
    path: PATHS.MOXIBUSTION,
  },
  {
    title: 'Massage Tui Na',
    image: massageTuiNa,
    description:
      'Le Tui Na est l’une des grandes techniques de la médecine traditionnelle chinoise. C’est un massage énergétique qui utilise des pressions, des étirements et des mobilisations pour stimuler la circulation du Qi (énergie vitale) et harmoniser les fonctions du corps.',
    path: PATHS.MASSAGE_TUI_NA,
  },
  {
    title: 'Pharmacopée Chinoise',
    image: pharmacopee,
    description:
      'La pharmacopée chinoise est l’un des piliers de la Médecine Traditionnelle Chinoise. Elle repose sur l’utilisation de plantes, minéraux et parfois produits naturels, combinés en formules personnalisées.',
    path: PATHS.PHARMACOPEE,
  },
  {
    title: 'Ventouses',
    image: ventouses,
    description:
      'Les ventouses sont comme de petits bols posés sur la peau, qui créent une douce aspiration. Cette « étreinte » attire le sang et l’énergie vitale (Qi) vers la surface du corps, un peu comme si l’on ouvrait une fenêtre pour laisser circuler l’air frais dans une maison.',
    path: PATHS.VENTOUSES,
  },
]
