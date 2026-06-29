'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, fadeUp } from '@/components/Animated'
import { GlassCard } from '@/components/GlassCard'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

type ProductShowcaseProps = { showHeader?: boolean }

export default function ProductShowcase({ showHeader = true }: ProductShowcaseProps) {
  const { t } = useLanguage()
  const ps = t.productShowcase
  const [active, setActive] = useState(0)
  const product = ps.products[active]

  return (
    <section className="relative overflow-hidden py-24" id="products" aria-labelledby="products-heading">
      <div className="section relative z-10">
        {showHeader && (
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <Reveal>
              <span className="label-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
                {ps.label}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="products-heading" className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight">
                {ps.title} <span className="text-gradient">{ps.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">{ps.body}</p>
            </Reveal>
          </div>
        )}

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label={ps.label}>
            {ps.products.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: i === active ? 'rgba(94,106,210,0.14)' : 'rgba(255,255,255,0.04)',
                  border: i === active ? '1px solid rgba(94,106,210,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  color: i === active ? '#FAFAFA' : '#71717A',
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal variants={fadeUp}>
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="max-w-3xl mx-auto"
            >
              <GlassCard accent="#5E6AD2" intensity={8} className="p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-wa-violet-l">
                  {product.industry}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight text-wa-ink mt-4">
                  {product.headline}
                </h3>
                <p className="text-wa-ink-2 text-base leading-relaxed mt-4">{product.body}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 pt-8 border-t border-wa-border/60">
                  <div>
                    <p className="text-[10px] text-wa-ink-3 uppercase tracking-widest mb-1">{ps.typicalResult}</p>
                    <p className="font-display font-bold text-xl text-wa-violet">{product.metric}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-wa-ink-3 uppercase tracking-widest mb-1">{t.common.beforeTypical}</p>
                    <p className="text-sm text-wa-ink-3 leading-relaxed">{product.before}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-wa-ink-3 uppercase tracking-widest mb-1">{t.common.afterBuild}</p>
                    <p className="text-sm text-wa-ink-2 leading-relaxed">{product.after}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
