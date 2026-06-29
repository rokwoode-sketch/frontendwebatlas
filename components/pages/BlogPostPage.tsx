'use client'

import Link from 'next/link'
import { BlogPostMeta } from '@/components/PageMeta'
import { formatBlogDate, getBlogPosts, getPostBySlug } from '@/lib/blog'
import { buildBreadcrumbSchema } from '@/lib/seo'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

type Props = { slug: string }

function renderParagraph(block: string) {
  if (block.startsWith('## ')) {
    return (
      <h2 key={block} className="font-display font-bold text-xl text-wa-ink mt-10 mb-4 tracking-tight">
        {block.replace('## ', '')}
      </h2>
    )
  }
  return <p key={block.slice(0, 40)} className="text-wa-ink-2 text-base leading-relaxed mb-4">{block}</p>
}

export default function BlogPostPageClient({ slug }: Props) {
  const { t, lang } = useLanguage()
  const post = getPostBySlug(slug, lang)
  const c = t.common

  if (!post) return null

  const breadcrumb = buildBreadcrumbSchema([
    { name: c.home, url: '/' },
    { name: c.blog, url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <BlogPostMeta title={post.title} description={post.excerpt} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <article>
        <div className="pt-36 pb-12 grid-bg section-mesh relative overflow-hidden">
          <div className="section relative z-10 max-w-3xl flex flex-col gap-5">
            <nav className="text-sm text-wa-ink-3 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
              <Link href="/">{c.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">{c.blog}</Link>
              <span aria-hidden="true">/</span>
              <span className="text-wa-ink-2">{post.category}</span>
            </nav>
            <span className="label-pill w-fit">{post.category}</span>
            <h1 className="font-display font-bold tracking-tight text-wa-ink leading-tight" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)' }}>{post.title}</h1>
            <p className="text-wa-ink-2 text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-wa-ink-3 pt-2 border-t border-wa-border">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatBlogDate(post.date, lang)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} {c.minRead}</span>
            </div>
          </div>
        </div>

        <div className="section max-w-3xl pb-24 pt-8">
          <div className="prose-invert">{post.content.map(renderParagraph)}</div>
          <div className="mt-16 p-8 rounded-2xl card-featured">
            <div className="card-featured-inner flex flex-col gap-4 items-start">
              <h2 className="font-display font-bold text-xl text-wa-ink">{c.readyToBuild}</h2>
              <p className="text-wa-ink-2 text-sm leading-relaxed">{c.freePreviewBody}</p>
              <Link href="/contact" className="btn-primary">{c.freePreviewCta}</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-wa-border">
            <p className="text-sm font-display font-semibold text-wa-ink mb-4">{c.moreArticles}</p>
            <ul className="flex flex-col gap-3">
              {getBlogPosts(lang).filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-sm text-wa-ink-2 hover:text-wa-violet-l transition-colors">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
