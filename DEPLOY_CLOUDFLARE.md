# Deploy WebAtlas Frontend to Cloudflare Pages

Static Next.js export — no backend, no database, no API calls. Contact is WhatsApp only.

## Prerequisites

- GitHub repo: [rokwoode-sketch/frontendwebatlas](https://github.com/rokwoode-sketch/frontendwebatlas)
- Cloudflare account (free tier)

## Cloudflare Dashboard Setup

1. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select **rokwoode-sketch/frontendwebatlas**
3. Production branch: `main`
4. Build settings:

| Setting | Value |
|---------|-------|
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node.js version | `20` (set in **Settings → Environment variables** → `NODE_VERSION=20`) |

5. **Environment variables** (optional — site works without them):

| Variable | Example |
|----------|---------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SITE_URL` | `https://webatlas.xyz` |
| `NEXT_PUBLIC_SITE_NAME` | `WebAtlas` |

No `NEXT_PUBLIC_API_URL` — the frontend has no backend.

6. **Save and Deploy**

## Custom Domain

1. Pages project → **Custom domains** → **Set up a custom domain**
2. Add `webatlas.xyz` (and `www.webatlas.xyz` if needed)
3. Cloudflare will configure DNS automatically if the zone is on Cloudflare

## Redirects

`/work` → `/` is handled by `public/_redirects` (Cloudflare Pages format).

## Local Build

```bash
npm install
npm run build
# Static files in ./out — serve with any static host or `npx serve out`
```

## What Was Removed

- Contact form API (`POST /api/contact`)
- `NEXT_PUBLIC_API_URL` and all backend fetch calls
- Docker/EasyPanel deployment is no longer required for the frontend
