import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://acupuncture-traditionnelle-marseille.fr/sitemap.xml',
    host: 'https://acupuncture-traditionnelle-marseille.fr',
  }
}
