# Portfolio — Nicolas Planche

Source code of my personal portfolio, [nicolasplanche.fr](https://nicolasplanche.fr): a bilingual (FR/EN) showcase of my projects, skills, work experience and education, with a working contact form.

Built with **Next.js 15** and **HeroUI**.

## ✨ Features

- Bilingual site (French/English) via `next-intl`
- Pages: introduction, about, projects, skills, experience, education, contact
- Dynamic project detail pages (`/projet/[slug]`)
- Contact form sending emails via [Resend](https://resend.com)
- SEO: sitemap generation, custom `seo` components, optimized images (AVIF/WebP)
- Smooth animations with Framer Motion, carousels with Embla, lightbox with fslightbox
- Dark/light theme via `next-themes`

## 🧰 Tech Stack

- [Next.js 15](https://nextjs.org/docs) (Pages Router)
- [HeroUI](https://heroui.com) + Tailwind CSS
- [next-intl](https://next-intl.dev) for i18n
- [Framer Motion](https://www.framer.com/motion)
- [Resend](https://resend.com) for transactional email
- TypeScript

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # set RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Structure

```
pages/
├── index.tsx            Home
├── a-propos/             About
├── projets/              Projects list
├── projet/[slug].tsx     Project detail
├── competences/          Skills
├── xp/                   Experience
├── education/            Education
├── contact/              Contact form
└── api/contact.ts        Contact form handler (Resend)

components/    UI, navbar, animations, icons, SEO
messages/      fr.json / en.json translations
config/        Site configuration (nav, links, metadata)
```

## 📝 License

MIT
