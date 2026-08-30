import { PATHS } from '@/constants/path'
import Link from 'next/link'
import { Button } from './Button'

export const RdvCta = ({ className = '' }) => {
  return (
    <div className={`mb-20 flex justify-center ${className}`}>
      <Link href={PATHS.RENDEZ_VOUS}>
        <Button variant="rose">Prendre rendez-vous</Button>
      </Link>
    </div>
  )
}
