'use client'

import { motion } from 'framer-motion'
import { BookingMockup } from '@/components/ProductMockups'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

/** Futuristic 3D hero backdrop — perspective grid + floating product panel */
export default function HeroScene() {
  const { t } = useLanguage()

  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-grid-floor" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <motion.div
        className="hero-float-panel"
        initial={{ opacity: 0, y: 40, rotateX: 18, rotateY: -14 }}
        animate={{
          opacity: 1,
          y: [0, -12, 0],
          rotateX: [14, 10, 14],
          rotateY: [-12, -8, -12],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          rotateY: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="hero-float-panel-edge" />
        <div className="hero-float-chrome">
          <span className="hero-float-dot" style={{ background: '#FF5F57' }} />
          <span className="hero-float-dot" style={{ background: '#FEBC2E' }} />
          <span className="hero-float-dot" style={{ background: '#28C840' }} />
          <span className="hero-float-url">{t.mockups.heroFloatUrl}</span>
        </div>
        <div className="hero-float-body">
          <BookingMockup accent="#5E6AD2" />
        </div>
        <div className="hero-float-shadow" />
      </motion.div>
    </div>
  )
}
