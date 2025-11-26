import Link from 'next/link'

export const Breadcrumb = ({ step3 }: { step3: string }) => (
  <nav id="breadcrumb" className="text-sm breadcrumbs mb-6 md:hidden">
    <ul className="flex space-x-2 text-gray-600">
      <li>
        <Link href="/" className="hover:text-gray-900">
          Accueil
        </Link>
      </li>
      <li className="before:content-['>'] before:mx-2">
        <Link href="/soins" className="hover:text-gray-900">
          Tous les Soins
        </Link>
      </li>
      <li className="before:content-['>'] before:mx-2 text-gray-800">{step3}</li>
    </ul>
  </nav>
)
