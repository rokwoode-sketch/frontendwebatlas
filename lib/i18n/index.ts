import type { Dictionary, Locale } from './types'
import en from './en'
import fr from './fr'
import ar from './ar'

export type { Dictionary, Locale }

export const LOCALES: Locale[] = ['ar', 'en', 'fr']

export const LOCALE_LABELS: Record<Locale, { label: string; flag: string }> = {
  ar: { label: 'AR', flag: '🇦🇪' },
  en: { label: 'EN', flag: '🇬🇧' },
  fr: { label: 'FR', flag: '🇫🇷' },
}

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en
}

export async function loadDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case 'fr':
      return (await import('./fr')).default
    case 'ar':
      return (await import('./ar')).default
    default:
      return (await import('./en')).default
  }
}
