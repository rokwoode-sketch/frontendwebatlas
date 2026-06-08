# WebAtlas Frontend

Next.js frontend for the WebAtlas website.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_API_URL` — backend API URL
- `NEXT_PUBLIC_SITE_URL` — public site URL
- `NEXT_PUBLIC_SITE_NAME` — site name

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
