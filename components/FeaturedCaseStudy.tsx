'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Reveal, fadeUp, slideLeft } from '@/components/Animated'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ExternalArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Featured client showcase — NodensCare medical tourism platform */
export default function FeaturedCaseStudy() {
  const { t, dir } = useLanguage()
  const cs = t.caseStudy
  const home = t.home
  const c = t.common
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22 })

  const rotateY = useTransform(springX, [-0.5, 0.5], dir === 'rtl' ? [5, -5] : [-5, 5])
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      className="py-28 relative overflow-hidden section-mesh"
      aria-labelledby="case-study-heading"
    >
      <div aria-hidden="true" className="ambient-orb ambient-orb-violet" style={{ top: '-10%', right: '-5%' }} />
      <div aria-hidden="true" className="ambient-orb ambient-orb-gold" style={{ bottom: '0', left: '-8%' }} />

      <div className="section relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Reveal>
            <span className="label-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-glow" />
              {home.caseStudyLabel}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="case-study-heading"
              className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight"
            >
              {home.caseStudyTitle}{' '}
              <span className="text-gradient">{home.caseStudyTitleAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal variants={fadeUp} className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display font-bold text-2xl text-wa-ink tracking-tight">{cs.client}</span>
              <span className="label-pill text-[10px]">{cs.industry}</span>
              <span className="text-wa-ink-3 text-xs">{cs.location}</span>
            </div>

            <h3 className="font-display font-bold text-xl md:text-2xl leading-snug text-wa-ink">
              {cs.headline}
            </h3>
            <p className="text-wa-ink-2 text-base leading-relaxed">{cs.body}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-wa-border bg-bg-raised/60 p-4">
                <p className="text-[10px] uppercase tracking-widest text-wa-ink-3 mb-1">{c.challenge}</p>
                <p className="text-sm text-wa-ink-2">{cs.challenge}</p>
              </div>
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 p-4">
                <p className="text-[10px] uppercase tracking-widest text-teal-300 mb-1">{c.solution}</p>
                <p className="text-sm text-wa-ink">{cs.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cs.metrics.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-xl border border-wa-border/80 bg-bg-surface/80">
                  <p className="font-display font-bold text-2xl text-teal-400">{m.value}</p>
                  <p className="text-[10px] text-wa-ink-3 mt-1 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-wa-border bg-bg-raised/60 p-4">
                <p className="text-[10px] uppercase tracking-widest text-wa-ink-3 mb-1">{c.before}</p>
                <p className="text-sm text-wa-ink-3">{cs.before}</p>
              </div>
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 p-4">
                <p className="text-[10px] uppercase tracking-widest text-teal-300 mb-1">{c.after}</p>
                <p className="text-sm text-wa-ink">{cs.after}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary w-fit px-6 py-3">
                {cs.cta} <Arrow />
              </Link>
              <a
                href={cs.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-fit px-6 py-3"
              >
                {cs.visitCta} <ExternalArrow />
              </a>
            </div>
          </Reveal>

          <Reveal variants={slideLeft} className="order-1 lg:order-2 perspective-scene">
            <div
              ref={containerRef}
              className="relative preserve-3d"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="absolute -inset-6 rounded-3xl opacity-50 blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(20,184,166,0.28), transparent 70%)',
                  rotateX,
                  rotateY,
                }}
              />

              <motion.div
                style={{ rotateX, rotateY, transformPerspective: 1400 }}
                className="relative preserve-3d"
              >
                <a
                  href={cs.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group no-underline case-study-frame"
                  aria-label={cs.screenshot.alt}
                >
                  <div className="case-study-chrome">
                    <div className="flex gap-1.5">
                      <span className="browser-dot" style={{ background: '#FF5F57' }} />
                      <span className="browser-dot" style={{ background: '#FEBC2E' }} />
                      <span className="browser-dot" style={{ background: '#28C840' }} />
                    </div>
                    <div className="case-study-url">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      {cs.screenshot.siteBar}
                    </div>
                  </div>
                  <div className="case-study-viewport">
                    <Image
                      src="/case-studies/nodenscare-home.png"
                      alt={cs.screenshot.alt}
                      width={1440}
                      height={900}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </a>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
