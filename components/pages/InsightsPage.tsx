'use client'

import Link from 'next/link'
import PageMeta from '@/components/PageMeta'
import { getBlogPosts } from '@/lib/blog'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function InsightsPageClient() {
  const { t, lang } = useLanguage()
  const i = t.insights
  const posts = getBlogPosts(lang)

  return (
    <>
      <PageMeta page="insights" />
      <section className="pt-36 pb-20 grid-bg section-mesh relative overflow-hidden" aria-label="Insights hero">
        <div className="section relative z-10 max-w-3xl flex flex-col gap-6">
          <span className="label-pill"><span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />{i.label}</span>
          <h1 className="font-display font-bold tracking-tight text-wa-ink" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
            {i.title} <span className="text-gradient">{i.titleAccent}</span>
          </h1>
          <p className="text-wa-ink-2 text-lg leading-relaxed">{i.heroBody}</p>
        </div>
      </section>

      <section className="py-20" aria-labelledby="patterns-heading">
        <div className="section">
          <h2 id="patterns-heading" className="font-display font-bold text-2xl text-wa-ink mb-10 text-center">{i.patternsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {i.patterns.map((item) => (
              <Link key={item.title} href={item.href} className="card group no-underline flex flex-col gap-4 h-full">
                <p className="font-display font-bold text-4xl text-wa-violet">{item.stat}</p>
                <h3 className="font-display font-semibold text-lg text-wa-ink group-hover:text-wa-violet-l transition-colors">{item.title}</h3>
                <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{item.body}</p>
                <span className="text-xs font-semibold text-wa-violet-l">{t.common.readGuide}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" aria-labelledby="cases-heading">
        <div className="section">
          <h2 id="cases-heading" className="font-display font-bold text-2xl text-wa-ink mb-10">{i.casesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {i.caseStudies.map((study) => (
              <article key={study.id} className="card flex flex-col gap-3">
                <span className="label-pill w-fit text-[10px]">{study.industry}</span>
                <h3 className="font-display font-semibold text-base text-wa-ink">{study.name}</h3>
                <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{study.description}</p>
                <p className="font-display font-bold text-wa-violet text-sm">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="latest-heading">
        <div className="section max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 id="latest-heading" className="font-display font-bold text-2xl text-wa-ink">{i.latestTitle}</h2>
            <Link href="/blog" className="text-sm text-wa-violet-l hover:text-wa-ink transition-colors">{t.common.viewAll}</Link>
          </div>
          <ul className="flex flex-col gap-4">
            {posts.slice(0, 4).map((post) => (
              <li key={post.slug} className="border-b border-wa-border pb-4">
                <Link href={`/blog/${post.slug}`} className="group no-underline flex flex-col gap-1">
                  <span className="font-display font-semibold text-wa-ink group-hover:text-wa-violet-l transition-colors">{post.title}</span>
                  <span className="text-wa-ink-3 text-xs">{post.category} · {post.readTime}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
