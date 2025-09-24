import { PATHS } from '@/constants/path'
import Link from 'next/link'
import { Copyright } from './Copyright'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-4 flex flex-col space-y-2 text-gray-600 text-sm">
      <div className="container mx-auto text-center">
        <Link href={PATHS.MENTIONS_LEGALES} className="text-sm hover:underline">
          Mentions Légales
        </Link>
      </div>
      <div className="container mx-auto text-center">
        <Copyright />
      </div>
    </footer>
  )
}
