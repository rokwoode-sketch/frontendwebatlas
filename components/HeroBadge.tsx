'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

function BrowserChrome() {
  return (
    <span className="hero-hud-chrome" aria-hidden="true">
      <span className="hero-hud-dots">
        <span className="hero-hud-dot hero-hud-dot-r" />
        <span className="hero-hud-dot hero-hud-dot-y" />
        <span className="hero-hud-dot hero-hud-dot-g" />
      </span>
      <span className="hero-hud-url">
        <span className="hero-hud-url-text">webatlas.studio</span>
      </span>
    </span>
  )
}

export default function HeroBadge() {
  const { t } = useLanguage()
  const hb = t.heroBadge
  const [skillIdx, setSkillIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSkillIdx((i) => (i + 1) % hb.skills.length), 2800)
    return () => clearInterval(id)
  }, [hb.skills.length])

  return (
    <motion.div className="hero-hud" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} aria-label={hb.ariaLabel}>
      <span className="hero-hud-block hero-hud-browser"><BrowserChrome /></span>
      <span className="hero-hud-rule" aria-hidden="true" />
      <span className="hero-hud-block hero-hud-identity">
        <span className="hero-hud-eyebrow">{hb.eyebrow}</span>
        <span className="hero-hud-title">
          <span className="hero-hud-title-gradient">{hb.titleGradient}</span>
          <span className="hero-hud-title-plain">{hb.titlePlain}</span>
        </span>
        <span className="hero-hud-skill-track" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span key={hb.skills[skillIdx]} className="hero-hud-skill" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              {hb.skills[skillIdx]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
      <span className="hero-hud-rule" aria-hidden="true" />
      <span className="hero-hud-block hero-hud-meta">
        <span className="hero-hud-meta-text">
          <span className="hero-hud-city">{hb.city}</span>
          <span className="hero-hud-coords">{hb.coords}</span>
        </span>
      </span>
    </motion.div>
  )
}
