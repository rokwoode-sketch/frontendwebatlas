import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'
import { SITE } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-29')

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/process`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE.url}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...blogPages]
}
