'use client'

import Link from 'next/link'
import PageMeta from '@/components/PageMeta'
import { ServicesPageJsonLd } from '@/components/JsonLd'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

export default function ServicesPageClient() {
  const { t } = useLanguage()
  const s = t.services
  const c = t.common

  return (
    <>
      <PageMeta page="services" />
      <ServicesPageJsonLd />
      <section className="pt-36 pb-20 grid-bg relative overflow-hidden" aria-label="Services hero">
        <div className="section text-center flex flex-col items-center gap-6 relative z-10">
          <SectionLabel>{s.label}</SectionLabel>
          <h1 className="font-display font-bold tracking-tight text-wa-ink" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
            {s.title} <span className="text-gradient">{s.titleAccent}</span>
          </h1>
          <p className="text-wa-ink-2 text-lg max-w-2xl leading-relaxed">{s.heroBody}</p>
          <Link href="/contact" className="btn-primary mt-2">{s.heroCta}<ArrowRight /></Link>
        </div>
      </section>

      <section className="py-20" aria-label="Service details">
        <div className="section flex flex-col gap-20">
          {s.details.map((svc, i) => (
            <div key={svc.id} id={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  {svc.soon && <span className="w-fit text-xs font-semibold text-wa-gold border border-wa-gold/40 rounded-full px-3 py-1">{s.comingSoon}</span>}
                  <SectionLabel>{svc.label}</SectionLabel>
                  <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-wa-ink">{svc.headline}</h2>
                  <p className="text-wa-ink-2 text-base leading-relaxed">{svc.body}</p>
                </div>
                <div className="flex flex-col gap-2">
                  {svc.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-wa-violet">✓</span>
                      <span className="text-wa-ink-2 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                {!svc.soon && <Link href="/contact" className="btn-primary w-fit">{s.startProject}<ArrowRight /></Link>}
              </div>
              <div className="flex flex-col gap-4 sticky top-24">
                <div className="card flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest">{c.startingPrice}</span>
                    <span className="font-display font-bold text-xl text-wa-violet">{svc.price}</span>
                  </div>
                  <div className="h-px bg-wa-border" />
                  <div>
                    <p className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest mb-2">{c.bestFor}</p>
                    <p className="text-wa-ink-2 text-sm leading-relaxed">{svc.for}</p>
                  </div>
                  <div className="h-px bg-wa-border" />
                  <div className="flex flex-col gap-1 text-sm text-wa-ink-2">
                    <span>{c.deliveredIn10}</span>
                    <span>{c.fixedPrice}</span>
                    <span>{c.onlineProcess}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-bg-surface" aria-labelledby="pricing-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>{s.pricingLabel}</SectionLabel>
            <h2 id="pricing-heading" className="font-display font-bold text-3xl md:text-4xl tracking-tight text-wa-ink">{s.pricingTitle}</h2>
            <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{s.pricingBody}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {s.tiers.map((tier) => (
              <div key={tier.name} className={`card flex flex-col gap-6 ${tier.highlight ? 'border-wa-violet bg-wa-violet-m' : ''}`}>
                {tier.highlight && <span className="label-pill w-fit text-xs">{c.mostPopular}</span>}
                <div>
                  <p className="font-display font-bold text-2xl text-wa-violet">{tier.price}</p>
                  <p className="font-display font-semibold text-lg text-wa-ink mt-1">{tier.name}</p>
                  <p className="text-wa-ink-2 text-sm mt-2 leading-relaxed">{tier.description}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((f) => <li key={f} className="text-sm text-wa-ink-2">✓ {f}</li>)}
                </ul>
                <Link href="/contact" className={tier.highlight ? 'btn-primary justify-center' : 'btn-ghost justify-center'}>{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" id="faq" aria-labelledby="svc-faq-heading">
        <div className="section max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <SectionLabel>{s.faqLabel}</SectionLabel>
            <h2 id="svc-faq-heading" className="font-display font-bold text-3xl tracking-tight text-wa-ink">{s.faqTitle}</h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {t.serviceFaqs.map((faq) => (
              <details key={faq.q} className="group border border-wa-border rounded-xl overflow-hidden bg-bg-surface">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-display font-semibold text-sm text-wa-ink">{faq.q}</span>
                  <span className="text-wa-ink-3 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1"><p className="text-wa-ink-2 text-sm leading-relaxed">{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-label="Services CTA">
        <div className="section text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl text-wa-ink tracking-tight">{s.ctaTitle}</h2>
          <p className="text-wa-ink-2 max-w-lg leading-relaxed">{s.ctaBody}</p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">{s.ctaButton}<ArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
