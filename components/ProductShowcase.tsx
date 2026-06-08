'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, fadeUp } from '@/components/Animated'
import { GlassCard } from '@/components/GlassCard'
import {
  BookingMockup, LeadMockup, CatalogMockup, ReservationMockup, BeforeSiteMockup,
} from '@/components/ProductMockups'

const PRODUCTS = [
  {
    id: 'booking',
    label: 'Booking Engine',
    accent: '#5E6AD2',
    headline: 'Patients book at midnight. Your site finally can too.',
    body: 'Real-time calendar, SMS confirmation, admin dashboard. No phone tag. No missed slots.',
    metric: '3× more bookings',
    industry: 'Clinics · Law firms · Consultants',
    Mockup: BookingMockup,
    before: 'Phone-only scheduling, 90 min/day on admin',
    after: '35–40 online bookings/week, 60% fewer no-shows',
  },
  {
    id: 'leadgen',
    label: 'Lead Capture',
    accent: '#2563EB',
    headline: 'Turn visitors into qualified leads — automatically.',
    body: 'Multi-step forms, instant follow-up emails, CRM-ready exports. Built to convert, not decorate.',
    metric: '12 leads/month',
    industry: 'Real estate · Contractors · Advisors',
    Mockup: LeadMockup,
    before: '0 web leads, 74% bounce rate',
    after: '12 qualified leads/month from organic traffic',
  },
  {
    id: 'catalog',
    label: 'B2B Catalog',
    accent: '#059669',
    headline: 'A PDF on WhatsApp is not a catalog.',
    body: 'Searchable products, RFQ forms, multilingual support. International buyers browse and quote at 10 PM.',
    metric: '3 export clients',
    industry: 'Manufacturers · Export · Wholesale',
    Mockup: CatalogMockup,
    before: '47-page PDF, invisible to Google',
    after: '3 new export clients in 60 days',
  },
  {
    id: 'reservation',
    label: 'Direct Booking',
    accent: '#D97706',
    headline: 'Stop giving Booking.com 18% of every reservation.',
    body: 'Real-time availability, Stripe payment, confirmation emails. Guests book on your site, not an OTA.',
    metric: '$2.8k saved/mo',
    industry: 'Riads · Restaurants · Tour operators',
    Mockup: ReservationMockup,
    before: '82% OTA-dependent, $3.8k/mo in fees',
    after: '61% direct bookings, commission at 8%',
  },
] as const

function BrowserChrome({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="browser-frame">
      <div className="browser-chrome">
        <div className="flex gap-1.5">
          <span className="browser-dot" style={{ background: '#FF5F57' }} />
          <span className="browser-dot" style={{ background: '#FEBC2E' }} />
          <span className="browser-dot" style={{ background: '#28C840' }} />
        </div>
        <div className="browser-url">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          webatlas.xyz/preview
        </div>
      </div>
      <div className="browser-body">{children}</div>
    </div>
  )
}

type ProductShowcaseProps = {
  compact?: boolean
  showHeader?: boolean
}

export default function ProductShowcase({ compact = false, showHeader = true }: ProductShowcaseProps) {
  const [active, setActive] = useState(0)
  const [showBefore, setShowBefore] = useState(false)
  const product = PRODUCTS[active]
  const Mockup = product.Mockup

  return (
    <section
      className={`relative overflow-hidden depth-section perspective-scene ${compact ? 'py-0' : 'py-24'}`}
      id="products"
      aria-labelledby="products-heading"
    >
      {/* Ambient orbs */}
      <div aria-hidden="true" className="ambient-orb ambient-orb-violet" style={{ top: '10%', left: '-5%' }} />
      <div aria-hidden="true" className="ambient-orb ambient-orb-gold" style={{ bottom: '5%', right: '-8%' }} />

      <div className="section relative z-10">
        {showHeader && (
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <Reveal><span className="label-pill"><span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />See what you get</span></Reveal>
            <Reveal delay={0.1}>
              <h2 id="products-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                The product, <span className="text-gradient">not a pitch deck</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
                Every WebAtlas site is a working business tool. Click through what we actually build — booking engines, lead systems, catalogs, and direct reservations.
              </p>
            </Reveal>
          </div>
        )}

        {/* Product tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => { setActive(i); setShowBefore(false) }}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: i === active ? p.accent + '22' : 'rgba(255,255,255,0.04)',
                  border: i === active ? `1px solid ${p.accent}66` : '1px solid rgba(255,255,255,0.08)',
                  color: i === active ? '#FAFAFA' : '#71717A',
                  boxShadow: i === active ? `0 4px 20px ${p.accent}33` : 'none',
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={`grid grid-cols-1 ${compact ? '' : 'lg:grid-cols-2'} gap-8 items-center`}>
          {/* Copy side */}
          {!compact && (
            <Reveal variants={fadeUp} className="flex flex-col gap-5 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: product.accent }}>
                    {product.industry}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight text-wa-ink">
                    {product.headline}
                  </h3>
                  <p className="text-wa-ink-2 text-base leading-relaxed">{product.body}</p>

                  <GlassCard accent={product.accent} intensity={6} className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] text-wa-ink-3 uppercase tracking-widest mb-1">Typical result</p>
                        <p className="font-display font-bold text-xl" style={{ color: product.accent }}>{product.metric}</p>
                      </div>
                      <div className="text-right text-[11px] text-wa-ink-3">
                        <p className="text-red-400/70 line-through">{product.before}</p>
                        <p className="text-emerald-400/90 mt-1">{product.after}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </Reveal>
          )}

          {/* Product preview */}
          <Reveal variants={fadeUp} className={`order-1 ${compact ? '' : 'lg:order-2'}`}>
            <div className="flex flex-col gap-3">
              {/* Before / After toggle */}
              <div className="flex items-center justify-center gap-2">
                <button type="button" onClick={() => setShowBefore(false)}
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
                  style={{
                    background: !showBefore ? product.accent + '28' : 'transparent',
                    color: !showBefore ? '#FAFAFA' : '#71717A',
                    border: !showBefore ? `1px solid ${product.accent}55` : '1px solid transparent',
                  }}>
                  After — WebAtlas build
                </button>
                <button type="button" onClick={() => setShowBefore(true)}
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
                  style={{
                    background: showBefore ? 'rgba(255,255,255,0.08)' : 'transparent',
                    color: showBefore ? '#A1A1AA' : '#52525B',
                    border: showBefore ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
                  }}>
                  Before — typical site
                </button>
              </div>

              <GlassCard accent={product.accent} intensity={14} glow className="p-1 preserve-3d" style={{ transform: 'rotateX(4deg) rotateY(-2deg)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${product.id}-${showBefore}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BrowserChrome accent={product.accent}>
                      <div style={{ minHeight: compact ? 280 : 320 }}>
                        {showBefore ? <BeforeSiteMockup /> : <Mockup accent={product.accent} />}
                      </div>
                    </BrowserChrome>
                  </motion.div>
                </AnimatePresence>
              </GlassCard>

              {!compact && (
                <p className="text-center text-[11px] text-wa-ink-3">
                  Interactive preview · This is what your clients will use — not a mockup PDF
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
