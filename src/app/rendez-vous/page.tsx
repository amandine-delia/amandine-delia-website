import type { Address, Contact } from '@/api/contact'
import { ContactInfo } from '@/components/ContactInfo'
import { PageContainer } from '@/components/PageContainer'
import { P } from '@/components/Text'
import { encodeContact } from '@/utils/address'
import { getFilesInFolder, getPageData, parseJsonData, parseJsonFiles } from '@/utils/fetchData'

export default function RendezvousPage() {
  const addressFiles = getFilesInFolder('data/pages/office/address')
  const { data: address, isError: isAddressError } = parseJsonFiles<Address>(addressFiles)

  const contactFile = getPageData('data/pages/office/contact/contact.json')
  const { data: contact, isError: isContactError } = parseJsonData<Contact>(contactFile)

  const hasAddress = !isAddressError && address && address.length > 0

  return (
    <PageContainer>
      <div className="">
        {!isContactError && (
          <>
            <div className="min-h-[350px] flex flex-col gap-y-3 items-center justify-center">
              <P className="font-semibold text-2xl!">Amandine D&apos;Elia</P>
              <ContactInfo
                phone={encodeContact(contact?.phone)}
                email={encodeContact(contact?.email)}
              />
            </div>

            <div className="flex items-center mb-28">
              <div className="w-full h-[2px] bg-ds-rose-500" />
              <P color="rose" className="px-2">
                Cabinets
              </P>
              <div className="w-full h-[2px] bg-ds-rose-500" />
            </div>
          </>
        )}

        {hasAddress && (
          <div className="flex flex-col items-center">
            {address.map(({ name, address }, index) => {
              return (
                <div key={index} className="flex flex-col mb-8  items-center">
                  <P color="black" className="font-semibold">
                    {name}
                  </P>

                  <P>{address}</P>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
