# Google Search Indexing — WebAtlas

This site is a static Next.js export on Cloudflare Pages at **https://webatlas.xyz**. SEO files are generated at build time into `out/`.

## What the repo provides

| File | URL | Purpose |
|------|-----|---------|
| `app/sitemap.ts` | https://webatlas.xyz/sitemap.xml | All indexable routes + blog posts |
| `app/robots.ts` | https://webatlas.xyz/robots.txt | Allows Googlebot; points to sitemap |
| `lib/seo.ts` | — | Canonical URLs, page metadata helper, JSON-LD |
| `public/llms.txt` | https://webatlas.xyz/llms.txt | LLM/crawler site summary |

### Indexed URLs (12 total)

**Static pages (7)**

- https://webatlas.xyz/
- https://webatlas.xyz/services
- https://webatlas.xyz/process
- https://webatlas.xyz/blog
- https://webatlas.xyz/insights
- https://webatlas.xyz/about
- https://webatlas.xyz/contact

**Blog posts (5)**

- https://webatlas.xyz/blog/booking-website-morocco-clinics
- https://webatlas.xyz/blog/riad-direct-booking-marrakech
- https://webatlas.xyz/blog/web-agency-casablanca-vs-freelancer
- https://webatlas.xyz/blog/multilingual-website-morocco-export
- https://webatlas.xyz/blog/website-cost-morocco-2026

`/work` redirects to `/` and is **not** in the sitemap.

## Step-by-step: Google Search Console

### 1. Add your property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Choose **URL prefix** and enter: `https://webatlas.xyz`
4. Click **Continue**

### 2. Verify ownership (HTML meta tag method)

1. In GSC, select **HTML tag** verification
2. Copy the `content` value from the meta tag (the long token after `content="`)
3. In Cloudflare Pages → your project → **Settings** → **Environment variables**, add:

   | Variable | Value |
   |----------|-------|
   | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | *(paste the token from GSC)* |

4. Redeploy the site (push to `main` or **Retry deployment** in Cloudflare)
5. Confirm the tag is live: view page source on https://webatlas.xyz and search for `google-site-verification`
6. Return to GSC and click **Verify**

**Alternative:** DNS TXT record verification via Cloudflare DNS (no redeploy needed). Use this if you prefer not to add an env var.

### 3. Submit the sitemap

Use the **URL prefix** property `https://webatlas.xyz`, not `www.webatlas.xyz` (www has no DNS record).

1. In GSC, open **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml` (not `sitemap.xml/`)
3. Click **Submit**

Full URL: `https://webatlas.xyz/sitemap.xml` — no trailing slash on the sitemap file itself.

### 4. Request indexing for key pages (optional)

For new or updated pages, use **URL Inspection** in GSC:

1. Paste a URL (e.g. `https://webatlas.xyz/services`)
2. Click **Test live URL**
3. If eligible, click **Request indexing**

Priority URLs to inspect after first deploy:

- Homepage
- `/services`, `/contact`
- Each new blog post

### 5. Confirm Cloudflare is not blocking bots

In Cloudflare dashboard for `webatlas.xyz`:

1. **Security** → **Bots** — ensure verified bots (including Googlebot) are not blocked
2. **Security** → **WAF** — review rules that might challenge crawlers
3. **Scrape Shield** — Bot Fight Mode can interfere; allow verified bots or disable for static marketing sites

Test manually:

```bash
curl -I https://webatlas.xyz/robots.txt
curl -I https://webatlas.xyz/sitemap.xml
```

Both should return `200 OK`.

## Multilingual / hreflang limitation

WebAtlas uses **client-side i18n** (EN / FR / AR via `LanguageProvider`). All languages share the same URL — there are no separate `/fr/` or `/ar/` routes.

**Do not add `<link rel="alternate" hreflang="...">` tags** until you have distinct URLs per language. Google expects each hreflang target to be a unique, crawlable URL with that language's content in the initial HTML. Client-only language switching is invisible to crawlers for alternate-language signals.

Current approach:

- Default HTML `lang="en"` in root layout
- Server-rendered English metadata and JSON-LD
- French/Arabic copy updates in the browser after hydration

To support hreflang properly later, migrate to locale-prefixed routes (e.g. `/fr/services`) or server-side locale detection with separate static pages per language.

## Local verification

```bash
npm run build
# Check generated files:
cat out/sitemap.xml
cat out/robots.txt
```

After deploy, validate in GSC:

- **Sitemaps** — status "Success", discovered URLs match the list above
- **Pages** → **Indexing** — monitor coverage over 1–2 weeks

## Timeline expectations

- Sitemap submission: crawled within days
- Full indexing of all 12 URLs: typically 1–4 weeks for a new domain
- Rankings: depend on content, backlinks, and competition — indexing ≠ ranking

## Related docs

- [DEPLOY_CLOUDFLARE.md](./DEPLOY_CLOUDFLARE.md) — build and deploy settings
