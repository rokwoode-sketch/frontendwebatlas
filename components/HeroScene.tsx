'use client'

/** Futuristic hero backdrop — perspective grid and ambient orbs only */
export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-grid-floor" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
    </div>
  )
}
