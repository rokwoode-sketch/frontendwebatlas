'use client'

import Link from 'next/link'
import PageMeta from '@/components/PageMeta'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

export default function AboutPageClient() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <>
      <PageMeta page="about" />
      <section className="pt-36 pb-20 grid-bg relative overflow-hidden" aria-label="About hero">
        <div className="section relative z-10 flex flex-col items-start gap-6 max-w-3xl">
          <SectionLabel>{a.label}</SectionLabel>
          <h1 className="font-display font-bold tracking-tight text-wa-ink" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
            {a.title} <span className="text-gradient">{a.titleAccent}</span>
          </h1>
          <p className="text-wa-ink-2 text-lg leading-relaxed max-w-xl">{a.heroBody}</p>
        </div>
      </section>

      <section className="py-24" aria-labelledby="story-heading">
        <div className="section grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 id="story-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">{a.storyTitle}</h2>
            <div className="flex flex-col gap-4 text-wa-ink-2 text-base leading-relaxed">
              <p>{a.storyP1}</p>
              <p>{a.storyP2}</p>
              <p>{a.storyP3}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 sticky top-24">
            <div className="card">
              <p className="text-wa-ink-2 text-sm leading-relaxed italic">{a.quote}</p>
              <p className="text-wa-ink-3 text-xs mt-4">{a.quoteAttribution}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {a.stats.map((s) => (
                <div key={s.label} className="card text-center">
                  <p className="font-display font-bold text-2xl text-wa-violet">{s.n}</p>
                  <p className="text-wa-ink-3 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" aria-labelledby="values-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>{a.valuesLabel}</SectionLabel>
            <h2 id="values-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">{a.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {a.values.map((v) => (
              <div key={v.title} className="card flex flex-col gap-3">
                <h3 className="font-display font-semibold text-base text-wa-ink">{v.title}</h3>
                <p className="text-wa-ink-2 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="markets-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>{a.marketsLabel}</SectionLabel>
            <h2 id="markets-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">{a.marketsTitle}</h2>
            <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{a.marketsBody}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {a.markets.map((m) => (
              <div key={m.region} className="card flex flex-col gap-2">
                <h3 className="font-display font-semibold text-sm text-wa-ink">{m.region}</h3>
                <p className="text-wa-ink-3 text-xs">{m.cities}</p>
                <span className="label-pill w-fit mt-1">{m.lang}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-mesh" aria-labelledby="credentials-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>{a.credentialsLabel}</SectionLabel>
            <h2 id="credentials-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">{a.credentialsTitle}</h2>
            <p className="text-wa-ink-2 text-base max-w-2xl leading-relaxed">{a.credentialsBody}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {a.credentials.map((item) => (
              <div key={item.title} className="card-featured h-full">
                <div className="card-featured-inner flex flex-col gap-3 h-full">
                  <h3 className="font-display font-semibold text-base text-wa-ink">{item.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-surface section-mesh-dark" aria-label="About CTA">
        <div className="section text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl text-wa-ink tracking-tight">{a.ctaTitle}</h2>
          <p className="text-wa-ink-2 max-w-md leading-relaxed">{a.ctaBody}</p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">{a.ctaButton}</Link>
        </div>
      </section>
    </>
  )
}
