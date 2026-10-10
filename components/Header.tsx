'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Logo } from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { WHATSAPP_NUMBER, buildWaUrl } from '@/lib/whatsapp'

export default function Header() {
  const { t, dir } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const waUrl = buildWaUrl(WHATSAPP_NUMBER, t.wa.defaultMessage)

  const NAV_LINKS = [
    { href: '/#products', label: t.nav.products },
    { href: '/services', label: t.nav.services },
    { href: '/process', label: t.nav.process },
    { href: '/blog', label: t.nav.blog },
    { href: '/insights', label: t.nav.insights },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'header-glass' : ''}`}
    >
      <div className={`section flex items-center justify-between h-16 md:h-[70px] ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>

        <Logo />

        <nav className={`hidden lg:flex items-center gap-1 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-wa-ink-2 hover:text-wa-ink hover:bg-bg-raised transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={`hidden md:flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <LanguageSwitcher />
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            {t.nav.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className={`md:hidden flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <LanguageSwitcher />
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-bg-raised transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={t.common.toggleMenu}
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-wa-ink-2 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-wa-ink-2 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-wa-ink-2 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-wa-border bg-bg-surface/95 backdrop-blur-lg">
          <nav className="section py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium text-wa-ink-2 hover:text-wa-ink hover:bg-bg-raised transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 justify-center"
              onClick={() => setOpen(false)}
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
