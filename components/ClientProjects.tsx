'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { CLIENT_PROJECTS, CLIENT_PROJECTS_COPY } from '@/lib/clientProjects'
import { WHATSAPP_NUMBER, buildWaUrl } from '@/lib/whatsapp'

/** Curated latest works — 4 max, editorial order */
const LATEST_IDS = ['arabian-odyssey', 'bait-al-joud', 'vanguard', 'lamar-salon'] as const
const LATEST = LATEST_IDS.map((id) => CLIENT_PROJECTS.find((p) => p.id === id)!).filter(Boolean)

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ClientProjects() {
  const { lang, dir } = useLanguage()
  const isAr = lang === 'ar'
  const copy = isAr ? CLIENT_PROJECTS_COPY.ar : CLIENT_PROJECTS_COPY.en
  const waUrl = buildWaUrl(
    WHATSAPP_NUMBER,
    isAr
      ? 'هلا WebAtlas — شفت أحدث أعمالكم وأبغى نفس المستوى لبزنسي.'
      : 'Hi WebAtlas — I saw your latest work and want the same level for my business.',
  )

  const lead = LATEST[0]
  const rest = LATEST.slice(1)

  const meta = (p: (typeof LATEST)[0]) => ({
    niche: isAr ? p.nicheAr : p.nicheEn,
    client: isAr ? p.clientAr : p.clientEn,
    city: isAr ? p.cityAr : p.cityEn,
    headline: isAr ? p.headlineAr : p.headlineEn,
    alt: isAr ? p.altAr : p.altEn,
  })

  const leadM = meta(lead)

  return (
    <section
      id="client-projects"
      className="relative py-12 md:py-16 bg-bg-surface"
      aria-labelledby="client-projects-heading"
    >
      <div className="section">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 ${
            dir === 'rtl' ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className={`max-w-xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-wa-ink-3 mb-2">
              {copy.label}
            </p>
            <h2
              id="client-projects-heading"
              className="font-display font-bold text-wa-ink tracking-tight leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.35rem)' }}
            >
              {copy.title}{' '}
              <span className="text-wa-ink-2">{copy.titleAccent}</span>
            </h2>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm shrink-0 self-start md:self-auto"
          >
            {isAr ? 'أبي نفس المستوى' : 'I want this level'} <Arrow />
          </a>
        </div>

        <article className="group relative rounded-2xl overflow-hidden border border-wa-border bg-bg mb-4">
          <div className="relative aspect-[16/10] md:aspect-[21/9] bg-slate-100">
            <Image
              src={lead.src}
              alt={leadM.alt}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
              aria-hidden="true"
            />
            <div
              className={`absolute inset-x-0 bottom-0 p-6 md:p-10 ${
                dir === 'rtl' ? 'text-right' : 'text-left'
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#E8C547]">
                {leadM.niche}
              </p>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-1 tracking-tight">
                {leadM.client}
              </h3>
              <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
                {leadM.headline}
              </p>
              <p className="text-white/50 text-xs mt-2">{leadM.city}</p>
            </div>
          </div>
        </article>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none p-0 m-0">
          {rest.map((project) => {
            const m = meta(project)
            return (
              <li key={project.id}>
                <figure className="group h-full rounded-2xl overflow-hidden border border-wa-border bg-bg flex flex-col">
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <Image
                      src={project.src}
                      alt={m.alt}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption
                    className={`p-4 flex flex-col gap-1 grow ${
                      dir === 'rtl' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-wa-ink-3">
                      {m.niche}
                    </p>
                    <h3 className="font-display font-semibold text-base text-wa-ink">{m.client}</h3>
                    <p className="text-sm text-wa-ink-2 leading-snug">{m.headline}</p>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
