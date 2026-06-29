# WebAtlas Frontend

Next.js static site for [webatlas.xyz](https://webatlas.xyz). Deployed on **Cloudflare Pages** from this repo.

Contact is **WhatsApp only** (+212624363356) — no backend or API.

## Setup

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

## Environment (optional)

Copy `.env.example` to `.env.local`. All values have defaults in `lib/seo.ts`:

- `NEXT_PUBLIC_SITE_URL` — public site URL
- `NEXT_PUBLIC_SITE_NAME` — site name
- `NEXT_PUBLIC_CONTACT_EMAIL` — display email (hello@webatlas.xyz)

## Scripts

- `npm run dev` — development server
- `npm run build` — static export to `out/` (Cloudflare Pages)

## Deploy

See [DEPLOY_CLOUDFLARE.md](./DEPLOY_CLOUDFLARE.md) for Cloudflare Pages setup.
