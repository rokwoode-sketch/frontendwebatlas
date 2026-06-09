'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SKILLS = ['UI Design', 'Motion', 'Next.js', 'Conversion', 'SEO'] as const

function BrowserChrome() {
  return (
    <span className="hero-hud-chrome" aria-hidden="true">
      <span className="hero-hud-dots">
        <span className="hero-hud-dot hero-hud-dot-r" />
        <span className="hero-hud-dot hero-hud-dot-y" />
        <span className="hero-hud-dot hero-hud-dot-g" />
      </span>
      <span className="hero-hud-url">
        <span className="hero-hud-url-lock">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect x="1.5" y="3.5" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
            <path d="M2.5 3.5V2.5a1.5 1.5 0 013 0v1" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </span>
        <span className="hero-hud-url-text">webatlas.studio</span>
        <span className="hero-hud-cursor" />
      </span>
    </span>
  )
}

function GridCrosshair() {
  return (
    <span className="hero-hud-grid-icon" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="0.5" y="0.5" width="27" height="27" rx="4" stroke="rgba(94,106,210,0.35)" />
        <line x1="14" y1="4" x2="14" y2="24" stroke="rgba(94,106,210,0.2)" strokeWidth="0.5" />
        <line x1="4" y1="14" x2="24" y2="14" stroke="rgba(94,106,210,0.2)" strokeWidth="0.5" />
        <line x1="4" y1="9" x2="24" y2="9" stroke="rgba(94,106,210,0.12)" strokeWidth="0.5" />
        <line x1="4" y1="19" x2="24" y2="19" stroke="rgba(94,106,210,0.12)" strokeWidth="0.5" />
        <circle cx="14" cy="14" r="2.5" fill="rgba(56,189,248,0.25)" stroke="#38BDF8" strokeWidth="0.8" />
        <path d="M14 6v3M14 19v3M6 14h3M19 14h3" stroke="#A5B4FC" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    </span>
  )
}

/** Designer studio HUD — identity strip above hero headline */
export default function HeroBadge() {
  const [skillIdx, setSkillIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSkillIdx((i) => (i + 1) % SKILLS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="hero-hud"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Web design studio based in Casablanca, Morocco"
    >
      <span className="hero-hud-scan" aria-hidden="true" />

      <span className="hero-hud-block hero-hud-browser">
        <BrowserChrome />
      </span>

      <span className="hero-hud-rule" aria-hidden="true" />

      <span className="hero-hud-block hero-hud-identity">
        <span className="hero-hud-eyebrow">DIGITAL CRAFT STUDIO</span>
        <span className="hero-hud-title">
          <span className="hero-hud-title-gradient">Interface</span>
          <span className="hero-hud-title-plain"> Designer</span>
        </span>
        <span className="hero-hud-skill-track" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={SKILLS[skillIdx]}
              className="hero-hud-skill"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
            >
              {SKILLS[skillIdx]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>

      <span className="hero-hud-rule" aria-hidden="true" />

      <span className="hero-hud-block hero-hud-meta">
        <GridCrosshair />
        <span className="hero-hud-meta-text">
          <span className="hero-hud-city">CASABLANCA</span>
          <span className="hero-hud-coords">33.57°N · GMT+1</span>
        </span>
      </span>
    </motion.div>
  )
}
