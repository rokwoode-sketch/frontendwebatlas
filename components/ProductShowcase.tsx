'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, fadeUp } from '@/components/Animated'
import { GlassCard } from '@/components/GlassCard'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import {
  BookingMockup, LeadMockup, CatalogMockup, ReservationMockup, BeforeSiteMockup,
} from '@/components/ProductMockups'

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

type ProductShowcaseProps = { compact?: boolean; showHeader?: boolean }

export default function ProductShowcase({ compact = false, showHeader = true }: ProductShowcaseProps) {
  const { t } = useLanguage()
  const ps = t.productShowcase
  const c = t.common
  const [active, setActive] = useState(0)
  const [showBefore, setShowBefore] = useState(false)
  const product = ps.products[active]
  const Mockup = { booking: BookingMockup, leadgen: LeadMockup, catalog: CatalogMockup, reservation: ReservationMockup }[product.id as 'booking' | 'leadgen' | 'catalog' | 'reservation']

  return (
    <section className={`relative overflow-hidden depth-section perspective-scene ${compact ? 'py-0' : 'py-24'}`} id="products" aria-labelledby="products-heading">
      <div className="section relative z-10">
        {showHeader && (
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <Reveal><span className="label-pill"><span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />{ps.label}</span></Reveal>
            <Reveal delay={0.1}>
              <h2 id="products-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                {ps.title} <span className="text-gradient">{ps.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}><p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{ps.body}</p></Reveal>
          </div>
        )}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {ps.products.map((p, i) => (
              <button key={p.id} type="button" onClick={() => { setActive(i); setShowBefore(false) }}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: i === active ? p.id === 'booking' ? '#5E6AD222' : '#2563EB22' : 'rgba(255,255,255,0.04)',
                  border: i === active ? '1px solid rgba(94,106,210,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  color: i === active ? '#FAFAFA' : '#71717A',
                }}>
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className={`grid grid-cols-1 ${compact ? '' : 'lg:grid-cols-2'} gap-8 items-center`}>
          {!compact && (
            <Reveal variants={fadeUp} className="flex flex-col gap-5 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div key={product.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex flex-col gap-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-wa-violet-l">{product.industry}</span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight text-wa-ink">{product.headline}</h3>
                  <p className="text-wa-ink-2 text-base leading-relaxed">{product.body}</p>
                  <GlassCard accent="#5E6AD2" intensity={6} className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] text-wa-ink-3 uppercase tracking-widest mb-1">{ps.typicalResult}</p>
                        <p className="font-display font-bold text-xl text-wa-violet">{product.metric}</p>
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
          <Reveal variants={fadeUp} className={`order-1 ${compact ? '' : 'lg:order-2'}`}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <button type="button" onClick={() => setShowBefore(false)} className="px-3 py-1.5 rounded-full text-[11px] font-semibold">{c.afterBuild}</button>
                <button type="button" onClick={() => setShowBefore(true)} className="px-3 py-1.5 rounded-full text-[11px] font-semibold">{c.beforeTypical}</button>
              </div>
              <GlassCard accent="#5E6AD2" intensity={14} glow className="p-1">
                <BrowserChrome accent="#5E6AD2">
                  <div style={{ minHeight: compact ? 280 : 320 }}>
                    {showBefore ? <BeforeSiteMockup /> : Mockup && <Mockup accent="#5E6AD2" />}
                  </div>
                </BrowserChrome>
              </GlassCard>
              {!compact && <p className="text-center text-[11px] text-wa-ink-3">{c.interactivePreview}</p>}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
