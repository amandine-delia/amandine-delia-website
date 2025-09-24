# Table of Contents

- [Auth](#auth)
- [Structure](#structure)
- [Fetch Data](#fetch-data)

## Auth

The app Auth and login is handled by GitHub. In the Developer settings of the repo, in the OAuth App section there is the `CMS Login - Netlify + Decap CMS`. This OAuth app is added in Netlify project configuration as a GitHub OAuth Provider. Only repo owner and collaborators can login and update data.

## Structure

- Homepage 📄
- Acupuncture 📄
- Les Soins
  - La Médecine Chinoise 📄
  - Acupuncture 📄
  - Moxibustion
  - Massage Tui Na
  - Pharmacopé
  - Ventouse
- Consulter
  - Premier Rendez-vous
  - À propos
  - Tarifs et modalités de paiement
  - FAQ
- Prendre Rendez-vous 📄
- Mentions légales

## Fetch data

```ts
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

interface BlogPost {
  title: string
  date: string
  thumbnail: string
  content: string
}

async function getBlogPost(): Promise<BlogPost> {
  const filePath = path.join(process.cwd(), 'public', 'content/posts/blog/my-title.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    title: data.title,
    date: data.date,
    thumbnail: data.thumbnail,
    content,
  }
}
```
