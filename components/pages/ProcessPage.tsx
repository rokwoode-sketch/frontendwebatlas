'use client'

import Link from 'next/link'
import PageMeta from '@/components/PageMeta'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function ProcessPageClient() {
  const { t } = useLanguage()
  const p = t.process

  return (
    <>
      <PageMeta page="process" />
      <section className="pt-36 pb-20 grid-bg section-mesh relative overflow-hidden" aria-label="Process hero">
        <div className="section relative z-10 max-w-3xl flex flex-col gap-6">
          <span className="label-pill"><span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />{p.label}</span>
          <h1 className="font-display font-bold tracking-tight text-wa-ink leading-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
            {p.title} <span className="text-gradient">{p.titleAccent}</span>
          </h1>
          <p className="text-wa-ink-2 text-lg leading-relaxed max-w-xl">{p.heroBody}</p>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" aria-labelledby="steps-heading">
        <div className="section">
          <h2 id="steps-heading" className="sr-only">{p.stepsSrOnly}</h2>
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {p.steps.map((step) => (
              <div key={step.n} className="card-featured">
                <div className="card-featured-inner grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <span className="font-display font-bold text-3xl text-wa-violet">{step.n}</span>
                    <span className="text-xs font-semibold text-wa-gold">{step.sub}</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display font-bold text-xl text-wa-ink">{step.title}</h3>
                    <p className="text-wa-ink-2 text-sm leading-relaxed">{step.body}</p>
                    <ul className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <li key={d} className="text-[11px] px-3 py-1 rounded-full border border-wa-border text-wa-ink-3">{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="principles-heading">
        <div className="section">
          <div className="text-center mb-14">
            <h2 id="principles-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">{p.principlesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {p.principles.map((item) => (
              <div key={item.title} className="card flex flex-col gap-3 h-full">
                <h3 className="font-display font-semibold text-sm text-wa-ink">{item.title}</h3>
                <p className="text-wa-ink-2 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-surface section-mesh-dark" aria-label="Process CTA">
        <div className="section text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl text-wa-ink tracking-tight max-w-lg">{p.ctaTitle}</h2>
          <p className="text-wa-ink-2 max-w-md leading-relaxed">{p.ctaBody}</p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">{p.ctaButton}</Link>
        </div>
      </section>
    </>
  )
}
