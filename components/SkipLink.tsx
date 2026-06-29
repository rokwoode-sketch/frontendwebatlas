'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function SkipLink() {
  const { t } = useLanguage()

  return (
    <a href="#main-content" className="skip-link sr-only">
      {t.common.skipToMain}
    </a>
  )
}
