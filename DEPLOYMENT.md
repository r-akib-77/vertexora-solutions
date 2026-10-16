# Deployment — Cloudflare Pages

The project uses `output: "export"` so every route renders to static HTML in `./out`. No Node server, no API routes, no server actions — fully Pages-compatible.

## Settings

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node version | 20+ (Pages default is fine) |
| Environment variables | none required |

## Steps (Git integration)

1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo, set the build settings above, Deploy.
4. Verify: homepage loads, `/#services … #contact` anchors work, project images load, favicon present, no console errors.

## Steps (direct upload / Wrangler)

```bash
npm run build
npx wrangler pages deploy out --project-name vertexora-solutions
```

## Post-deploy checks

- [ ] All nav links + CTAs scroll to the right section
- [ ] Mobile menu opens/closes, closes on item select, no horizontal overflow at 320px
- [ ] Contact form: invalid input shows errors; valid input opens a `mailto:` draft
- [ ] `yoursite.pages.dev/sitemap.xml` and `/robots.txt` return 200
- [ ] Lighthouse: fix any significant Performance/A11y/SEO findings (no scores claimed without running)

## If deployment is blocked

Deployment requires Cloudflare account access (`pages:write`) or a connected repo. Without credentials this agent cannot publish — run the commands above where you're logged in (`wrangler login`), then share the resulting `*.pages.dev` URL.
