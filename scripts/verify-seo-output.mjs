import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'out')
const sitemapPath = join(outDir, 'sitemap.xml')
const robotsPath = join(outDir, 'robots.txt')

function fail(message) {
  console.error(`verify-seo-output: ${message}`)
  process.exit(1)
}

if (!existsSync(sitemapPath)) {
  fail('missing out/sitemap.xml — run next build and ensure app/sitemap.ts is present')
}

if (!existsSync(robotsPath)) {
  fail('missing out/robots.txt — run next build and ensure app/robots.ts is present')
}

const sitemap = readFileSync(sitemapPath, 'utf8')
if (!sitemap.includes('<urlset') || !sitemap.includes('</urlset>')) {
  fail('out/sitemap.xml is not a valid urlset document')
}

const urlCount = (sitemap.match(/<loc>/g) ?? []).length
if (urlCount < 1) {
  fail('out/sitemap.xml contains no <loc> entries')
}

const robots = readFileSync(robotsPath, 'utf8')
if (!robots.includes('Sitemap: https://webatlas.xyz/sitemap.xml')) {
  fail('out/robots.txt must declare Sitemap: https://webatlas.xyz/sitemap.xml')
}

console.log(`verify-seo-output: ok (${urlCount} URLs in sitemap)`)
