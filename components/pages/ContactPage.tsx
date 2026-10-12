'use client'

import Link from 'next/link'
import { buildWaUrl, WHATSAPP_NUMBER } from '@/lib/whatsapp'
import PageMeta from '@/components/PageMeta'
import { SITE } from '@/lib/seo'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContactPageClient() {
  const { t } = useLanguage()
  const c = t.contact
  const mainWaUrl = buildWaUrl(WHATSAPP_NUMBER, c.defaultMessage)

  return (
    <>
      <PageMeta page="contact" />
      <section className="pt-36 pb-16 grid-bg relative overflow-hidden" aria-label="Contact hero">
        <div className="section relative z-10 text-center flex flex-col items-center gap-5">
          <SectionLabel>{c.label}</SectionLabel>
          <h1 className="font-display font-bold tracking-tight text-wa-ink" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {c.title} <span className="text-gradient">{c.titleAccent}</span>
          </h1>
          <p className="text-wa-ink-2 text-base max-w-md leading-relaxed">{c.heroBody}</p>
        </div>
      </section>

      <section className="py-16 pb-32" aria-label="WhatsApp contact and info">
        <div className="section grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="card flex flex-col gap-5">
              <h2 className="font-display font-bold text-xl text-wa-ink">{c.waTitle}</h2>
              <p className="text-wa-ink-2 text-sm leading-relaxed">{c.waBody}</p>
              <a href={mainWaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center py-4 gap-2">
                <WhatsAppIcon size={20} />
                {c.waCta}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">{c.projectTypesLabel}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.projectTypes.map((item) => (
                  <a
                    key={item.label}
                    href={buildWaUrl(WHATSAPP_NUMBER, item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} — WhatsApp`}
                    className="card flex items-center justify-between gap-3 py-4 px-5 hover:border-wa-violet transition-colors group"
                  >
                    <span className="text-sm text-wa-ink-2 group-hover:text-wa-ink transition-colors">{item.label}</span>
                    <WhatsAppIcon />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-wa-ink-3 text-xs text-center">{c.footnote}</p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="card flex flex-col gap-4">
              <h3 className="font-display font-semibold text-sm text-wa-ink">{c.nextTitle}</h3>
              <div className="flex flex-col gap-3">
                {c.nextSteps.map((item) => (
                  <div key={item.step} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-wa-violet-m border border-wa-violet text-wa-violet-l text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                    <p className="text-wa-ink-2 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card flex flex-col gap-3">
              <h3 className="font-display font-semibold text-sm text-wa-ink">{c.directTitle}</h3>
              <a href={mainWaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-wa-ink-2 hover:text-wa-violet-l transition-colors">
                <WhatsAppIcon size={14} />
                WhatsApp: {WHATSAPP_NUMBER}
              </a>
              {/* Plain text — no mailto (Cloudflare email-protection creates /cdn-cgi/ 404s) */}
              <span className="text-sm text-wa-ink-2 select-all">{SITE.email}</span>
              <p className="text-wa-ink-3 text-xs">{t.footer.location}</p>
              <p className="text-wa-ink-3 text-xs">{c.hours}</p>
            </div>
            <div className="rounded-xl border border-wa-border-s p-5" style={{ background: 'rgba(124,58,237,0.05)' }}>
              <p className="text-wa-violet-l text-sm font-display font-semibold mb-2">{c.auditTitle}</p>
              <p className="text-wa-ink-2 text-xs leading-relaxed">{c.auditBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
