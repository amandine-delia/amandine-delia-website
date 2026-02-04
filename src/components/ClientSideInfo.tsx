'use client'

import { Contact } from '@/api/contact'
import { useDecodeContact } from '@/utils/useDecodeContact'
import { P } from './Text'

export const ClientSideInfo = ({ phone, email, show }: Contact & { show: 'phone' | 'email' }) => {
  const { phoneClient, emailClient } = useDecodeContact({ phone, email })

  if (show === 'phone' && phone) {
    return <P>{phoneClient}</P>
  }

  return <P>{emailClient}</P>
}
