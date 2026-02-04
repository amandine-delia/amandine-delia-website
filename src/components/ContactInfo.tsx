'use client'
import { Contact } from '@/api/contact'
import { useDecodeContact } from '@/utils/useDecodeContact'
import { A, P } from './Text'

export const ContactInfo = ({ phone, email }: Contact) => {
  const { phoneClient, emailClient, phoneHref, emailHref } = useDecodeContact({ phone, email })

  return (
    <>
      {phone && (
        <div className="flex items-center gap-2 mt-2">
          <P className="font-medium">Téléphone:</P>
          <A customColor="black" hasUnderline={false} href={phoneHref}>
            {phoneClient}
          </A>
        </div>
      )}

      {email && (
        <div className="flex items-center gap-2 mt-2">
          <P className="font-medium">Email:</P>
          <A customColor="black" hasUnderline={false} href={emailHref}>
            {emailClient}
          </A>
        </div>
      )}
    </>
  )
}
