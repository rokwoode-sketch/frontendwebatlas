'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Reveal, fadeUp } from '@/components/Animated'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { CLIENT_PROJECTS, CLIENT_PROJECTS_COPY } from '@/lib/clientProjects'

/**
 * Editorial portfolio — Trust & Authority (UI UX Pro Max):
 * featured strip + asymmetric proof wall. Visuals first, no card spam.
 */
export default function ClientProjects() {
  const { lang, dir } = useLanguage()
  const isAr = lang === 'ar'
  const copy = isAr ? CLIENT_PROJECTS_COPY.ar : CLIENT_PROJECTS_COPY.en
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  const featured = CLIENT_PROJECTS.find((p) => p.featured) ?? CLIENT_PROJECTS[0]
  const rest = CLIENT_PROJECTS.filter((p) => p.id !== featured.id)
  const activeProject = CLIENT_PROJECTS[active] ?? featured

  const t = (p: (typeof CLIENT_PROJECTS)[0]) => ({
    niche: isAr ? p.nicheAr : p.nicheEn,
    client: isAr ? p.clientAr : p.clientEn,
    city: isAr ? p.cityAr : p.cityEn,
    headline: isAr ? p.headlineAr : p.headlineEn,
    body: isAr ? p.bodyAr : p.bodyEn,
    outcome: isAr ? p.outcomeAr : p.outcomeEn,
    alt: isAr ? p.altAr : p.altEn,
  })

  const featuredT = t(featured)
  const activeT = t(activeProject)

  return (
    <section
      id="client-projects"
      className="relative py-24 md:py-32 overflow-hidden section-mesh"
      aria-labelledby="client-projects-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.35] pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="section relative z-10">
        <div className={`flex flex-col gap-4 mb-12 md:mb-16 max-w-2xl ${dir === 'rtl' ? 'items-start text-right' : 'items-start text-left'}`}>
          <Reveal>
            <span className="label-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-wa-violet" />
              {copy.label}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="client-projects-heading"
              className="font-display font-bold text-3xl md:text-[2.75rem] tracking-tight text-wa-ink leading-[1.15]"
            >
              {copy.title}{' '}
              <span className="text-gradient">{copy.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-wa-ink-2 text-base md:text-lg leading-relaxed">{copy.body}</p>
          </Reveal>
        </div>

        {/* Featured cinematic strip */}
        <Reveal variants={fadeUp} delay={0.08}>
          <article className="client-feature group relative rounded-3xl overflow-hidden border border-wa-border bg-bg shadow-sm mb-8 md:mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[min(72vh,640px)]">
              <div className="relative lg:col-span-7 min-h-[280px] lg:min-h-0 overflow-hidden bg-slate-100">
                <Image
                  src={featured.src}
                  alt={featuredT.alt}
                  fill
                  className="object-cover object-top transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent lg:opacity-40"
                  aria-hidden="true"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center gap-4 p-7 md:p-10 bg-bg">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wide uppercase text-wa-ink-3">
                  <span className="text-wa-violet">{featuredT.niche}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredT.city}</span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-[1.75rem] tracking-tight text-wa-ink leading-snug">
                  {featuredT.client}
                </h3>
                <p className="font-display font-semibold text-base text-wa-ink-2 leading-snug">
                  {featuredT.headline}
                </p>
                <p className="text-sm text-wa-ink-2 leading-relaxed">{featuredT.body}</p>
                <p className="text-xs font-semibold text-wa-ink pt-2 border-t border-wa-border">
                  <span className="text-wa-ink-3 font-medium">{copy.outcomeLabel}: </span>
                  {featuredT.outcome}
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Interactive proof wall — select to swap story (tap-friendly, not hover-only) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 rounded-2xl border border-wa-border bg-bg/90 backdrop-blur-sm p-6 md:p-8 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wide uppercase text-wa-ink-3">
                    <span className="text-wa-violet">{activeT.niche}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeT.city}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-wa-ink tracking-tight">
                    {activeT.client}
                  </h3>
                  <p className="font-display font-semibold text-sm md:text-base text-wa-ink-2 leading-snug">
                    {activeT.headline}
                  </p>
                  <p className="text-sm text-wa-ink-2 leading-relaxed">{activeT.body}</p>
                  <p className="text-xs font-semibold text-wa-ink pt-3 border-t border-wa-border">
                    <span className="text-wa-ink-3 font-medium">{copy.outcomeLabel}: </span>
                    {activeT.outcome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <ul
            className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 list-none p-0 m-0"
            role="list"
            aria-label={copy.label}
          >
            {CLIENT_PROJECTS.map((project, i) => {
              const meta = t(project)
              const selected = active === i
              return (
                <li
                  key={project.id}
                  className={
                    i === 0 || i === 3
                      ? 'col-span-2 sm:col-span-2'
                      : 'col-span-1'
                  }
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={selected}
                    aria-label={`${meta.client} — ${meta.niche}`}
                    className={`client-tile group relative w-full overflow-hidden rounded-2xl border text-start cursor-pointer transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-violet ${
                      selected
                        ? 'border-wa-violet/60 ring-2 ring-wa-violet/20 shadow-md'
                        : 'border-wa-border hover:border-wa-ink/25 hover:shadow-sm'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-slate-100 ${
                        i === 0 || i === 3 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={project.src}
                        alt={meta.alt}
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        sizes={
                          i === 0 || i === 3
                            ? '(max-width: 640px) 100vw, 40vw'
                            : '(max-width: 640px) 50vw, 20vw'
                        }
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                          {meta.niche}
                        </p>
                        <p className="font-display font-semibold text-sm md:text-base text-white leading-snug mt-0.5">
                          {meta.client}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Quiet niche ribbon — not emoji pills */}
        <Reveal delay={0.15}>
          <p className="mt-10 md:mt-12 text-center text-xs md:text-sm text-wa-ink-3 tracking-wide">
            {rest
              .slice(0, 5)
              .map((p) => (isAr ? p.nicheAr : p.nicheEn))
              .filter((v, i, a) => a.indexOf(v) === i)
              .join('  ·  ')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
