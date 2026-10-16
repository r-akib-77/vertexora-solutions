# Vertexora Solutions — Premium Agency Website

Frontend-only agency site. Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide. Statically exported — no backend, no database, no API calls.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in ./out
```

`typecheck`: `npm run typecheck`

## Editing content (no code rewrites needed)

| What | File |
|---|---|
| Brand, email, nav, socials, metadata | `src/config/site.ts` |
| Services (6 cards) | `src/data/services.ts` |
| Portfolio projects | `src/data/projects.ts` — drop preview images into `public/images/projects/` |
| Testimonials | `src/data/testimonials.ts` (empty → section hidden; set `hideUntilReady = false` to preview) |
| Tech stack chips | `src/data/technologies.ts` |
| Process steps | `src/data/process.ts` |

Contact details live in **one place**: `src/config/site.ts` (`email`, `location`, `socials`). Leave a social URL empty and it is hidden automatically — never commit placeholder links.

## Logos

The navbar/footer use a crisp inline-SVG recreation of the supplied mark (`src/components/Logo.tsx`, `VertexMark`). To use the supplied PNGs instead:

1. Save them as `public/images/logo-horizontal-dark.png` (for light backgrounds) and `public/images/logo-horizontal-light.png` (for dark backgrounds).
2. Swap the `<Logo />` call in `Navbar`/`Footer` for `<Image src="…" …>` — proportions preserved with `height` + `width:auto`.

Favicon: `public/favicon.svg`. Social card: `public/images/og-cover.svg`.

## Contact form (frontend-only)

`src/components/ContactSection.tsx` validates client-side, then builds a `mailto:` link (URL-encoded subject + body) and opens the visitor's mail app. Nothing is stored or "sent" by the site — the UI states this explicitly, with a fallback *Open email draft* / *Copy message* panel if the mail client doesn't open.

## Deploying to Cloudflare Pages

Static export is already configured (`next.config.ts`: `output: "export"`, `images.unoptimized: true`).

**Option A — Dashboard:** connect the repo → Framework preset *Next.js (Static HTML Export)* → Build command `npm run build` → Output directory `out` → Deploy.

**Option B — Wrangler:**

```bash
npm run build
npx wrangler pages deploy out --project-name vertexora-solutions
```

See `DEPLOYMENT.md` for the full checklist. No server functions, no env vars required.
