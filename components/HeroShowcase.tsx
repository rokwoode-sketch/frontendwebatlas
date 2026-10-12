'use client'

import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import { CLIENT_PROJECTS } from '@/lib/clientProjects'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

const HERO_SITES = [
  'arabian-odyssey',
  'bait-al-joud',
  'vanguard',
  'noor-electric',
  'al-diyafa',
  'lamar-salon',
  'al-safar',
  'express-electrician',
]
  .map((id) => CLIENT_PROJECTS.find((p) => p.id === id)!)
  .filter(Boolean)

/** Slow filmstrip — always LTR track so RTL page dir cannot throw it off-screen */
export default function HeroShowcase() {
  const { lang } = useLanguage()
  const isAr = lang === 'ar'
  const reduce = useReducedMotion()
  const strip = [...HERO_SITES, ...HERO_SITES]

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a1614]" aria-hidden="true">
      {/* dir=ltr: keep filmstrip geometry stable regardless of page RTL */}
      <div dir="ltr" className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 flex h-full ${reduce ? '' : 'hero-passby'}`}>
          {strip.map((slide, i) => (
            <div
              key={`${slide.id}-${i}`}
              className="relative h-full shrink-0 border-r border-white/10"
              style={{ width: 'clamp(300px, 56vw, 760px)' }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i < 2}
                className="object-cover object-top brightness-[0.78] contrast-[1.04] saturate-[1.1]"
                sizes="56vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 hero-wow-veil pointer-events-none" />

      <div className="absolute bottom-3 inset-x-0 z-[5] pointer-events-none">
        <div className="section">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.16em] uppercase text-white/55">
            {isAr ? 'مواقع عملاء · تمرّ تلقائياً' : 'Client sites · auto pass-by'}
          </p>
        </div>
      </div>
    </div>
  )
}
