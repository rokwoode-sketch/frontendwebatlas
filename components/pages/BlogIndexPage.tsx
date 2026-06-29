'use client'

import Link from 'next/link'
import PageMeta from '@/components/PageMeta'
import { formatBlogDate, getBlogPosts } from '@/lib/blog'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function BlogIndexPageClient() {
  const { t, lang } = useLanguage()
  const b = t.blog
  const posts = getBlogPosts(lang)

  return (
    <>
      <PageMeta page="blog" />
      <section className="pt-36 pb-16 grid-bg section-mesh relative overflow-hidden" aria-label="Blog hero">
        <div className="section relative z-10 flex flex-col gap-5 max-w-3xl">
          <span className="label-pill"><span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />{b.label}</span>
          <h1 className="font-display font-bold tracking-tight text-wa-ink" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
            {b.title} <span className="text-gradient">{b.titleAccent}</span>
          </h1>
          <p className="text-wa-ink-2 text-lg leading-relaxed max-w-xl">{b.heroBody}</p>
        </div>
      </section>

      <section className="py-20 pb-32" aria-label="Blog posts">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="card group flex flex-col gap-4 h-full hover:border-wa-violet/40">
                <div className="flex items-center gap-3 text-xs text-wa-ink-3">
                  <span className="label-pill text-[10px] py-0.5">{post.category}</span>
                  <time dateTime={post.date}>{formatBlogDate(post.date, lang)}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-xl text-wa-ink leading-snug group-hover:text-wa-violet-l transition-colors">
                  <Link href={`/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                </h2>
                <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-wa-violet-l hover:text-wa-ink transition-colors">
                  {t.common.readArticle} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
