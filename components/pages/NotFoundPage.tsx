'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { BlogPostMeta } from '@/components/PageMeta'

export default function NotFoundPage() {
  const { t } = useLanguage()
  const nf = t.notFound

  return (
    <>
      <BlogPostMeta title={nf.title} description={nf.body} />
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-5 text-center">
        <p className="label-pill">404</p>
        <h1 className="font-display font-bold text-3xl text-wa-ink tracking-tight">
          {nf.title}
        </h1>
        <p className="text-wa-ink-2 text-sm max-w-md">{nf.body}</p>
        <div className="flex gap-3">
          <Link href="/" className="btn-primary">{nf.goHome}</Link>
          <Link href="/contact" className="btn-ghost">{nf.contact}</Link>
        </div>
      </div>
    </>
  )
}
