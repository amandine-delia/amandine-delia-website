import type { Address, Contact } from '@/api/contact'
import { ClientSideInfo } from '@/components/ClientSideInfo'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { P, PageTitle, Strong } from '@/components/Text'
import { encodeContact } from '@/utils/address'
import { getFilesInFolder, getPageData, parseJsonData, parseJsonFiles } from '@/utils/fetchData'

type MentionsLegalesData = {
  pageTitle: string
  body: string
}

export default function MentionsLegalesPage() {
  const pageData = getPageData('data/pages/mentions-legales.json')
  const { data, isError } = parseJsonData<MentionsLegalesData>(pageData)

  const addressFiles = getFilesInFolder('data/pages/office/address')
  const { data: address, isError: isAddressError } = parseJsonFiles<Address>(addressFiles)
  const contactFile = getPageData('data/pages/office/contact/contact.json')
  const { data: contact, isError: isContactError } = parseJsonData<Contact>(contactFile)

  const pageTitle = data?.pageTitle || 'Mentions Légales'
  const hasAddress = !isAddressError && address && address.length > 0

  return (
    <PageContainer className="max-w-[700px]! px-4 pt-8 pb-24">
      <PageTitle>{pageTitle}</PageTitle>

      <div className="mt-4 md:mt-8">
        <div className="mb-6 flex flex-col gap-y-6">
          <P>
            <Strong>Éditeur du site</Strong>
          </P>
          <P>
            {`Le présent site, accessible à l’URL : https://acupuncture-traditionnelle-marseille.fr/
est édité par :`}
          </P>
          <P>Nom et prénom : Amandine D&apos;Elia</P>
          <P>Statut : Praticien en médecine traditionnelle chinoise</P>
          <div className="flex gap-x-1">
            <P>Téléphone :</P>
            <ClientSideInfo
              phone={encodeContact(contact?.phone || '')}
              email={encodeContact(contact?.email || '')}
              show="phone"
            />
          </div>
          <div className="flex gap-x-1">
            <P>Adresse e-mail :</P>
            <ClientSideInfo
              phone={encodeContact(contact?.phone || '')}
              email={encodeContact(contact?.email || '')}
              show="email"
            />
          </div>
          <div>
            <P>Adresse professionnelle :</P>

            {hasAddress &&
              address.map(({ name, street, postalCode, city }, index) => {
                return (
                  <div key={index} className="mb-2  items-center">
                    <P>{[name, street, postalCode, city].filter(Boolean).join(', ')}</P>
                  </div>
                )
              })}
          </div>
        </div>
        {data && !isError ? <Markdown>{data?.body}</Markdown> : <ErrorMessage />}
      </div>
    </PageContainer>
  )
}
