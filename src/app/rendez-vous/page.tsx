import type { Address, Contact } from '@/api/contact'
import { ContactInfo } from '@/components/ContactInfo'
import { PageContainer } from '@/components/PageContainer'
import { P } from '@/components/Text'
import { encodeContact } from '@/utils/address'
import { getFilesInFolder, getPageData, parseJsonData, parseJsonFiles } from '@/utils/fetchData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prendre Rendez-vous',
  description:
    'Prenez rendez-vous pour vos consultations en médecine traditionnelle chinoise avec Amandine DELIA.',
  keywords: [
    'médecine traditionnelle chinoise',
    'acupuncture',
    'rendez-vous',
    'moxibustion',
    'massage tui na',
    'pharmacopée',
    'ventouses',
  ],
  openGraph: {
    title: 'Prendre Rendez-vous | Médecine Traditionnelle Chinoise Marseille Amandine DELIA',
    description:
      'Prenez rendez-vous pour vos consultations en médecine traditionnelle chinoise avec Amandine DELIA.',
    url: 'https://acupuncture-traditionnelle-marseille.fr/rendez-vous',
    type: 'website',
    images: 'https://acupuncture-traditionnelle-marseille.fr/img/seo_amandine_delia.jpg',
  },
}

export default function RendezvousPage() {
  const addressFiles = getFilesInFolder('data/pages/office/address')
  const { data: address, isError: isAddressError } = parseJsonFiles<Address>(addressFiles)

  const contactFile = getPageData('data/pages/office/contact/contact.json')
  const { data: contact, isError: isContactError } = parseJsonData<Contact>(contactFile)

  const hasAddress = !isAddressError && address && address.length > 0
  const hasMultipleAddress = hasAddress && address.length > 1

  return (
    <PageContainer>
      <div className="">
        {!isContactError && (
          <div className="min-h-[350px] flex flex-col gap-y-3 items-center justify-center">
            <P className="font-semibold text-2xl!">Amandine DELIA</P>
            <ContactInfo
              phone={encodeContact(contact?.phone)}
              email={encodeContact(contact?.email)}
              additional_info={contact?.additional_info}
            />
          </div>
        )}

        {hasAddress && (
          <>
            <div className="flex items-center mb-28">
              <div className="w-full h-[2px] bg-ds-rose-500" />
              <P color="rose" className="px-2">
                {hasMultipleAddress ? 'Cabinets' : 'Cabinet'}
              </P>
              <div className="w-full h-[2px] bg-ds-rose-500" />
            </div>

            <div className="flex flex-col items-center">
              {address.map(({ name, street, postalCode, city, more_info }, index) => {
                return (
                  <div key={index} className="flex flex-col mb-8  items-center">
                    {!!name && (
                      <P color="black" className="font-semibold">
                        {name}
                      </P>
                    )}

                    <P className="font-semibold">
                      {[street, postalCode, city].filter(Boolean).join(', ')}
                    </P>
                    {!!more_info && <P className="text-center italic">{more_info}</P>}
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </PageContainer>
  )
}
