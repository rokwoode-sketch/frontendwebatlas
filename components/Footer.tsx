'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const LINKS = {
    [t.footer.services]: [
      { href: '/services#custom', label: t.footer.links.custom },
      { href: '/services#booking', label: t.footer.links.booking },
      { href: '/services#leadgen', label: t.footer.links.leadgen },
      { href: '/services#portal', label: t.footer.links.portal },
      { href: '/services#catalog', label: t.footer.links.catalog },
      { href: '/services#multilang', label: t.footer.links.multilang },
      { href: '/services#ai', label: t.footer.links.ai },
    ],
    [t.footer.company]: [
      { href: '/about', label: t.footer.links.about },
      { href: '/contact', label: t.footer.links.contact },
      { href: '/process', label: t.footer.links.process },
      { href: '/blog', label: t.footer.links.blog },
      { href: '/insights', label: t.footer.links.insights },
      { href: '/#faq', label: t.footer.links.faq },
    ],
    [t.footer.markets]: [
      { href: '/services', label: t.footer.links.morocco },
      { href: '/services', label: t.footer.links.france },
      { href: '/services', label: t.footer.links.uk },
      { href: '/services', label: t.footer.links.gulf },
      { href: '/services', label: t.footer.links.global },
    ],
  }

  return (
    <footer className="border-t border-wa-border mt-32 section-mesh-dark">
      <div className="section py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          <div className="md:col-span-2 flex flex-col gap-5">
            <Logo />
            <p className="text-wa-ink-2 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <a
                href="mailto:hello@webatlas.xyz"
                className="text-wa-ink-2 hover:text-wa-violet-l transition-colors"
              >
                hello@webatlas.xyz
              </a>
              <span className="text-wa-ink-3 text-xs">{t.footer.location}</span>
            </div>
          </div>

          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <p className="text-xs font-semibold font-display uppercase tracking-widest text-wa-ink-3">
                {section}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-wa-ink-2 hover:text-wa-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-wa-border-s flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-wa-ink-3 text-xs">
            © {year} WebAtlas. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-xs text-wa-ink-3">
            <span>webatlas.xyz</span>
            <span aria-hidden="true">·</span>
            <span>EN · FR · AR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
