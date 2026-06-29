import { copyFileSync, existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'out')
const publicDir = join(process.cwd(), 'public')
const sitemapOut = join(outDir, 'sitemap.xml')
const sitemapPublic = join(publicDir, 'sitemap.xml')
const robotsOut = join(outDir, 'robots.txt')

function fail(message) {
  console.error(`sync-seo-assets: ${message}`)
  process.exit(1)
}

if (!existsSync(sitemapOut)) {
  fail('missing out/sitemap.xml')
}

if (!existsSync(robotsOut)) {
  fail('missing out/robots.txt')
}

const sitemap = readFileSync(sitemapOut, 'utf8')
if (!sitemap.includes('<urlset') || !sitemap.includes('</urlset>')) {
  fail('out/sitemap.xml is not a valid urlset document')
}

const urlCount = (sitemap.match(/<loc>/g) ?? []).length
if (urlCount < 1) {
  fail('out/sitemap.xml contains no <loc> entries')
}

const robots = readFileSync(robotsOut, 'utf8')
if (!robots.includes('Sitemap: https://webatlas.xyz/sitemap.xml')) {
  fail('out/robots.txt must declare Sitemap: https://webatlas.xyz/sitemap.xml')
}

if (/^Host:\s*https?:\/\//im.test(robots)) {
  fail('out/robots.txt Host must be a hostname only (no scheme)')
}

copyFileSync(sitemapOut, sitemapPublic)
console.log(`sync-seo-assets: ok (${urlCount} URLs, public/sitemap.xml fallback written)`)
