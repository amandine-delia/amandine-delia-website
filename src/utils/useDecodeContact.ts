'use client'
import { Contact } from '@/api/contact'
import { useEffect, useState } from 'react'
import { decodeContact } from './address'

export const useDecodeContact = ({ phone, email }: Contact) => {
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

  return { phoneClient, emailClient, phoneHref, emailHref }
}
