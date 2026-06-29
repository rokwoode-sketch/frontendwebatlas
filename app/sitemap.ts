import type { MetadataRoute } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { pageUrl, STATIC_SITEMAP_ROUTES } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date()

  const staticPages: MetadataRoute.Sitemap = STATIC_SITEMAP_ROUTES.map((route) => ({
    url: pageUrl(route.path),
    lastModified: buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => {
    const post = getPostBySlug(slug)
    return {
      url: pageUrl(`/blog/${slug}`),
      lastModified: post ? new Date(post.date) : buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }
  })

  return [...staticPages, ...blogPages]
}
