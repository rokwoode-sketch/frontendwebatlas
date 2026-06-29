'use client'

import { useRef, useState } from 'react'
import { LOCALE_LABELS } from '@/lib/i18n'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function LanguageSwitcher() {
  const { lang, changeLanguage, dir } = useLanguage()
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 250)
  }

  const current = LOCALE_LABELS[lang]
  const isRTL = dir === 'rtl'

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold text-wa-ink-2 hover:text-wa-ink transition-all border border-wa-border hover:border-wa-violet/40 bg-bg-raised/80 backdrop-blur-sm"
        aria-label={`Language: ${current.label}`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-base leading-none" aria-hidden="true">{current.flag}</span>
        <span className="tracking-wide">{current.label}</span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          className={`opacity-70 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute top-full pt-2 z-50 ${isRTL ? 'left-0' : 'right-0'}`}
          role="listbox"
          aria-label="Select language"
        >
          <div className="min-w-[140px] rounded-xl border border-wa-border bg-bg-surface/95 backdrop-blur-xl shadow-3d-md py-1.5 overflow-hidden">
            {(Object.entries(LOCALE_LABELS) as [keyof typeof LOCALE_LABELS, typeof current][]).map(
              ([code, opt]) => (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={code === lang}
                  onClick={() => { changeLanguage(code); setOpen(false) }}
                  className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm transition-colors ${
                    code === lang
                      ? 'bg-wa-violet-m text-wa-violet-l font-semibold'
                      : 'text-wa-ink-2 hover:bg-bg-raised hover:text-wa-ink'
                  }`}
                >
                  <span className="text-base leading-none" aria-hidden="true">{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  )
}
