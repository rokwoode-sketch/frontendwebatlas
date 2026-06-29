'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import type { PageMeta as PageMetaType } from '@/lib/i18n/types'

type Props = {
  page: keyof typeof pageKeyMap
}

const pageKeyMap = {
  home: 'home',
  about: 'about',
  services: 'services',
  process: 'process',
  contact: 'contact',
  insights: 'insights',
  blog: 'blog',
} as const

function setMeta(meta: PageMetaType) {
  document.title = meta.title
  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.setAttribute('name', 'description')
    document.head.appendChild(desc)
  }
  desc.setAttribute('content', meta.description)
}

export default function PageMeta({ page }: Props) {
  const { t } = useLanguage()

  useEffect(() => {
    const meta = t.meta[page]
    if (meta) setMeta(meta)
  }, [t, page])

  return null
}

export function BlogPostMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    setMeta({ title: `${title} | WebAtlas`, description })
  }, [title, description])

  return null
}
