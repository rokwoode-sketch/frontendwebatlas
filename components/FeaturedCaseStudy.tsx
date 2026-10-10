'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal, fadeUp } from '@/components/Animated'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { SHOWCASE_ITEMS } from '@/lib/showcase'
import { WHATSAPP_NUMBER, buildWaUrl } from '@/lib/whatsapp'

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Studio capability gallery — replaces NodensCare case study */
export default function FeaturedCaseStudy() {
  const { t, lang } = useLanguage()
  const home = t.home
  const isAr = lang === 'ar'
  const waUrl = buildWaUrl(WHATSAPP_NUMBER, t.wa.defaultMessage)

  return (
    <section
      className="py-24 md:py-28 relative overflow-hidden bg-bg-surface"
      aria-labelledby="case-study-heading"
    >
      <div className="section relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14 max-w-2xl mx-auto">
          <Reveal>
            <span className="label-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-wa-violet" />
              {home.caseStudyLabel}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="case-study-heading"
              className="font-display font-bold text-3xl md:text-[2.5rem] tracking-tight text-wa-ink"
            >
              {home.caseStudyTitle}{' '}
              <span className="text-gradient">{home.caseStudyTitleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-wa-ink-2 text-base leading-relaxed">
              {isAr
                ? 'شوف كيف نفكّر في الحضور الأونلاين — سرعة، وضوح، ومسار يخلي الزائر يتواصل.'
                : 'See how we think about online presence — speed, clarity, and a path that makes visitors reach out.'}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {SHOWCASE_ITEMS.map((item, i) => {
            const title = isAr ? item.titleAr : item.titleEn
            const caption = isAr ? item.captionAr : item.captionEn
            const alt = isAr ? item.altAr : item.altEn

            return (
              <Reveal key={item.id} variants={fadeUp} delay={i * 0.06}>
                <figure className="showcase-card group h-full flex flex-col overflow-hidden rounded-2xl border border-wa-border bg-bg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <Image
                      src={item.src}
                      alt={alt}
                      width={item.width}
                      height={item.height}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={i < 2}
                    />
                  </div>
                  <figcaption className="p-5 md:p-6 flex flex-col gap-2 text-start grow">
                    <h3 className="font-display font-semibold text-lg text-wa-ink tracking-tight">
                      {title}
                    </h3>
                    <p className="text-sm text-wa-ink-2 leading-relaxed">{caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5">
              {home.ctaButton} <Arrow />
            </a>
            <Link href="/services" className="btn-ghost px-8 py-3.5">
              {home.heroCta2}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
