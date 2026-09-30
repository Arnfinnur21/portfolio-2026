# Arnfinnur's Portfolio

My personal portfolio: work experience, client projects, personal projects, and education, in Icelandic and English.

**Live:** https://portfolio-2026-rose-pi.vercel.app/

## Stack

- [Next.js 16](https://nextjs.org/) (App Router), React 19, TypeScript
- Tailwind CSS 4
- Framer Motion and GSAP for animation
- OGL (WebGL) for the ferrofluid, thread, and masked-heading effects in the hero
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/app/`: layout and page
- `src/components/sections/`: page sections (Hero, About, Experience, Projects, …)
- `src/components/ui/`: shared UI and WebGL components
- `src/lib/data.ts`: all site content, both languages
