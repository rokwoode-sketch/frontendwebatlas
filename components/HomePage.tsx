'use client'

import Image from 'next/image'
import { Reveal, fadeUp } from '@/components/Animated'
import ClientProjects from '@/components/ClientProjects'
import HeroShowcase from '@/components/HeroShowcase'
import PageMeta from '@/components/PageMeta'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { WHATSAPP_NUMBER, buildWaUrl } from '@/lib/whatsapp'

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.5l3 3L11.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomePage() {
  const { t, dir, lang } = useLanguage()
  const h = t.home
  const isAr = lang === 'ar'
  const waUrl = buildWaUrl(WHATSAPP_NUMBER, t.wa.defaultMessage)
  const packages = h.investment.slice(0, 3)

  return (
    <>
      <PageMeta page="home" />

      <section
        className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <HeroShowcase />

        <div className={`section relative z-10 pb-12 md:pb-14 pt-24 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <Reveal variants={fadeUp} immediate>
            <p className="font-display text-[clamp(2.5rem,8vw,5.75rem)] font-bold leading-[0.92] tracking-tight text-white mb-4 drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
              web<span className="text-[#E8C547]">atlas</span>
            </p>
          </Reveal>

          <div className="max-w-2xl flex flex-col gap-3.5">
            <Reveal variants={fadeUp} delay={0.06} immediate>
              <h1
                id="hero-heading"
                className="font-display font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 2.75rem)' }}
              >
                <span className="block">{h.heroLine1}</span>
                <span className="block text-[#E8C547]">{h.heroLine2}</span>
              </h1>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1} immediate>
              <p className="text-white/90 text-base md:text-[1.05rem] leading-relaxed max-w-xl drop-shadow-sm">
                {h.heroBody}{' '}
                <strong className="text-white font-semibold">{h.heroBodyStrong}</strong>
                {' '}{h.heroBodyExtra}
              </p>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.14} immediate>
              <div className={`flex flex-col sm:flex-row gap-3 ${dir === 'rtl' ? 'sm:flex-row-reverse sm:justify-end' : ''}`}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-3.5 text-base justify-center">
                  {h.heroCta1} <Arrow />
                </a>
                <a
                  href="#client-projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl border border-white/40 bg-black/25 text-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
                >
                  {h.heroCta2}
                </a>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.18} immediate>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                {h.heroTrust.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#E8C547]"><Check /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Atmospheric bridge — markets + problem (not flat white) */}
      <div className="afterglow">
        <div className="afterglow-orb afterglow-orb-a" aria-hidden="true" />
        <div className="afterglow-orb afterglow-orb-b" aria-hidden="true" />

        <div className="markets-marquee" dir="ltr" aria-label={isAr ? 'أسواقنا' : 'Markets'}>
          <div className="markets-marquee-track">
            {[...h.markets, ...h.markets].map((city, i) => (
              <span key={`${city}-${i}`}>
                {city}
                <em>·</em>
              </span>
            ))}
          </div>
        </div>

        <section className="relative z-[1] py-14 md:py-16" aria-labelledby="pain-heading">
          <div className={`section max-w-2xl mx-auto flex flex-col gap-4 text-center ${dir === 'rtl' ? 'md:text-right' : ''}`}>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#E8C547]">{h.painLabel}</p>
            <h2
              id="pain-heading"
              className="font-display font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(1.55rem, 3.5vw, 2.35rem)' }}
            >
              {h.painTitle}{' '}
              <span className="text-white/65">{h.painTitleAccent}</span>
            </h2>
            <p className="text-white/75 text-base md:text-lg leading-relaxed">{h.painBody}</p>
            <ol className="mt-5 flex flex-col text-start">
              {h.pains.map((p) => (
                <li
                  key={p.n}
                  className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-start border-t border-white/12 py-4"
                >
                  <span className="font-display font-bold text-sm text-[#E8C547] pt-0.5">{p.n}</span>
                  <div>
                    <h3 className="font-display font-semibold text-base text-white leading-snug">{p.title}</h3>
                    <p className="mt-1.5 text-white/70 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      {/* Packages — high contrast + hover elevates like featured */}
      <section className="py-12 md:py-16 bg-[#F1F5F9]" id="pricing" aria-labelledby="pricing-heading">
        <div className="section">
          <div className={`max-w-xl mb-8 ${dir === 'rtl' ? 'mr-0 ml-auto text-right' : ''}`}>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500 mb-2">{h.investmentLabel}</p>
            <h2
              id="pricing-heading"
              className="font-display font-bold text-slate-900 tracking-tight"
              style={{ fontSize: 'clamp(1.55rem, 3.2vw, 2.25rem)' }}
            >
              {h.investmentTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">{h.investmentBody}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
            {packages.map((tier, i) => {
              const featured = i === 1
              return (
                <article
                  key={tier.tier}
                  className={`pack-card ${featured ? 'pack-card--featured' : ''}`}
                >
                  {featured && (
                    <span className="pack-badge">
                      {isAr ? 'الأكثر اختياراً' : 'Most chosen'}
                    </span>
                  )}
                  <div>
                    <h3 className="pack-title font-display font-semibold text-lg">{tier.tier}</h3>
                    <p className="pack-price font-display font-bold text-2xl mt-2">{tier.range}</p>
                    <p className="pack-meta text-xs mt-1.5">{tier.timeline}</p>
                  </div>
                  <p className="pack-body text-sm leading-relaxed flex-1 whitespace-pre-line">
                    {tier.includes}
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pack-cta"
                  >
                    {h.heroCta1} <Arrow />
                  </a>
                </article>
              )
            })}
          </div>
          <p className="text-center text-slate-500 text-xs mt-6 max-w-lg mx-auto">{h.investmentFootnote}</p>
        </div>
      </section>

      {/* Process — compact */}
      <section className="py-12 md:py-16" id="process" aria-labelledby="process-heading">
        <div className="section">
          <div className={`max-w-xl mb-8 ${dir === 'rtl' ? 'mr-0 ml-auto text-right' : ''}`}>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-wa-ink-3 mb-2">{h.processLabel}</p>
            <h2
              id="process-heading"
              className="font-display font-bold text-wa-ink tracking-tight"
              style={{ fontSize: 'clamp(1.55rem, 3.2vw, 2.25rem)' }}
            >
              {h.processTitle}{' '}
              <span className="text-wa-ink-2">{h.processTitleAccent}</span>
            </h2>
          </div>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {h.steps.map((step) => (
              <li key={step.n} className="flex flex-col gap-2">
                <span className="font-display font-bold text-3xl text-wa-border tracking-tight">{step.n}</span>
                <h3 className="font-display font-semibold text-sm md:text-base text-wa-ink">{step.title}</h3>
                <p className="text-xs md:text-sm text-wa-ink-2 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClientProjects />

      {/* Industries — compact strip */}
      <section className="py-12 md:py-14" aria-labelledby="industries-heading">
        <div className="section">
          <h2 id="industries-heading" className="sr-only">{h.industriesTitle}</h2>
          <p className="text-center text-sm text-wa-ink-3 mb-4">{h.industriesLabel}</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base font-display font-semibold text-wa-ink">
            {h.industries.map((ind) => (
              <li key={ind.title}>{ind.title}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-bg-surface" id="faq" aria-labelledby="faq-heading">
        <div className="section">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-wa-ink-3 mb-2">{h.faqLabel}</p>
            <h2
              id="faq-heading"
              className="font-display font-bold text-wa-ink tracking-tight"
              style={{ fontSize: 'clamp(1.55rem, 3.2vw, 2.25rem)' }}
            >
              {h.faqTitle}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col">
            {t.faqs.map((faq) => (
              <details key={faq.q} className="group border-t border-wa-border last:border-b">
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none select-none">
                  <span className="font-display font-semibold text-sm md:text-base text-wa-ink leading-snug text-start">
                    {faq.q}
                  </span>
                  <span className="text-wa-ink-3 group-open:rotate-45 transition-transform duration-200 shrink-0 text-xl leading-none">+</span>
                </summary>
                <div className="pb-4 pe-8">
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0">
          <Image
            src="/showcase/clients/bait-al-joud-restaurant.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-25 brightness-50"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-wa-ink/95" aria-hidden="true" />
        </div>
        <div className="section relative z-10 flex flex-col items-center text-center gap-5">
          <h2
            id="cta-heading"
            className="font-display font-bold text-white tracking-tight leading-tight max-w-2xl"
            style={{ fontSize: 'clamp(1.7rem, 4vw, 2.75rem)' }}
          >
            {h.ctaTitle}{' '}
            <span className="text-[#E8C547]">{h.ctaTitleAccent}</span>
          </h2>
          <p className="text-white/70 text-base max-w-md leading-relaxed">{h.ctaBody}</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-10 py-4 text-base">
            {h.ctaButton} <Arrow />
          </a>
          <p className="text-white/40 text-xs">{h.ctaFootnote}</p>
        </div>
      </section>
    </>
  )
}
