'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Reveal, StaggerReveal, Counter, WordReveal,
  fadeUp, scaleUp, slideLeft,
} from '@/components/Animated'
import { Marquee } from '@/components/Marquee'
import ProductShowcase from '@/components/ProductShowcase'
import HeroScene from '@/components/HeroScene'
import HeroBadge from '@/components/HeroBadge'
import { GlassCard } from '@/components/GlassCard'
import { FAQS } from '@/lib/seo'

// ─── Micro icons ──────────────────────────────────────────────────────────────
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
      <path d="M2.5 7.5l3 3L11.5 4" stroke="#A5B4FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const MARKETS = ['Morocco', 'France', 'Belgium', 'United Kingdom', 'Qatar', 'UAE', 'Senegal', 'Switzerland', 'Singapore', 'Canada']

const PAINS = [
  {
    n: '01',
    title: 'Bookings happen at midnight. Your site can\'t take them.',
    body: 'Clients decide when you\'re not available. If they can\'t act on that decision right then, they move on.',
  },
  {
    n: '02',
    title: 'Clients compare you online before they call.',
    body: 'The first thing they do is Google you. The second is click away. You\'re losing deals before the conversation starts.',
  },
  {
    n: '03',
    title: 'Your site looks like where you were, not where you are.',
    body: 'A three-year-old site signals a business that\'s standing still. First impressions are permanent.',
  },
]

const SERVICES = [
  { id: 'booking',   title: 'Booking System',       body: 'Clients book appointments directly on your site. No calls, no back-and-forth, no missed slots.',         tag: 'Clinics · Law firms · Consultants', hot: true },
  { id: 'leadgen',   title: 'Lead Capture Site',    body: 'Built to convert — every section, every form, every CTA designed to get visitors to raise their hand.',   tag: 'Real estate · Contractors · Advisors' },
  { id: 'portal',    title: 'Client Portal',        body: 'A secure space where your clients log in, share documents, track progress, and stop emailing you.',        tag: 'Accounting · Legal · Consulting' },
  { id: 'catalog',   title: 'B2B Product Catalog',  body: 'Browse, filter, request a quote. International buyers expect this. A PDF on WhatsApp is not a catalog.',   tag: 'Suppliers · Export · Manufacturing' },
  { id: 'rsvp',      title: 'Direct Reservation',   body: 'Guests book directly — no third-party cut, no commission. A proper reservation flow on your own site.',    tag: 'Riads · Restaurants · Tour operators' },
  { id: 'multi',     title: 'Multilingual Site',    body: 'French, English, Arabic — full site in multiple languages. Because trust is built in someone\'s own language.', tag: 'Export · Tourism · International services' },
  { id: 'custom',    title: 'Custom Build',         body: 'Something not on this list? Marketplaces, SaaS, admin panels, automations — we engineer it from scratch.', tag: 'Any scope · quoted after your free preview', hot: false },
]

const STEPS = [
  { n: '01', title: 'Free site audit',     sub: 'Day 0',     body: 'We review your current site and tell you exactly what it\'s costing you. No pitch deck. Straight talk.' },
  { n: '02', title: 'You see it first',    sub: 'Days 1–3',  body: 'We send you a live preview of your new site. You approve every detail before we write a line of final code.' },
  { n: '03', title: 'We build it',         sub: 'Days 3–9',  body: 'Development, testing, mobile, performance. You get daily updates. No black boxes.' },
  { n: '04', title: 'Live and yours',      sub: 'Day 10',    body: 'Pointed to your domain. Fully handed over. You own the code, the hosting, everything.' },
]

const DELIVERABLES = [
  { title: 'Strategy & structure', body: 'Site architecture, user flows, and conversion paths mapped before a single pixel is placed.' },
  { title: 'Custom UI design', body: 'High-fidelity layouts built for your brand — not a template with your logo swapped in.' },
  { title: 'Full-stack development', body: 'Next.js frontend, API integrations, forms, booking logic, and everything that makes the site work.' },
  { title: 'Mobile-first build', body: 'Designed and tested on real devices. Over 60% of your traffic is probably on a phone.' },
  { title: 'Technical SEO foundation', body: 'Semantic markup, fast load times, sitemap, schema, and hreflang where needed.' },
  { title: 'Launch & handover', body: 'Deployed to your domain, code transferred to you, and a walkthrough so you\'re never dependent on us.' },
]

const STANDARDS = [
  { metric: '<2s', label: 'Target load time', detail: 'Optimized images, lean code, no page-builder bloat slowing you down.' },
  { metric: '90+', label: 'Performance score', detail: 'Built for Core Web Vitals — speed is a conversion factor, not a nice-to-have.' },
  { metric: '100%', label: 'Code ownership', detail: 'You own every line. No platform lock-in, no monthly builder tax.' },
  { metric: '10d', label: 'Typical delivery', detail: 'Preview by day 3. Live by day 10. Fixed scope, fixed deadline.' },
]

const INDUSTRIES = [
  { code: 'HLTH', title: 'Clinics & wellness', body: 'Online booking, appointment reminders, service menus, and trust-building before the first visit.' },
  { code: 'HOSP', title: 'Hospitality & riads', body: 'Direct reservation flows that cut OTA commissions and keep guests on your site.' },
  { code: 'TRDE', title: 'Contractors & trades', body: 'Lead qualification forms, service area pages, and quote requests that filter serious buyers.' },
  { code: 'B2BX', title: 'B2B & export', body: 'Product catalogs, RFQ forms, and multilingual pages for international buyers.' },
  { code: 'PROF', title: 'Professional services', body: 'Client portals, document upload, and secure areas that replace endless email threads.' },
  { code: 'INTL', title: 'International SMBs', body: 'French, English, and Arabic sites for businesses selling across borders from one team.' },
]

const INVESTMENT = [
  { tier: 'Lead Capture Site', range: '$800 – $1,400', timeline: '7–10 days', includes: 'Multi-step forms, service pages, mobile build, SEO setup' },
  { tier: 'Booking Engine', range: '$1,200 – $2,200', timeline: '10–14 days', includes: 'Calendar logic, confirmations, admin view, payment-ready' },
  { tier: 'Client Portal / B2B', range: '$1,500 – $2,800', timeline: '12–18 days', includes: 'Auth, dashboards, file upload, role-based access' },
  { tier: 'Custom Build', range: 'Scoped per project', timeline: 'Varies', includes: 'Anything you need — SaaS, marketplace, internal tool, complex integrations. Fixed quote after preview.' },
]

const CLIENT_VOICES = [
  {
    quote: 'They showed me a live preview before I paid anything. That alone separated them from every other agency I talked to.',
    name: 'Founder',
    role: 'Professional services — Casablanca',
  },
  {
    quote: 'No weekly status calls, no bloated scope document. One preview link, clear price, ten days later we were live.',
    name: 'Operations lead',
    role: 'Hospitality — Marrakech',
  },
  {
    quote: 'We needed French and English from day one. They handled both without treating translation like an afterthought.',
    name: 'Export director',
    role: 'B2B manufacturing — Tangier',
  },
  {
    quote: 'I don\'t know code. They handed over something I can actually manage and explained it in plain language.',
    name: 'Clinic owner',
    role: 'Healthcare — Rabat',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const processRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 overflow-hidden grid-bg perspective-scene"
        aria-label="Hero"
      >
        <HeroScene />

        <div className="section relative z-10 flex flex-col items-start gap-8 max-w-2xl lg:max-w-[52%]">

          <HeroBadge />

          {/* Headline — curtain word reveal */}
          <h1
            className="font-display font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            <WordReveal text="Your website should" className="block text-wa-ink" immediate />
            <span className="block">
              <WordReveal text="close deals." wordClassName="text-gradient" delay={0.2} immediate />
            </span>
            <span className="block mt-3" style={{ fontSize: '0.58em', fontWeight: 500 }}>
              <WordReveal
                text="Right now, it probably doesn't."
                wordClassName="text-wa-ink-2"
                className="inline"
                delay={0.42}
                immediate
              />
            </span>
          </h1>

          <Reveal variants={fadeUp} delay={0.62} immediate>
            <p className="text-wa-ink-2 text-lg leading-relaxed max-w-lg">
              Custom-built for your business —&nbsp;
              <strong className="text-wa-ink">whatever you need online.</strong>
              &nbsp;Booking, portals, dashboards, marketplaces, internal tools. If you can describe it, we can build it.
            </p>
          </Reveal>

          <Reveal variants={scaleUp} delay={0.76} immediate>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 340, damping: 20 }}
              >
                <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">
                  See Your Site First — Free <Arrow />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services" className="btn-ghost px-8 py-3.5 text-base">
                  See What We Build
                </Link>
              </motion.div>
            </div>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.9} immediate>
            <div className="flex flex-wrap gap-5 text-sm text-wa-ink-3">
              {['You approve the design before we build', 'Fixed price — no surprises', 'French & English'].map(t => (
                <span key={t} className="flex items-center gap-2"><Check />{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────────── */}
      <div className="border-y border-wa-border py-4 bg-bg-surface overflow-hidden">
        <Marquee items={MARKETS} speed={32} />
      </div>

      {/* ── PERFORMANCE STANDARDS ─────────────────────────────────────────── */}
      <section className="py-24" id="standards" aria-labelledby="standards-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>Engineered to Perform</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="standards-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                A beautiful site is useless if it&apos;s{' '}
                <span className="text-gradient">slow or invisible</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
                Top agencies obsess over speed, structure, and ownership. We build the same way —
                conversion-focused, mobile-first, and ready to rank from day one.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
            {STANDARDS.map(s => (
              <motion.div key={s.label} variants={scaleUp}>
                <GlassCard accent="#5E6AD2" intensity={6} className="h-full p-6 flex flex-col gap-3 text-center">
                  <p className="font-display font-bold text-3xl md:text-4xl text-wa-violet tracking-tight">{s.metric}</p>
                  <p className="font-display font-semibold text-sm text-wa-ink">{s.label}</p>
                  <p className="text-wa-ink-3 text-xs leading-relaxed">{s.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ──────────────────────────────────────────────── */}
      <ProductShowcase />

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 depth-section" aria-label="Key figures">
        <div className="section">
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: 10, s: '',  u: 'days',  l: 'First call to live site' },
              { v: 7,  s: '+', u: '',      l: 'Countries served'        },
              { v: 100,s: '%', u: '',      l: 'Remote — no office ever' },
              { v: 2,  s: '',  u: 'langs', l: 'French + English'        },
            ].map(stat => (
              <motion.div key={stat.l} variants={fadeUp}>
                <GlassCard accent="#5E6AD2" intensity={5} className="flex flex-col items-center justify-center text-center py-10 px-5">
                  <p className="font-display font-bold leading-none tracking-tight"
                    style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)' }}>
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

      {/* ── PAIN POINTS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface" aria-labelledby="pain-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>The Real Problem</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="pain-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Your website is <span className="text-gradient">working against you</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-md leading-relaxed">
                Not because it looks bad. Because it does nothing.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAINS.map(p => (
              <motion.div key={p.n} variants={fadeUp}>
                <GlassCard className="p-6 h-full flex flex-col gap-4" accent="#5E6AD2" intensity={7}>
                  <span className="font-display font-bold text-3xl text-wa-border">{p.n}</span>
                  <h3 className="font-display font-semibold text-base leading-snug text-wa-ink">{p.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{p.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24" id="services" aria-labelledby="services-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>What We Build</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="services-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Your idea. Engineered.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
                Below are builds we do often — not a limit. Need something different? Tell us what you want and we&apos;ll scope it.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {SERVICES.map(s => (
              <motion.div key={s.id} variants={scaleUp}>
                <GlassCard accent={s.hot ? '#5E6AD2' : '#52525B'} intensity={6} className="h-full">
                  <Link href={`/services#${s.id}`} className="h-full flex flex-col gap-4 no-underline block p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-semibold text-base text-wa-ink">{s.title}</h3>
                      {s.hot && (
                        <span className="shrink-0 text-[10px] font-bold text-wa-violet-l border border-wa-violet/50 rounded-full px-2 py-0.5">
                          Popular
                        </span>
                      )}
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
              <Link href="/contact" className="btn-ghost">Describe your project <Arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DELIVERABLES ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>What&apos;s Included</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="capabilities-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Every project ships complete
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
                No disconnected deliverables. Strategy, design, development, SEO, and launch —
                one team, one scope, one handover.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {DELIVERABLES.map((d, i) => (
              <motion.div key={d.title} variants={fadeUp}>
                <GlassCard accent="#5E6AD2" intensity={6} className="h-full p-6 flex flex-col gap-3">
                  <span className="font-display font-bold text-xs text-wa-violet">0{i + 1}</span>
                  <h3 className="font-display font-semibold text-base text-wa-ink">{d.title}</h3>
                  <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{d.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="industries-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>Purpose-Built</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="industries-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Built for businesses like yours
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-md">
                Every layout, form, and flow is shaped by your industry — not squeezed into a generic template.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {INDUSTRIES.map(ind => (
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

      {/* ── INVESTMENT ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface" id="pricing" aria-labelledby="pricing-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>Transparent Investment</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="pricing-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Know the range before you call
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
                Premium agencies hide pricing behind discovery calls. We quote upfront —
                fixed scope, fixed deadline, no surprise invoices.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
            {INVESTMENT.map(tier => (
              <motion.div key={tier.tier} variants={fadeUp}>
                <GlassCard accent="#5E6AD2" intensity={7} className="h-full p-6 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-wa-ink">{tier.tier}</h3>
                    <p className="font-display font-bold text-2xl text-wa-violet mt-2">{tier.range}</p>
                    <p className="text-wa-ink-3 text-xs mt-1">{tier.timeline}</p>
                  </div>
                  <p className="text-wa-ink-2 text-sm leading-relaxed flex-1">{tier.includes}</p>
                  <Link href="/contact" className="btn-ghost text-sm justify-center">
                    Get a fixed quote <Arrow />
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>

          <Reveal delay={0.3}>
            <p className="text-center text-wa-ink-3 text-xs mt-8 max-w-lg mx-auto">
              Ranges shown are for common builds. Custom projects are scoped and quoted after your free preview — before any payment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface" id="process" aria-labelledby="process-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <Reveal><SLabel>How It Works</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="process-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                First call to live site in{' '}
                <span className="text-gradient">10 days</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-md">
                No agency bloat. No weekly status calls. A clear process that actually ends.
              </p>
            </Reveal>
          </div>

          <div ref={processRef} className="relative">
            <div className="hidden md:block absolute top-[26px] left-[12%] right-[12%] h-px">
              <div className="absolute inset-0 bg-wa-border" />
              <motion.div className="absolute inset-y-0 left-0 bg-wa-violet origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                viewport={{ once: true, margin: '-15% 0px' }}
              />
            </div>
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-4 gap-8" stagger={0.13} delay={0.15}>
              {STEPS.map(step => (
                <motion.div key={step.n} variants={fadeUp} className="flex flex-col gap-4 text-center items-center">
                  <motion.div
                    className="w-[52px] h-[52px] rounded-full border border-wa-violet flex items-center justify-center relative z-10"
                    style={{ background: 'rgba(94,106,210,0.1)' }}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 22px rgba(94,106,210,0.45)' }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  >
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

      {/* ── FREE PREVIEW OFFER ────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="preview-heading">
        {/* Offset background */}
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(94,106,210,0.08) 0%, transparent 60%)' }} />
        <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-1/2"
          style={{ background: 'linear-gradient(to left, rgba(56,189,248,0.04) 0%, transparent 100%)' }} />

        <div className="section relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variants={fadeUp} className="flex flex-col gap-6">
            <SLabel>Zero commitment</SLabel>
            <h2 id="preview-heading"
              className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              See your new site before you{' '}
              <span className="text-gradient">commit to anything</span>
            </h2>
            <p className="text-wa-ink-2 text-base leading-relaxed max-w-lg">
              We redesign your homepage and send you a live, clickable link —
              before you sign a contract or pay a cent. If it's not right, you owe us nothing.
              If it is, we build the rest in 10 days.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'No contract needed to see the preview',
                'Live URL — not a screenshot, not a PDF',
                'Feedback and revisions before we build',
                'If you love it, we start immediately',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-wa-ink-2">
                  <Check />{item}
                </li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 340, damping: 20 }}
              className="w-fit"
            >
              <Link href="/contact"
                className="btn-primary px-8 py-4 text-base"
                style={{ boxShadow: '0 0 32px rgba(94,106,210,0.35)' }}>
                Get My Free Preview <Arrow />
              </Link>
            </motion.div>
          </Reveal>

          <Reveal variants={slideLeft}>
            <div className="card-featured">
              <div className="card-featured-inner flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-wa-violet-m border border-wa-violet flex items-center justify-center shrink-0">
                    <span className="text-wa-violet-l text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-wa-ink">You send us your site</p>
                    <p className="text-wa-ink-3 text-xs">Current URL + a few words about your business</p>
                  </div>
                </div>
                <div className="w-px h-6 bg-wa-border ml-4" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-wa-violet-m border border-wa-violet flex items-center justify-center shrink-0">
                    <span className="text-wa-violet-l text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-wa-ink">We send you a live preview</p>
                    <p className="text-wa-ink-3 text-xs">A real, clickable URL — usually within 48 hours</p>
                  </div>
                </div>
                <div className="w-px h-6 bg-wa-border ml-4" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-wa-gold/20 border border-wa-gold/60 flex items-center justify-center shrink-0">
                    <span className="text-wa-gold text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-wa-ink">You decide</p>
                    <p className="text-wa-ink-3 text-xs">Love it → we build. Don't → you owe nothing.</p>
                  </div>
                </div>
                <div className="mt-2 p-4 rounded-xl" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
                  <p className="text-wa-gold text-xs font-semibold">No upfront payment · No contract · No pressure</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT VOICES ─────────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="voices-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>How We Work</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="voices-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                What clients value most
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-md">
                No inflated metrics. Just the things that matter when you hire a web partner.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLIENT_VOICES.map((t, i) => (
              <motion.div key={t.role} variants={i % 2 === 0 ? fadeUp : slideLeft}>
                <GlassCard accent="#5E6AD2" intensity={5} className="h-full p-6 flex flex-col gap-4">
                  <span className="text-2xl font-serif text-wa-violet leading-none opacity-50" aria-hidden="true">&ldquo;</span>
                  <blockquote className="text-wa-ink-2 text-sm leading-relaxed flex-1 italic">{t.quote}</blockquote>
                  <figcaption className="pt-2 border-t border-wa-border/50">
                    <p className="font-display font-semibold text-sm text-wa-ink">{t.name}</p>
                    <p className="text-xs text-wa-ink-3">{t.role}</p>
                  </figcaption>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="why-heading">
        <div className="section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variants={fadeUp} className="flex flex-col gap-7">
            <SLabel>Why WebAtlas</SLabel>
            <h2 id="why-heading"
              className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              We're not another agency.<br />
              <span className="text-gradient">We're your technical partner.</span>
            </h2>
            <p className="text-wa-ink-2 text-base leading-relaxed">
              One team, one focus — building sites that perform. No 10-week timelines, no bloated scope,
              no templated designs. We use every modern tool available to move fast
              without cutting corners.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                ['You see it before you pay',    'Live preview first. No blind builds, ever.'],
                ['Fixed price, fixed deadline',  'Quote locked upfront. No surprise invoices.'],
                ['Built for performance',        'Fast-loading, mobile-first, SEO-ready from day one.'],
                ['Remote — no friction',        'Video call, preview link, payment. That\'s the whole process.'],
                ['French & English',            'Native in both. Same team. Same quality.'],
              ].map(([title, body]) => (
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
                {[
                  ['10',   'days to launch'],
                  ['$0',   'office overhead'],
                  ['7+',   'active markets'],
                  ['100%', 'code ownership'],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display font-bold text-4xl text-wa-violet tracking-tight">{n}</p>
                    <p className="text-wa-ink-2 text-xs mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <p className="font-display font-semibold text-sm text-wa-ink">Based in Casablanca · Working globally</p>
              <p className="text-wa-ink-2 text-sm mt-1">Morocco · France · Belgium · UK · Gulf · SE Asia</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface" id="faq" aria-labelledby="faq-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>FAQ</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="faq-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Straight answers
              </h2>
            </Reveal>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-2.5">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <details className="group border border-wa-border rounded-xl overflow-hidden bg-bg-surface">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-bg-raised transition-colors select-none">
                    <span className="font-display font-semibold text-sm text-wa-ink leading-snug">{faq.q}</span>
                    <span className="text-wa-ink-3 group-open:rotate-45 transition-transform duration-200 shrink-0 text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-wa-ink-2 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-32 grid-bg relative overflow-hidden" aria-labelledby="cta-heading">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 80% at 50% 110%, rgba(94,106,210,0.22) 0%, transparent 65%)' }} />

        <motion.div aria-hidden="true"
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(94,106,210,0.14) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="section relative z-10 flex flex-col items-center text-center gap-7">
          <Reveal><SLabel>Get Started</SLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 id="cta-heading"
              className="font-display font-bold tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', maxWidth: 700 }}>
              Stop losing clients to a website{' '}
              <span className="text-gradient">that does nothing</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-wa-ink-2 text-lg max-w-md leading-relaxed">
              15-minute call. No pitch deck. We look at your current site and tell you
              exactly what it should be doing — then we show you.
            </p>
          </Reveal>
          <Reveal variants={scaleUp} delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            >
              <Link href="/contact"
                className="btn-primary px-10 py-4 text-base"
                style={{ boxShadow: '0 0 42px rgba(94,106,210,0.42)' }}>
                Book the 15-Minute Call <Arrow />
              </Link>
            </motion.div>
          </Reveal>
          <Reveal delay={0.42}>
            <p className="text-wa-ink-3 text-xs">
              Responds within 4 hours · French & English · You see the design before any payment
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
