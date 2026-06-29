'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Reveal, fadeUp, slideLeft } from '@/components/Animated'
import { GlassCard } from '@/components/GlassCard'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Premium featured client showcase — Dramina wellness booking case study */
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

  const rotateY = useTransform(springX, [-0.5, 0.5], dir === 'rtl' ? [8, -8] : [-8, 8])
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])

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
              <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
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
              <div className="rounded-xl border border-wa-violet/30 bg-wa-violet-m p-4">
                <p className="text-[10px] uppercase tracking-widest text-wa-violet-l mb-1">{c.solution}</p>
                <p className="text-sm text-wa-ink">{cs.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cs.metrics.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-xl border border-wa-border/80 bg-bg-surface/80">
                  <p className="font-display font-bold text-2xl text-wa-violet">{m.value}</p>
                  <p className="text-[10px] text-wa-ink-3 mt-1 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary w-fit px-6 py-3">
              {cs.cta} <Arrow />
            </Link>
          </Reveal>

          <Reveal variants={slideLeft} className="order-1 lg:order-2 perspective-scene">
            <div
              ref={containerRef}
              className="relative preserve-3d"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Depth layers */}
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(94,106,210,0.35), transparent 70%)',
                  rotateX,
                  rotateY,
                }}
              />

              <motion.div
                style={{ rotateX, rotateY, transformPerspective: 1200 }}
                className="relative preserve-3d"
              >
                <GlassCard accent="#5E6AD2" intensity={16} glow className="p-1">
                  <div className="rounded-[18px] overflow-hidden bg-[#060610] border border-white/5">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-white/[0.03]">
                      <span className="browser-dot" style={{ background: '#FF5F57' }} />
                      <span className="browser-dot" style={{ background: '#FEBC2E' }} />
                      <span className="browser-dot" style={{ background: '#28C840' }} />
                      <span className="flex-1 text-[10px] text-wa-ink-3 font-display pl-2">
                        dramina.ma · booking
                      </span>
                    </div>

                    {/* Mock UI */}
                    <div className="p-5 md:p-6 min-h-[300px] relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(94,106,210,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(94,106,210,0.08) 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }}
                      />

                      <motion.div
                        className="relative z-10 flex flex-col gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-lg text-wa-ink tracking-tight">DRAMINA</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-wa-violet/40 text-wa-violet-l">FR · AR · EN</span>
                        </div>

                        <div className="h-24 rounded-xl bg-gradient-to-br from-wa-violet/20 via-transparent to-wa-gold/10 border border-white/8 flex items-end p-4">
                          <p className="text-xs text-wa-ink-2 max-w-[200px]">{cs.mockup.banner}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {cs.mockup.services.map((s, i) => (
                            <motion.div
                              key={s}
                              className="rounded-lg border border-white/8 bg-bg-raised/80 p-2 text-center"
                              whileHover={{ scale: 1.04, z: 20 }}
                            >
                              <p className="text-[9px] text-wa-ink-3">{s}</p>
                              <p className="text-[10px] font-semibold text-wa-violet-l mt-1">
                                {['450', '380', '200'][i]} MAD
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          className="rounded-xl py-2.5 text-center text-xs font-semibold text-white"
                          style={{
                            background: 'linear-gradient(180deg, #6E7AE0, #5E6AD2)',
                            boxShadow: '0 8px 24px rgba(94,106,210,0.4)',
                          }}
                          animate={{ boxShadow: ['0 8px 24px rgba(94,106,210,0.35)', '0 12px 32px rgba(94,106,210,0.55)', '0 8px 24px rgba(94,106,210,0.35)'] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {cs.mockup.cta}
                        </motion.div>
                      </motion.div>

                      {/* Floating glass card — parallax layer */}
                      <motion.div
                        className="absolute -right-2 top-8 z-20 w-36 rounded-xl border border-wa-gold/30 bg-bg-surface/90 backdrop-blur-md p-3 shadow-glow-cyan"
                        style={{ translateZ: 40 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <p className="text-[9px] text-wa-gold uppercase tracking-wider">{c.live}</p>
                        <p className="font-display font-bold text-lg text-wa-ink">+24</p>
                        <p className="text-[9px] text-wa-ink-3">{c.bookingsThisWeek}</p>
                      </motion.div>
                    </div>
                  </div>
                </GlassCard>

                {/* Before / after strip */}
                <motion.div
                  className="mt-4 grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
                    <p className="text-[9px] uppercase tracking-widest text-red-400/80 mb-1">{c.before}</p>
                    <p className="text-[11px] text-wa-ink-3 leading-relaxed">{cs.before}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3">
                    <p className="text-[9px] uppercase tracking-widest text-emerald-400/90 mb-1">{c.after}</p>
                    <p className="text-[11px] text-wa-ink-2 leading-relaxed">{cs.after}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
