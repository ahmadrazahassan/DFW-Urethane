# DFW Urethane — Marketing Site

Production-grade marketing website for **DFW Urethane**, a commercial roofing &
spray-foam company in Arlington, TX. Warm neutral-luxury / editorial aesthetic.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `app/globals.css`)
- **motion** (Framer Motion) — entrance animations, respects reduced-motion
- **next/font** — self-hosted Inter Tight (400/500/600/700)
- **next/image** + **lucide-react**

## Getting started

```bash
npm install      # if you haven't already
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run start` (serve the
build), `npm run lint`.

## Where things live

- `lib/content.ts` — **all copy & data** (edit text/images here, one place).
- `app/globals.css` — design tokens (`@theme`), marquee keyframes, base styles.
- `app/layout.tsx` — font, SEO metadata, Open Graph, `RoofingContractor` JSON-LD.
- `app/page.tsx` — composes the nine sections in order.
- `components/*` — one file per section + `components/ui/*` primitives
  (`ButtonPill`, `LabelPill`, `StatCard`, `Reveal`, `Section`).

## Pre-launch checklist (replace placeholders)

- [ ] **Photos** — every image is an Unsplash placeholder. Swap each `src` in
      `lib/content.ts` for DFW's real project photos (search `TODO` in the file
      and in components). Add real photos to `public/images/` and reference them
      locally, or keep remote hosts (whitelist them in `next.config.ts`).
- [ ] **Email** — confirm/replace `info@dfwurethane.com` in `lib/content.ts`
      (`business.email`).
- [ ] **Social URLs** — set real Facebook / YouTube / X / LinkedIn links in
      `business.socials` (currently `#`).
- [ ] **Phone & address** — verify `(972) 222-8462` and the Arlington address.
- [ ] **Canonical URL** — confirm `business.url` (used by metadata + JSON-LD).
- [ ] **OG image** — add a real Open Graph share image to the `openGraph`
      metadata in `app/layout.tsx`.

## Deploy

Zero-config on **Vercel** — import the repo and deploy. Remote images are served
from `images.unsplash.com` (configured in `next.config.ts`); update
`remotePatterns` if you move images to another host.
