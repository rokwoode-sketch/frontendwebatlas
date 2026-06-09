'use client'

import { motion } from 'framer-motion'

/** Premium tech identity strip — replaces generic label pill in hero */
export default function HeroBadge() {
  return (
    <motion.div
      className="hero-badge"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Web studio based in Casablanca, Morocco"
    >
      <span className="hero-badge-glow" aria-hidden="true" />

      <span className="hero-badge-segment hero-badge-status">
        <span className="hero-badge-pulse" aria-hidden="true" />
        <span className="hero-badge-status-text">LIVE</span>
      </span>

      <span className="hero-badge-divider" aria-hidden="true" />

      <span className="hero-badge-segment hero-badge-core">
        <span className="hero-badge-kicker">FUNCTIONAL</span>
        <span className="hero-badge-main">WEB STUDIO</span>
      </span>

      <span className="hero-badge-divider" aria-hidden="true" />

      <span className="hero-badge-segment hero-badge-loc">
        <span className="hero-badge-city">CASABLANCA</span>
        <span className="hero-badge-meta">33.5731°N · GMT+1</span>
      </span>
    </motion.div>
  )
}
