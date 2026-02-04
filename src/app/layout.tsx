import { Address, Contact } from '@/api/contact'
import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { getFilesInFolder, getPageData, parseJsonData, parseJsonFiles } from '@/utils/fetchData'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './theme.css'

export const metadata: Metadata = {
  title: {
    default: 'Médecine Traditionnelle Chinoise Marseille | Amandine DELIA',
    template: `%s | Médecine Traditionnelle Chinoise Marseille Amandine DELIA`,
  },
  description:
    'Cabinet de médecine chinoise à Marseille : acupuncture, pharmacopée, massages Tui Na. Praticien certifié avec plusieurs cabinets.',
  keywords: ['médecine chinoise marseille', 'acupuncture marseille', 'MTC marseille'],
  openGraph: {
    title: 'Médecine Traditionnelle Chinoise Marseille | Amandine DELIA',
    description:
      'Cabinet de médecine chinoise à Marseille : acupuncture, pharmacopée, massages Tui Na. Praticien certifié avec plusieurs cabinets.',
    url: 'https://acupuncture-traditionnelle-marseille.fr',
    locale: 'fr_FR',
    type: 'website',
  },
}

const getDynamicAddress = () => {
  const addressFiles = getFilesInFolder('data/pages/office/address')
  const { data: address, isError: isAddressError } = parseJsonFiles<Address>(addressFiles)
  const hasAddress = !isAddressError && address && address.length > 0

  if (!hasAddress) return {}

  return {
    address: address.map(({ street, postalCode, city }) => ({
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: city,
      postalCode: postalCode,
      addressCountry: 'FR',
    })),
  }
}

const getDynamicContact = () => {
  const contactFile = getPageData('data/pages/office/contact/contact.json')
  const { data: contact, isError: isContactError } = parseJsonData<Contact>(contactFile)

  if (isContactError || !contact) return {}

  return {
    telephone: contact.phone || '',
    email: contact.email || '',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Cabinet de Médecine Traditionnelle Chinoise - Amandine DELIA',
  description:
    'Cabinet de Médecine Traditionnelle Chinoise à Marseille proposant acupuncture, pharmacopée, massage Tui Na, moxibustion et ventouses.',
  url: 'https://acupuncture-traditionnelle-marseille.fr',
  image:
    'https://acupuncture-traditionnelle-marseille.fr/img/amandine_delia_cropped_compressed.webp',
  ...getDynamicContact(),
  ...getDynamicAddress(),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '20:00',
  },
  medicalSpecialty: ['Traditional Chinese Medicine', 'Acupuncture'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de Médecine Traditionnelle Chinoise',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Acupuncture',
          description:
            "L'acupuncture, technique millénaire de stimulation des points énergétiques par de fines aiguilles.",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Massage Tui Na',
          description: 'Le Tui Na est un massage thérapeutique issu de la médecine chinoise.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Moxibustion',
          description:
            "La moxibustion, technique de chauffe des points d'acupuncture avec l'armoise.",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalTherapy',
          name: 'Pharmacopée Chinoise',
          description: 'Utilisation de plantes médicinales selon la tradition millénaire.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Ventouses',
          description:
            'La technique des ventouses pour stimuler la circulation énergétique et sanguine.',
        },
      },
    ],
  },
  employee: {
    '@type': 'Person',
    name: 'Amandine DELIA',
    jobTitle: 'Praticienne en Médecine Traditionnelle Chinoise',
    knowsAbout: [
      'Acupuncture',
      'Médecine Traditionnelle Chinoise',
      'Massage Tui Na',
      'Pharmacopée',
      'Moxibustion',
    ],
  },
  areaServed: {
    '@type': 'City',
    name: 'Marseille',
  },
  sameAs: ['https://www.linkedin.com/in/amandine-d-elia-9bb0a6352/'],
}

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body className={`${quickSand.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="min-h-full overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
