# Seungho Lee — Developer Portfolio

Personal portfolio site for Seungho Lee, CS + Business student at USC. Built with Next.js 15 and deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Modules
- **Icons**: lucide-react
- **Analytics**: Vercel Analytics
- **Package manager**: pnpm

## Project Structure

```
app/
  layout.tsx        # Root layout, metadata, fonts
  page.tsx          # Entry point
  globals.css       # Global styles, CSS variables, background effects
components/
  Portfolio.tsx     # Main portfolio component (scroll-spy nav, all sections)
  Portfolio.module.css
public/
  project-htmls/    # Self-contained HTML animation embeds for project cards
  *.png / *.svg     # Project assets (Arduino board images, logos)
```

## Sections

- **Projects** — Circuit Sensei, Eudox.ai (with animated HTML previews embedded as iframes)
- **About** — Bio, professional objective, contact info
- **Experience** — Allganize, Keck School of Medicine USC, CityPlug
- **Skills** — Languages, frameworks, tools
- **Activities** — Extracurriculars and other activities

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Vercel. Push to `main` to trigger a production build.
