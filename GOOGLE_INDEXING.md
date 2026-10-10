# Google Search Indexing — WebAtlas

This site is a static Next.js export on Cloudflare Pages at **https://webatlas.xyz** (canonical host). SEO files are generated at build time into `out/`.

## www.webatlas.xyz (live — redirect recommended)

`www.webatlas.xyz` is deployed on Cloudflare Pages and serves the same static site as the apex. Verified live behavior:

| URL | Status | Notes |
|-----|--------|-------|
| `https://www.webatlas.xyz/` | **200 OK** | Duplicate homepage — **no 301 to apex** |
| `https://www.webatlas.xyz/sitemap.xml` | **200 OK** | Same XML as apex; `<loc>` URLs are apex-only |
| `https://webatlas.xyz/` | **200 OK** | Canonical host |
| `https://webatlas.xyz/sitemap.xml` | **200 OK** | Submit this URL in GSC |

**Repo safeguards already in place:** every page has `<link rel="canonical" href="https://webatlas.xyz/...">`, `metadataBase` is apex, and `app/sitemap.ts` / `app/robots.ts` emit apex URLs only. Google should consolidate to apex even without a redirect, but a **301 www → apex** is still best practice (avoids split crawl budget and duplicate URL reports).

**`public/_redirects` cannot redirect by hostname** — Cloudflare Pages `_redirects` is path-only. Use a **Cloudflare Redirect Rule** (dashboard) or Bulk Redirects. See [§5D](#d-www--apex-redirect-recommended) below.

**After you add the redirect rule**, confirm:

```bash
curl.exe -sI https://www.webatlas.xyz/
# Expected: HTTP/1.1 301 Moved Permanently
# Location: https://webatlas.xyz/
```

### GSC: www property?

| Question | Answer |
|----------|--------|
| Add `https://www.webatlas.xyz` as a separate URL-prefix property? | **No** — use apex only |
| Use domain property `sc-domain:webatlas.xyz`? | Optional; covers apex + www + http, but URL prefix `https://webatlas.xyz` is easier to debug |
| Where to submit `sitemap.xml`? | **Only** on the `https://webatlas.xyz` property |
| Submit sitemap on www property? | **No** — would duplicate discovery; apex sitemap already lists all canonical URLs |

Once the www → apex 301 is active, requests to `www.webatlas.xyz/*` never serve HTML — GSC on the apex property is sufficient.

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

Use the **URL prefix** property `https://webatlas.xyz`, not `www.webatlas.xyz`.

#### Why GSC says `sitemap.xml` is "invalid" or "Impossible de récupérer"

| GSC message (FR) | English | Most likely cause for webatlas.xyz |
|------------------|---------|-----------------------------------|
| **Impossible de récupérer le sitemap** | Couldn't fetch | Cloudflare Bot Fight challenged **real** Google IPs at submit time (curl with fake Googlebot UA can still show 200) |
| **Sitemap non valide** / invalid on submit | Invalid URL format | Entering `https://webatlas.xyz/sitemap.xml` on a **URL prefix** property (double URL), or `sitemap.xml/` with trailing slash |
| Pending forever | — | Old failed row not deleted; GSC does not always retry |

The sitemap XML itself is valid (12 URLs, `Content-Type: text/xml`). DNS verification is live (`google-site-verification=…` TXT on `webatlas.xyz`). No code change required.

#### Submit steps (5 minutes)

1. In GSC, confirm the property selector (top-left) shows **`https://webatlas.xyz`** — not `https://www.webatlas.xyz`.
2. Open **Sitemaps** / **Sitemaps** (left sidebar)
3. If a previous submission shows **Impossible de récupérer le sitemap** / **Couldn't fetch**, click the ⋮ menu on that row → **Supprimer** / **Delete** (GSC does not always retry failed entries)
4. In **Ajouter un sitemap** / **Add a new sitemap**, enter only: `sitemap.xml`
5. Click **Envoyer** / **Submit**
6. Wait 1–5 minutes; status should change to **Réussite** / **Success**

| Field | Enter this | Do NOT enter |
|-------|------------|--------------|
| GSC property | `https://webatlas.xyz` (URL prefix) | `www.webatlas.xyz`, `http://webatlas.xyz` |
| Sitemap field | `sitemap.xml` | `https://webatlas.xyz/sitemap.xml`, `sitemap.xml/` |

Full resolved URL: `https://webatlas.xyz/sitemap.xml` — no trailing slash.

**Optional — Domain property** (`sc-domain:webatlas.xyz`): add via **Ajouter une propriété** → **Domaine** → DNS TXT verify (already present). On domain properties, submit the **full URL** `https://webatlas.xyz/sitemap.xml` in the sitemap field. Prefer URL prefix `https://webatlas.xyz` for simpler debugging unless you need apex + www + http in one property.

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

#### A. Bot Fight Mode — keep ON, allow Googlebot (recommended)

**Do not turn Bot Fight Mode off globally.** GSC failures happen when real Google crawler IPs get challenged while a fake `Googlebot` curl UA still returns `200`.

Dashboard (French UI labels in *italics*):

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → zone **webatlas.xyz**
2. **Sécurité** → **Bots**
3. Leave **Mode de combat contre les bots** / **Bot Fight Mode** **Activé** / **ON**
4. If you have **Super Bot Fight Mode** (Pro+): set **Bots vérifiés** / **Verified bots** → **Autoriser** / **Allow** (not *Défi* / Challenge, not *Bloquer* / Block)
5. **Enregistrer** / **Save**

> Verified bots uses Cloudflare's bot signature database. Googlebot is verified — this is the primary fix while keeping bot security on.

#### B. Configuration Rule — bypass challenges on SEO paths only

Add a path-scoped rule so `/sitemap.xml` and `/robots.txt` never get challenged even if other settings are aggressive:

1. **Règles** → **Règles de configuration** → **Créer une règle** / **Create rule**
2. **Nom de la règle:** `SEO crawlers — sitemap robots`
3. **Quand les requêtes correspondent…** / **When incoming requests match…**
   - Field **Chemin de l'URI** / **URI Path** → **égal à** / **equals** → `/sitemap.xml`
   - Click **Ou** / **Or**
   - Field **Chemin de l'URI** → **égal à** → `/robots.txt`
4. **Alors…** / **Then…** → **Niveau de sécurité** / **Security Level** → **Essentiellement désactivé** / **Essentially Off**
5. **Déployer** / **Deploy**

This does **not** disable Bot Fight Mode site-wide — only these two paths skip edge challenges.

**Optional WAF rule** (if Configuration Rule is not enough on your plan):

1. **Sécurité** → **WAF** → **Règles personnalisées** → **Créer une règle**
2. **Nom:** `Skip bot fight — verified bots on SEO paths`
3. **Expression:** `(http.request.uri.path eq "/sitemap.xml" or http.request.uri.path eq "/robots.txt") and cf.bot_management.verified_bot`
4. **Action:** **Gérer les bots** → **Ignorer** / **Skip** (all remaining bot management actions)

#### C. AI Crawl Control / Managed robots.txt

1. **Security** → **Bots** → **AI Crawl Control**
2. If **Managed robots.txt** is enabled, Cloudflare prepends `BEGIN Cloudflare Managed content` to `robots.txt` — this does not block `/sitemap.xml`, but you can disable it while troubleshooting

#### D. www → apex redirect (recommended — do this now)

`www.webatlas.xyz` is live and currently returns **200** (duplicate). This rule fixes that at the edge; repo `_redirects` cannot match on hostname.

1. **Rules** → **Redirect Rules** → **Create rule**
2. **Rule name:** `www to apex`
3. **When:** Custom filter expression → `(http.host eq "www.webatlas.xyz")`
4. **Then:** Type **Static**, URL `https://webatlas.xyz${http.request.uri.path}`, Status **301**
5. **Preserve query string:** enabled (default)
6. **Deploy** and verify with `curl.exe -sI https://www.webatlas.xyz/` → `301` + `Location: https://webatlas.xyz/`

Also test a subpath: `curl.exe -sI https://www.webatlas.xyz/services/` → `301` → `https://webatlas.xyz/services/`

#### E. Purge cache after deploy

1. **Caching** → **Configuration** → **Purge Cache** → **Custom purge**
2. Purge: `https://webatlas.xyz/sitemap.xml` and `https://webatlas.xyz/robots.txt`

Test manually:

```bash
curl.exe -A "Googlebot/2.1 (+http://www.google.com/bot.html)" -I https://webatlas.xyz/robots.txt
curl.exe -A "Googlebot/2.1 (+http://www.google.com/bot.html)" -I https://webatlas.xyz/sitemap.xml
```

Both should return `200 OK` with no `cf-mitigated` header.

### 6. If GSC shows "Impossible de récupérer le sitemap"

This usually means Google could not fetch the sitemap at submission time — not that the XML is invalid.

**Verify the fetch works (Googlebot UA):**

```bash
curl.exe -A "Googlebot/2.1 (+http://www.google.com/bot.html)" -I https://webatlas.xyz/sitemap.xml
curl.exe -A "Googlebot/2.1 (+http://www.google.com/bot.html)" -I https://webatlas.xyz/sitemap.xml/
```

Expected: `200 OK` on `/sitemap.xml`, `301` → `/sitemap.xml` on `/sitemap.xml/` (no trailing slash on the file URL).

**GSC checklist:**

| Check | Correct value |
|-------|----------------|
| Property type | URL prefix `https://webatlas.xyz` |
| Sitemap submitted | `sitemap.xml` only (not `sitemap.xml/`) |
| Full sitemap URL | `https://webatlas.xyz/sitemap.xml` |
| Property verified | DNS or HTML meta tag |

After a deploy fix, **delete the failed sitemap entry in GSC and re-submit** `sitemap.xml`. Google does not always retry immediately.

**Cloudflare dashboard** (zone `webatlas.xyz`) — **keep Bot Fight Mode ON**:

1. **Sécurité** → **Bots** → **Bots vérifiés** → **Autoriser** (see [§5A](#a-bot-fight-mode--keep-on-allow-googlebot-recommended)).
2. **Règles** → **Règles de configuration** → path bypass for `/sitemap.xml` and `/robots.txt` (see [§5B](#b-configuration-rule--bypass-challenges-on-seo-paths-only)).
3. **Sécurité** → **Bots** → **AI Crawl Control** / managed `robots.txt` prepends `BEGIN Cloudflare Managed content` — this does **not** block Googlebot from `/sitemap.xml`.
4. **Mise en cache** → **Configuration** → purge `/sitemap.xml` and `/robots.txt` if a stale 404 was cached.

Repo safeguards: `public/_headers` sets `Content-Type: text/xml` on `/sitemap.xml`, `public/_redirects` 301s `/sitemap.xml/` → `/sitemap.xml`, `public/sitemap.xml` is a static fallback synced at build time, and `app/robots.ts` declares the sitemap URL without a non-standard `Host:` directive (Cloudflare managed robots can mangle it).

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
