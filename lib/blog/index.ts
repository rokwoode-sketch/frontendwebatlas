import type { Locale } from '@/lib/i18n/types'
import type { BlogPost } from './types'
import { POSTS_EN } from './posts-en'
import { POSTS_FR } from './posts-fr'
import { POSTS_AR } from './posts-ar'

const byLocale: Record<Locale, BlogPost[]> = {
  en: POSTS_EN,
  fr: POSTS_FR,
  ar: POSTS_AR,
}

export type { BlogPost } from './types'

/** @deprecated Use getBlogPosts(locale) */
export const BLOG_POSTS = POSTS_EN

export function getBlogPosts(locale: Locale = 'en'): BlogPost[] {
  return byLocale[locale] ?? POSTS_EN
}

export function getPostBySlug(slug: string, locale: Locale = 'en'): BlogPost | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return POSTS_EN.map((p) => p.slug)
}

export function formatBlogDate(iso: string, locale: Locale): string {
  const loc = locale === 'ar' ? 'ar-MA' : locale === 'fr' ? 'fr-FR' : 'en-GB'
  return new Date(iso).toLocaleDateString(loc, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
