'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Reveal, StaggerReveal, Counter,
  fadeUp, scaleUp, slideLeft,
} from '@/components/Animated'
import { Marquee } from '@/components/Marquee'
import ProductShowcase from '@/components/ProductShowcase'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import ClientProjects from '@/components/ClientProjects'
import HeroScene from '@/components/HeroScene'
import HeroBadge from '@/components/HeroBadge'
import { GlassCard } from '@/components/GlassCard'
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
      <path d="M2.5 7.5l3 3L11.5 4" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

export default function HomePage() {
  const processRef = useRef<HTMLDivElement>(null)
  const { t, dir } = useLanguage()
  const h = t.home
  const c = t.common
  const waUrl = buildWaUrl(WHATSAPP_NUMBER, t.wa.defaultMessage)

  return (
    <>
      <PageMeta page="home" />
      {/* HERO */}
      <section
        className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 overflow-hidden grid-bg perspective-scene"
        aria-labelledby="hero-heading"
      >
        <HeroScene />
        <div className={`section relative z-10 flex flex-col gap-8 max-w-2xl lg:max-w-[52%] ${dir === 'rtl' ? 'items-start text-right' : 'items-start'}`}>
          <HeroBadge />
          <h1 id="hero-heading" className="font-display font-bold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}>
            <span className="block text-wa-ink">{h.heroLine1}</span>
            <span className="block text-gradient">{h.heroLine2}</span>
            <span className="block mt-3 text-wa-ink-2" style={{ fontSize: '0.58em', fontWeight: 500 }}>
              {h.heroLine3}
            </span>
          </h1>
          <Reveal variants={fadeUp} delay={0.62} immediate>
            <p className="text-wa-ink-2 text-lg leading-relaxed max-w-lg">
              {h.heroBody}&nbsp;
              <strong className="text-wa-ink">{h.heroBodyStrong}</strong>
              &nbsp;{h.heroBodyExtra}
            </p>
          </Reveal>
          <Reveal variants={scaleUp} delay={0.76} immediate>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 340, damping: 20 }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 text-base">
                  {h.heroCta1} <Arrow />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services" className="btn-ghost px-8 py-3.5 text-base">{h.heroCta2}</Link>
              </motion.div>
            </div>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.9} immediate>
            <div className="flex flex-wrap gap-5 text-sm text-wa-ink-3">
              {h.heroTrust.map(item => (
                <span key={item} className="flex items-center gap-2"><Check />{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-y border-wa-border py-4 bg-bg-surface overflow-hidden">
        <Marquee items={h.markets} speed={32} />
      </div>

      <section className="py-24" id="standards" aria-labelledby="standards-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.standardsLabel}</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="standards-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                {h.standardsTitle}{' '}<span className="text-gradient">{h.standardsTitleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{h.standardsBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
            {h.standards.map(s => (
              <motion.div key={s.label} variants={scaleUp}>
                <GlassCard accent="#0F172A" intensity={6} className="h-full p-6 flex flex-col gap-3 text-center">
                  <p className="font-display font-bold text-3xl md:text-4xl text-wa-violet tracking-tight">{s.metric}</p>
                  <p className="font-display font-semibold text-sm text-wa-ink">{s.label}</p>
                  <p className="text-wa-ink-3 text-xs leading-relaxed">{s.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <ProductShowcase />
      <ClientProjects />
      <FeaturedCaseStudy />

      <section className="py-20 depth-section" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Key figures</h2>
        <div className="section">
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {h.stats.map(stat => (
              <motion.div key={stat.l} variants={fadeUp}>
                <GlassCard accent="#0F172A" intensity={5} className="flex flex-col items-center justify-center text-center py-10 px-5">
                  <p className="font-display font-bold leading-none tracking-tight" style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)' }}>
                    <Counter to={stat.v} /><span className="text-wa-violet">{stat.s}</span>
                    {stat.u && <span className="text-wa-ink-3 text-xl ml-1.5">{stat.u}</span>}
                  </p>
                  <p className="text-wa-ink-3 text-xs mt-2">{stat.l}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" aria-labelledby="pain-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.painLabel}</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="pain-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                {h.painTitle} <span className="text-gradient">{h.painTitleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-md leading-relaxed">{h.painBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {h.pains.map(p => (
              <motion.div key={p.n} variants={fadeUp}>
                <GlassCard className="p-6 h-full flex flex-col gap-4" accent="#0F172A" intensity={7}>
                  <span className="font-display font-bold text-3xl text-wa-border">{p.n}</span>
                  <h3 className="font-display font-semibold text-base leading-snug text-wa-ink">{p.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{p.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-24" id="services" aria-labelledby="services-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.servicesLabel}</SLabel></Reveal>
            <Reveal delay={0.1}><h2 id="services-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">{h.servicesTitle}</h2></Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{h.servicesBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {h.services.map(s => (
              <motion.div key={s.id} variants={scaleUp}>
                <GlassCard accent={s.hot ? '#0F172A' : '#94A3B8'} intensity={6} className="h-full">
                  <Link href={`/services#${s.id}`} className="h-full flex flex-col gap-4 no-underline block p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-semibold text-base text-wa-ink">{s.title}</h3>
                      {s.hot && <span className="shrink-0 text-[10px] font-bold text-wa-violet-l border border-wa-violet/50 rounded-full px-2 py-0.5">{c.popular}</span>}
                    </div>
                    <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{s.body}</p>
                    <p className="text-xs text-wa-ink-3">{s.tag}</p>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
          <Reveal delay={0.3}>
            <div className="flex justify-center mt-10">
              <Link href="/contact" className="btn-ghost">{c.describeProject} <Arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.deliverablesLabel}</SLabel></Reveal>
            <Reveal delay={0.1}><h2 id="capabilities-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">{h.deliverablesTitle}</h2></Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{h.deliverablesBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {h.deliverables.map((d, i) => (
              <motion.div key={d.title} variants={fadeUp}>
                <GlassCard accent="#0F172A" intensity={6} className="h-full p-6 flex flex-col gap-3">
                  <span className="font-display font-bold text-xs text-wa-violet">0{i + 1}</span>
                  <h3 className="font-display font-semibold text-base text-wa-ink">{d.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{d.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-24" aria-labelledby="industries-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.industriesLabel}</SLabel></Reveal>
            <Reveal delay={0.1}><h2 id="industries-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">{h.industriesTitle}</h2></Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-md">{h.industriesBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {h.industries.map(ind => (
              <motion.div key={ind.title} variants={scaleUp}>
                <GlassCard accent="#52525B" intensity={5} className="h-full p-6 flex flex-col gap-3">
                  <span className="industry-code" aria-hidden="true">{ind.code}</span>
                  <h3 className="font-display font-semibold text-base text-wa-ink">{ind.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{ind.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" id="pricing" aria-labelledby="pricing-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.investmentLabel}</SLabel></Reveal>
            <Reveal delay={0.1}><h2 id="pricing-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">{h.investmentTitle}</h2></Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{h.investmentBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
            {h.investment.map(tier => (
              <motion.div key={tier.tier} variants={fadeUp}>
                <GlassCard accent="#0F172A" intensity={7} className="h-full p-6 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-wa-ink">{tier.tier}</h3>
                    <p className="font-display font-bold text-2xl text-wa-violet mt-2">{tier.range}</p>
                    <p className="text-wa-ink-3 text-xs mt-1">{tier.timeline}</p>
                  </div>
                  <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{tier.includes}</p>
                  <Link href="/contact" className="btn-ghost text-sm justify-center">{c.getFixedQuote} <Arrow /></Link>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
          <Reveal delay={0.3}><p className="text-center text-wa-ink-3 text-xs mt-8 max-w-lg mx-auto">{h.investmentFootnote}</p></Reveal>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" id="process" aria-labelledby="process-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <Reveal><SLabel>{h.processLabel}</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="process-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                {h.processTitle} <span className="text-gradient">{h.processTitleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-md">{h.processBody}</p></Reveal>
          </div>
          <div ref={processRef} className="relative">
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-4 gap-8" stagger={0.13} delay={0.15}>
              {h.steps.map(step => (
                <motion.div key={step.n} variants={fadeUp} className="flex flex-col gap-4 text-center items-center">
                  <motion.div className="w-[52px] h-[52px] rounded-full border border-wa-violet flex items-center justify-center relative z-10" style={{ background: 'rgba(15,23,42,0.06)' }}>
                    <span className="font-display font-bold text-sm text-wa-violet-l">{step.n}</span>
                  </motion.div>
                  <span className="text-xs font-semibold text-wa-gold">{step.sub}</span>
                  <h3 className="font-display font-semibold text-base text-wa-ink">{step.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden" aria-labelledby="preview-heading">
        <div className="section relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variants={fadeUp} className="flex flex-col gap-6">
            <SLabel>{h.previewLabel}</SLabel>
            <h2 id="preview-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              {h.previewTitle} <span className="text-gradient">{h.previewTitleAccent}</span>
            </h2>
            <p className="text-wa-ink-2 text-base leading-relaxed max-w-lg">{h.previewBody}</p>
            <ul className="flex flex-col gap-3">
              {h.previewBullets.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-wa-ink-2"><Check />{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base w-fit">{h.previewCta} <Arrow /></Link>
          </Reveal>
          <Reveal variants={slideLeft}>
            <div className="card-featured">
              <div className="card-featured-inner flex flex-col gap-5">
                {h.previewSteps.map((step, i) => (
                  <div key={step.title}>
                    {i > 0 && <div className="w-px h-6 bg-wa-border ml-4 mb-3" />}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-wa-violet-m border border-wa-violet flex items-center justify-center shrink-0">
                        <span className="text-wa-violet-l text-sm font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <p className="font-display font-semibold text-sm text-wa-ink">{step.title}</p>
                        <p className="text-wa-ink-3 text-xs">{step.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-2 p-4 rounded-xl" style={{ background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(15,23,42,0.1)' }}>
                  <p className="text-wa-gold text-xs font-semibold">{h.previewNote}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24" aria-labelledby="voices-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.voicesLabel}</SLabel></Reveal>
            <Reveal delay={0.1}><h2 id="voices-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">{h.voicesTitle}</h2></Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-md">{h.voicesBody}</p></Reveal>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {h.clientVoices.map((voice, i) => (
              <motion.div key={voice.role} variants={i % 2 === 0 ? fadeUp : slideLeft}>
                <GlassCard accent="#0F172A" intensity={5} className="h-full p-6 flex flex-col gap-4">
                  <figure>
                    <blockquote className="text-wa-ink-2 text-sm leading-relaxed flex-1 italic">{voice.quote}</blockquote>
                    <figcaption className="pt-2 border-t border-wa-border/50">
                      <p className="font-display font-semibold text-sm text-wa-ink">{voice.name}</p>
                      <p className="text-xs text-wa-ink-3">{voice.role}</p>
                    </figcaption>
                  </figure>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-24" aria-labelledby="why-heading">
        <div className="section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variants={fadeUp} className="flex flex-col gap-7">
            <SLabel>{h.whyLabel}</SLabel>
            <h2 id="why-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              {h.whyTitle}<br /><span className="text-gradient">{h.whyTitleAccent}</span>
            </h2>
            <p className="text-wa-ink-2 text-base leading-relaxed">{h.whyBody}</p>
            <ul className="flex flex-col gap-4">
              {h.whyItems.map(([title, body]) => (
                <li key={title} className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0"><Check /></span>
                  <div>
                    <p className="font-display font-semibold text-sm text-wa-ink">{title}</p>
                    <p className="text-wa-ink-2 text-sm">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variants={slideLeft} className="flex flex-col gap-4">
            <div className="card-featured">
              <div className="card-featured-inner grid grid-cols-2 gap-6 p-8">
                {h.whyStats.map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display font-bold text-4xl text-wa-violet tracking-tight">{n}</p>
                    <p className="text-wa-ink-2 text-xs mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <p className="font-display font-semibold text-sm text-wa-ink">{h.whyLocationTitle}</p>
              <p className="text-wa-ink-2 text-sm mt-1">{h.whyLocationBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-bg-surface" id="faq" aria-labelledby="faq-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>{h.faqLabel}</SLabel></Reveal>
            <Reveal delay={0.1}><h2 id="faq-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">{h.faqTitle}</h2></Reveal>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-2.5">
            {t.faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <details className="group border border-wa-border rounded-xl overflow-hidden bg-bg-surface">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-bg-raised transition-colors select-none">
                    <span className="font-display font-semibold text-sm text-wa-ink leading-snug">{faq.q}</span>
                    <span className="text-wa-ink-3 group-open:rotate-45 transition-transform duration-200 shrink-0 text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1"><p className="text-wa-ink-2 text-sm leading-relaxed">{faq.a}</p></div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 grid-bg relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="section relative z-10 flex flex-col items-center text-center gap-7">
          <Reveal><SLabel>{h.ctaLabel}</SLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 id="cta-heading" className="font-display font-bold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', maxWidth: 700 }}>
              {h.ctaTitle} <span className="text-gradient">{h.ctaTitleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}><p className="text-wa-ink-2 text-lg max-w-md leading-relaxed">{h.ctaBody}</p></Reveal>
          <Reveal variants={scaleUp} delay={0.3}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4 text-base">
              {h.ctaButton} <Arrow />
            </a>
          </Reveal>
          <Reveal delay={0.42}><p className="text-wa-ink-3 text-xs">{h.ctaFootnote}</p></Reveal>
        </div>
      </section>
    </>
  )
}
