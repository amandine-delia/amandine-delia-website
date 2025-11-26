# Table of Contents

- [Auth](#auth)
- [Structure](#structure)
- [Fetch Data](#fetch-data)
- [Development](#development)

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

## Development

```bash
yarn dev
```

If you need to access the `/admin` page locally:

- Add `local_backend: true` at the top of your `public/admin/config.yml`
- Run the express server `npx decap-server`
- Run the local project `yarn dev`
- Access the page `http://localhost:3000/admin/index.html`

See more here [in the doc](https://decapcms.org/docs/working-with-a-local-git-repository/).
