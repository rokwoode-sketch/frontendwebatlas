# Deploy WebAtlas Frontend to Cloudflare Pages

Static Next.js export (`output: 'export'`) — no backend, no database, no API calls. Contact is WhatsApp only.

**This project is a static site.** Cloudflare must serve the `out/` folder as **Pages**, not deploy it as a **Worker** via Wrangler/OpenNext.

## Prerequisites

- GitHub repo: [rokwoode-sketch/frontendwebatlas](https://github.com/rokwoode-sketch/frontendwebatlas)
- Cloudflare account (free tier)

## Cloudflare Dashboard Setup (exact settings)

1. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
   - Choose **Pages**, not **Workers**. If you already created a Workers project by mistake, delete it and create a new **Pages** project.
2. Select **rokwoode-sketch/frontendwebatlas**
3. Production branch: `main`
4. Build settings:

| Setting | Value |
|---------|-------|
| **Project type** | **Pages** (NOT Workers) |
| Framework preset | `None` |
| Root directory | `/` (repo root) |
| Build command | `npm run build` |
| Build output directory | `out` |
| **Deploy command** | **Leave empty / none** — do **not** set `npx wrangler deploy` |

5. **Environment variables** (optional — site works without them):

| Variable | Example |
|----------|---------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SITE_URL` | `https://webatlas.xyz` |
| `NEXT_PUBLIC_SITE_NAME` | `WebAtlas` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | *(GSC HTML tag token — see [GOOGLE_INDEXING.md](./GOOGLE_INDEXING.md))* |

No `NEXT_PUBLIC_API_URL` — the frontend has no backend.

6. **Save and Deploy**

### If the project already exists

1. Pages project → **Settings** → **Builds & deployments** → **Build configuration**
2. Set **Build command** to `npm run build`
3. Set **Build output directory** to `out`
4. **Clear the Deploy command** field completely (remove `npx wrangler deploy` if present)
5. **Save** and trigger a new deployment

## Why Deploy command must be empty

Cloudflare Pages builds static assets with `npm run build` and publishes the `out/` folder automatically.

If you add `npx wrangler deploy` as a deploy command, Cloudflare treats the app as a **Worker**. Wrangler auto-detects Next.js and runs the **OpenNext** adapter, which requires Next.js 15+ and fails on this project (Next.js 14.2.x with static export).

Correct flow:

```
npm run build  →  static files in out/  →  Cloudflare Pages serves out/
```

Wrong flow (causes build failure):

```
npm run build  →  npx wrangler deploy  →  OpenNext adapter  →  ERROR (Next 14 unsupported)
```

This repo has **no** `wrangler.jsonc`, `open-next.config.ts`, or `@opennextjs/cloudflare` — by design.

## Custom Domain

1. Pages project → **Custom domains** → **Set up a custom domain**
2. Add `webatlas.xyz` (apex — canonical host)
3. Add `www.webatlas.xyz` if you want the www hostname reachable (DNS is configured automatically when the zone is on Cloudflare)
4. **Redirect www → apex** via Cloudflare **Redirect Rules** (not `_redirects`):

   | Field | Value |
   |-------|-------|
   | When | `(http.host eq "www.webatlas.xyz")` |
   | Then | Static redirect to `https://webatlas.xyz${http.request.uri.path}`, status **301** |

   Canonical URLs, sitemap, and GSC all use `https://webatlas.xyz`. See [GOOGLE_INDEXING.md](./GOOGLE_INDEXING.md#wwwwebatlasxyz-live--redirect-recommended).

## Redirects

Path redirects in `public/_redirects` (Cloudflare Pages format):

- `/work` → `/` (301)
- `/sitemap.xml/` → `/sitemap.xml` (301)
- `/robots.txt/` → `/robots.txt` (301)

Hostname redirects (www → apex) must be configured in the **Cloudflare dashboard** — `_redirects` is path-only.

## Google Search indexing

See **[GOOGLE_INDEXING.md](./GOOGLE_INDEXING.md)** for:

- Sitemap URL list and GSC setup steps
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var
- Cloudflare bot settings
- hreflang / i18n limitations

## Local Build

```bash
npm install
npm run build
# Static files in ./out — serve with any static host or `npx serve out`
```

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Build succeeds but deploy fails with OpenNext / Wrangler / "Next.js 14 unsupported" | Remove deploy command; use **Pages** not **Workers** |
| Empty site or 404 on routes | Confirm build output directory is `out` (not `.next`) |
| Wrong Node version | Set `NODE_VERSION=20` in Pages environment variables |

## What Was Removed

- Contact form API (`POST /api/contact`)
- `NEXT_PUBLIC_API_URL` and all backend fetch calls
- OpenNext / Wrangler Worker deployment (not compatible with static export on Next 14)
- Docker/EasyPanel deployment is no longer required for the frontend
