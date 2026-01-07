import type { Address, Contact } from '@/api/contact'
import { ContactInfo } from '@/components/ContactInfo'
import { PageContainer } from '@/components/PageContainer'
import { H2, P, PageTitle } from '@/components/Text'
import { encodeContact, getIframeSrc } from '@/utils/address'
import { getFilesInFolder, getPageData, parseJsonData, parseJsonFiles } from '@/utils/fetchData'

// This is used for iframe width calculation
const CONTACT_MAX_WIDTH = 'max-w-[500px]'

export default function RendezvousPage() {
  const addressFiles = getFilesInFolder('data/pages/office/address')
  const { data: address, isError: isAddressError } = parseJsonFiles<Address>(addressFiles)

  const contactFile = getPageData('data/pages/office/contact/contact.json')
  const { data: contact, isError: isContactError } = parseJsonData<Contact>(contactFile)

  const hasAddress = !isAddressError && address && address.length > 0

  return (
    <PageContainer>
      <PageTitle>Prendre rendez-vous</PageTitle>

      <div className="mt-4 md:mt-8 flex flex-wrap justify-around gap-y-8">
        {/* Contact Bloc */}
        {!isContactError && (
          <div className="border-2 border-ds-rose-700 rounded-2xl p-4 aspect-square w-full md:max-w-[350px] md:max-h-[350px]">
            <H2>Contact</H2>

            <div className="flex items-center mt-4">
              <P className="font-semibold">Amandine D&apos;Elia</P>
            </div>

            <ContactInfo
              phone={encodeContact(contact?.phone)}
              email={encodeContact(contact?.email)}
            />
          </div>
        )}

        {/* Cabinets Bloc */}
        {hasAddress && (
          <div className={`flex flex-col gap-y-16 overflow-hidden ${CONTACT_MAX_WIDTH}`}>
            {address.map(({ name, address, iframe }, index) => {
              const iframeSrc = getIframeSrc(iframe)

              return (
                <div key={index} className="flex flex-col">
                  <H2>{name}</H2>

                  <P>{address}</P>

                  {!!iframeSrc && (
                    <iframe
                      src={iframeSrc}
                      className={`w-[calc(100vw-32px)] ${CONTACT_MAX_WIDTH} aspect-square border-0 mt-4`}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
