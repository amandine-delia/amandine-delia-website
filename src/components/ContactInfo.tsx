'use client'
import { Contact } from '@/api/contact'
import { decodeContact } from '@/utils/address'
import { useEffect, useState } from 'react'
import { A, P } from './Text'

export const ContactInfo = ({ phone, email }: Contact) => {
  const [phoneClient, setPhoneClient] = useState('** ** ** ** **')
  const [emailClient, setEmailClient] = useState('******@*****.***')
  const [phoneHref, setPhoneHref] = useState('')
  const [emailHref, setEmailHref] = useState('')

  useEffect(() => {
    // Decode Base64 encoded contact info on client-side
    const decodedPhone = decodeContact(phone)
    const decodedEmail = decodeContact(email)

    if (decodedPhone) {
      setPhoneClient(decodedPhone)
      setPhoneHref(`tel:${decodedPhone}`)
    }
    if (decodedEmail) {
      setEmailClient(decodedEmail)
      setEmailHref(`mailto:${decodedEmail}`)
    }
  }, [phone, email])

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
