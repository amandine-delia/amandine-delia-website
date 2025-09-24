import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './theme.css'

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

// TODO: update metadata
export const metadata: Metadata = {
  title: "Amandine D'Elia",
  description: 'Médecine Traditionnelle Chinoise & Acupuncture',
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body className={`${quickSand.className} antialiased`}>
        <Nav />
        <main className="h-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
