import { Container } from '@/components/Container'
import { A, H2, P, PageTitle } from '@/components/Text'
import { getIframeSrc } from '@/utils/address'
import { getFilesInFolder, getPageData, parseJsonData, parseJsonFiles } from '@/utils/fetchData'

type Address = { name: string; address: string; iframe: string }

type Contact = {
  phone?: string
  email?: string
}

const CONTACT_MAX_WIDTH = 'max-w-[500px]'

export default function RendezvousPage() {
  const addressFiles = getFilesInFolder('data/pages/office/address')
  const { data: address, isError: isAddressError } = parseJsonFiles<Address>(addressFiles)

  const contactFile = getPageData('data/pages/office/contact/contact.json')
  const { data: contact, isError: isContactError } = parseJsonData<Contact>(contactFile)

  const hasAddress = !isAddressError && address && address.length > 0

  return (
    <Container className="px-4 pt-8 pb-24">
      <PageTitle>Prendre rendez-vous</PageTitle>

      <div className="mt-4 md:mt-8 flex flex-wrap justify-around gap-y-8">
        {/* Contact Bloc */}
        {!isContactError && (
          <div className="border-2 border-ds-rose-700 rounded-2xl p-4 aspect-square w-full md:max-w-[350px] md:max-h-[350px]">
            <H2>Contact</H2>

            <div className="flex items-center mt-4">
              <P className="font-semibold">Amandine D&apos;Elia</P>
            </div>

            {contact.phone && (
              <div className="flex items-center gap-2 mt-2">
                <P className="font-medium">Téléphone:</P>
                <A customColor="black" hasUnderline={false} href={`tel:${contact.phone}`}>
                  {contact.phone}
                </A>
              </div>
            )}

            {contact.email && (
              <div className="flex items-center gap-2 mt-2">
                <P className="font-medium">Email:</P>
                <A customColor="black" hasUnderline={false} href={`mailto:${contact.email}`}>
                  {contact.email}
                </A>
              </div>
            )}
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
    </Container>
  )
}
