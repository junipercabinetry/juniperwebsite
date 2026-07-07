# Juniper Cabinetry Website

Marketing website for [Juniper Cabinetry](https://junipercabinetry.ca) — a custom
cabinetry studio in Richmond, BC serving Metro Vancouver.

## Stack

- **Next.js 14** (App Router, static export via `output: 'export'`)
- **Tailwind CSS** with brand tokens (`cream`, `brand-green`, `brand-brown`)
- **Netlify** hosting (`netlify.toml` builds and publishes `out/`)
- **Netlify Forms** for the contact form (form named `contact`, honeypot `bot-field`)

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # static export to out/
npm run typecheck  # TypeScript check
```

## Structure

- `app/` — routes. Each route folder has a `layout.tsx` exporting its SEO metadata
  (page components are client components and cannot export metadata themselves).
- `lib/projects.ts` — portfolio project data. Add a project here and it appears in
  the grid, gets its own page at `/portfolio/<slug>/`, and is added to the sitemap.
- `lib/service-areas.ts` — city landing pages (`/service-areas/<city>/`).
- `lib/faqs.ts` — FAQ content rendered on /services with FAQPage schema.
- `components/` — shared components (`PageHero`, `CTASection`, `ButtonLink`, nav, footer).
- `scripts/optimize-images.mjs` — image pipeline; see below.

## Images

All photography lives in `public/` as **WebP** (max 1920px wide). To add new photos,
drop the original JPG/PNG into `public/` and run:

```bash
npm run optimize-images
```

This converts them to WebP, removes the originals, and regenerates `og-image.jpg`
and the hero video poster. Always render photos through `next/image` with
meaningful `alt` text.

## Configuration

| Setting | Where | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Netlify env var | GA4 measurement ID (`G-XXXXXXX`). Analytics is disabled when unset. |
| Google Search Console | `app/layout.tsx` | Add a `verification.google` entry to metadata after registering. |
| Contact form notifications | Netlify UI → Forms | Enable email notifications for the `contact` form and send a test submission after each deploy. |

## Known follow-ups

- `public/juniper-hero-page-video.mp4` is ~6.5 MB. Re-encode to ~2 MB
  (e.g. `ffmpeg -i in.mp4 -vf scale=1920:-2 -c:v libx264 -crf 28 -an out.mp4`)
  when ffmpeg is available.
- Git history still contains old build artifacts (~180 MB). A history rewrite
  (`git filter-repo`) would shrink clones but requires coordinating with all users
  of the repo.
