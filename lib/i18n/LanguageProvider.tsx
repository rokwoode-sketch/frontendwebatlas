'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { Dictionary, Locale } from './types'
import { getDictionary, loadDictionary, LOCALES } from './index'

const STORAGE_KEY = 'wa_lang'

type LanguageContextValue = {
  lang: Locale
  t: Dictionary
  dir: 'ltr' | 'rtl'
  changeLanguage: (code: Locale) => void
  languages: Locale[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved && LOCALES.includes(saved)) return saved
  const browser = navigator.language?.slice(0, 2).toLowerCase()
  if (browser === 'fr' || browser === 'ar') return browser
  return 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Locale>('en')
  const [t, setT] = useState<Dictionary>(getDictionary('en'))
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const initial = detectInitialLang()
    setLang(initial)
    setT(getDictionary(initial))
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    let cancelled = false
    loadDictionary(lang).then((dict) => {
      if (!cancelled) setT(dict)
    })
    return () => { cancelled = true }
  }, [lang, ready])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = t.lang
    document.documentElement.dir = t.dir
    document.body.classList.toggle('rtl', t.dir === 'rtl')
    document.title = t.meta.siteTitle
  }, [lang, t, ready])

  const changeLanguage = useCallback((code: Locale) => {
    if (LOCALES.includes(code)) setLang(code)
  }, [])

  const value = useMemo(
    () => ({ lang, t, dir: t.dir, changeLanguage, languages: LOCALES }),
    [lang, t, changeLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
