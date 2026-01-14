import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://delia-acupuncture.fr/sitemap.xml',
    host: 'https://delia-acupuncture.fr',
  }
}
