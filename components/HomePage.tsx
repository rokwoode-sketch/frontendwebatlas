'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Reveal, StaggerReveal, Counter, WordReveal,
  fadeUp, scaleUp, slideLeft,
} from '@/components/Animated'
import { Marquee } from '@/components/Marquee'
import VSL from '@/components/VSL'
import ProductShowcase from '@/components/ProductShowcase'
import HeroScene from '@/components/HeroScene'
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
]

const STEPS = [
  { n: '01', title: 'Free site audit',     sub: 'Day 0',     body: 'We review your current site and tell you exactly what it\'s costing you. No pitch deck. Straight talk.' },
  { n: '02', title: 'You see it first',    sub: 'Days 1–3',  body: 'We send you a live preview of your new site. You approve every detail before we write a line of final code.' },
  { n: '03', title: 'We build it',         sub: 'Days 3–9',  body: 'Development, testing, mobile, performance. You get daily updates. No black boxes.' },
  { n: '04', title: 'Live and yours',      sub: 'Day 10',    body: 'Pointed to your domain. Fully handed over. You own the code, the hosting, everything.' },
]

const TESTIMONIALS = [
  {
    quote: 'We went from 3 phone bookings a week to 20+ online appointments. The site paid for itself in the first month.',
    name: 'Yasmine B.',
    role: 'Aesthetic Clinic — Casablanca',
    stat: '6×',
    statLabel: 'more bookings',
  },
  {
    quote: 'International buyers couldn\'t reach us before. Two months after launch, three new export inquiries from France — through a contact form they filled at 10 PM.',
    name: 'Karim E.',
    role: 'Import-Export Director — Tangier',
    stat: '3',
    statLabel: 'new export clients',
  },
  {
    quote: 'Fast, precise, and professional. They showed me the finished design before I committed to anything. Went live in 10 days.',
    name: 'Sophie L.',
    role: 'Founder, Recruitment Agency — Brussels',
    stat: '10',
    statLabel: 'days to launch',
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <SLabel>Web Studio · Casablanca</SLabel>
          </motion.div>

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
              Custom-built for established businesses —&nbsp;
              <strong className="text-wa-ink">booking systems, lead engines, client portals.</strong>
              &nbsp;Delivered in 10 days. Priced honestly.
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

      {/* ── VSL ───────────────────────────────────────────────────────────── */}
      <VSL />

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
                Systems that grow your business
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-md">
                Not pages. Not templates. Business tools that happen to live on the web.
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
              <Link href="/services" className="btn-ghost">All services <Arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESULTS TEASER ────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface" id="results" aria-labelledby="results-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>Case Studies</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="results-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                Results, not promises
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-md">
                Three businesses. Three specific problems. Three measurable outcomes.
              </p>
            </Reveal>
          </div>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.08}>
            {[
              {
                tag: 'Booking System',
                tagColor: '#5E6AD2',
                industry: 'Aesthetic Clinic · Casablanca',
                headline: 'Phone-only bookings → 3× more appointments',
                before: ['8–12 bookings/week via phone', 'No online capability', '90 min/day on admin'],
                after:  ['35–40 bookings/week online', '60% fewer no-shows', 'ROI in month one'],
                metrics: [{ v: '3×', l: 'bookings' }, { v: '60%', l: 'fewer no-shows' }],
              },
              {
                tag: 'Direct Booking',
                tagColor: '#D97706',
                industry: 'Boutique Riad · Marrakech',
                headline: '82% OTA dependent → 61% direct in 3 months',
                before: ['82% via Booking.com (18% cut)', 'No payment on site', '$3.8k/mo in commissions'],
                after:  ['61% direct bookings', 'Commission overhead: 8%', '$2.8k/mo recovered'],
                metrics: [{ v: '61%', l: 'direct' }, { v: '$2.8k', l: 'saved/mo' }],
              },
              {
                tag: 'Lead Capture',
                tagColor: '#2563EB',
                industry: 'Recruitment Agency · Brussels',
                headline: '0 web leads/month → 12 qualified leads/month',
                before: ['74% bounce rate', '0 leads from site', '5.8s mobile load'],
                after:  ['38% bounce rate', '12 leads/month', '1.4s mobile load'],
                metrics: [{ v: '12×', l: 'more leads' }, { v: '1.4s', l: 'load time' }],
              },
            ].map(cs => (
              <motion.div key={cs.tag} variants={fadeUp}>
                <GlassCard accent={cs.tagColor} intensity={7} className="h-full p-6 flex flex-col gap-5">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{ color: cs.tagColor, background: cs.tagColor + '18', border: `1px solid ${cs.tagColor}50` }}>
                        {cs.tag}
                      </span>
                      <p className="text-xs text-wa-ink-3 mt-2">{cs.industry}</p>
                    </div>
                    <h3 className="font-display font-semibold text-sm text-wa-ink leading-snug">{cs.headline}</h3>

                    {/* Metrics pills */}
                    <div className="flex gap-3">
                      {cs.metrics.map(m => (
                        <div key={m.l} className="flex flex-col items-center px-3 py-2 rounded-xl flex-1"
                          style={{ background: cs.tagColor + '10', border: `1px solid ${cs.tagColor}30` }}>
                          <span className="font-display font-bold text-lg" style={{ color: cs.tagColor }}>{m.v}</span>
                          <span className="text-wa-ink-3 text-[10px]">{m.l}</span>
                        </div>
                      ))}
                    </div>

                    {/* Before / After mini */}
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="rounded-xl p-3 bg-bg" style={{ border: '1px solid #27272A' }}>
                        <p className="text-[10px] font-semibold text-wa-ink-3 mb-2 uppercase tracking-widest">Before</p>
                        <ul className="flex flex-col gap-1.5">
                          {cs.before.map(b => (
                            <li key={b} className="text-[11px] text-wa-ink-3 flex gap-1.5 items-start">
                              <span className="mt-0.5">○</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl p-3" style={{ background: cs.tagColor + '08', border: `1px solid ${cs.tagColor}30` }}>
                        <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: cs.tagColor }}>After</p>
                        <ul className="flex flex-col gap-1.5">
                          {cs.after.map(a => (
                            <li key={a} className="text-[11px] text-wa-ink-2 flex gap-1.5 items-start">
                              <span className="mt-0.5" style={{ color: cs.tagColor }}>✓</span>{a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>

          <Reveal delay={0.3}>
            <div className="flex justify-center mt-10">
              <Link href="/work" className="btn-ghost">Read the full case studies <Arrow /></Link>
            </div>
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

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="testimonials-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <Reveal><SLabel>In Their Words</SLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 id="testimonials-heading"
                className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                What clients actually say
              </h2>
            </Reveal>
          </div>

          {/* Featured quote */}
          <Reveal delay={0.1}>
            <figure className="card-featured mb-5">
              <div className="card-featured-inner flex flex-col md:flex-row gap-8 md:gap-12 items-start p-8">
                <span className="text-6xl font-serif text-wa-violet leading-none shrink-0 opacity-60">"</span>
                <div className="flex flex-col gap-4 flex-1">
                  <blockquote className="text-wa-ink text-lg md:text-xl leading-relaxed italic font-display">
                    We went from 3 phone bookings a week to 20+ online appointments. The site paid for itself in the first month. I had been putting this off for two years.
                  </blockquote>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <figcaption>
                      <p className="font-display font-semibold text-base text-wa-ink">Dr. Amina B.</p>
                      <p className="text-sm text-wa-ink-3">Aesthetic Clinic — Casablanca, Morocco</p>
                    </figcaption>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="font-display font-bold text-2xl text-wa-violet">6×</p>
                        <p className="text-xs text-wa-ink-3">more bookings</p>
                      </div>
                      <div className="text-center">
                        <p className="font-display font-bold text-2xl text-wa-violet">10</p>
                        <p className="text-xs text-wa-ink-3">days to launch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </Reveal>

          {/* Supporting quotes */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                quote: 'International buyers couldn\'t reach us before. Two months after launch, three new export inquiries from France — through a contact form they filled at 10 PM.',
                name: 'Karim E.',
                role: 'Import-Export Director — Tangier',
                tag: 'B2B Catalog',
                stat: '3 new clients',
              },
              {
                quote: 'Fast, precise, professional. They showed me the finished design before I committed to anything. Went live in 10 days. Zero surprises.',
                name: 'Sophie L.',
                role: 'Recruitment Agency — Brussels',
                tag: 'Lead Capture',
                stat: '12 leads/month',
              },
              {
                quote: 'We recovered almost €2,500 a month from Booking.com commissions alone. The site paid for itself before the first month ended.',
                name: 'Youssef M.',
                role: 'Boutique Riad — Marrakech',
                tag: 'Direct Booking',
                stat: '$2.8k saved/mo',
              },
              {
                quote: 'I didn\'t want to deal with agencies. One call, one preview link, one payment. That\'s it. Exactly what I wanted.',
                name: 'Nadia R.',
                role: 'Private Doctor — Rabat',
                tag: 'Booking System',
                stat: '100% remote',
              },
            ].map((t, i) => (
              <motion.div key={t.name} variants={i % 2 === 0 ? fadeUp : slideLeft}>
                <GlassCard accent="#5E6AD2" intensity={5} className="h-full p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-2xl font-serif text-wa-violet leading-none opacity-50">"</span>
                    <span className="text-[11px] font-semibold text-wa-ink-3 border border-wa-border rounded-full px-2.5 py-0.5">{t.tag}</span>
                  </div>
                  <blockquote className="text-wa-ink-2 text-sm leading-relaxed flex-1 italic">{t.quote}</blockquote>
                  <div className="flex items-end justify-between gap-2 pt-1 border-t border-wa-border/50">
                    <figcaption>
                      <p className="font-display font-semibold text-sm text-wa-ink">{t.name}</p>
                      <p className="text-xs text-wa-ink-3">{t.role}</p>
                    </figcaption>
                    <p className="font-display font-bold text-sm text-wa-violet shrink-0">{t.stat}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerReveal>

          <Reveal delay={0.3}>
            <div className="flex justify-center mt-10">
              <Link href="/work" className="btn-ghost">See the full case studies <Arrow /></Link>
            </div>
          </Reveal>
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
