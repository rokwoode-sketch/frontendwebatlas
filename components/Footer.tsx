import Link from 'next/link'
import { Logo } from './Logo'

const LINKS = {
  Services: [
    { href: '/services#custom',    label: 'Custom Builds'    },
    { href: '/services#booking',   label: 'Booking Engines'  },
    { href: '/services#leadgen',   label: 'Lead Machines'    },
    { href: '/services#portal',    label: 'Client Portals'   },
    { href: '/services#catalog',   label: 'B2B Catalogs'     },
    { href: '/services#multilang', label: 'Multilingual Sites'},
    { href: '/services#ai',        label: 'AI Solutions'     },
  ],
  Company: [
    { href: '/about',   label: 'About Us'   },
    { href: '/contact', label: 'Contact'    },
    { href: '/#process',label: 'Our Process'},
    { href: '/#faq',    label: 'FAQ'        },
  ],
  Markets: [
    { href: '/services', label: 'Morocco'             },
    { href: '/services', label: 'France & Francophone'},
    { href: '/services', label: 'United Kingdom'      },
    { href: '/services', label: 'Gulf (GCC)'          },
    { href: '/services', label: 'Global'              },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-wa-border mt-32">
      <div className="section py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Logo />
            <p className="text-wa-ink-2 text-sm leading-relaxed max-w-xs">
              AI-powered web agency. We build websites that work as business tools — 
              booking engines, lead machines, client portals — delivered in 14 days, 
              100% online.
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <a
                href="mailto:hello@webatlas.xyz"
                className="text-wa-ink-2 hover:text-wa-violet-l transition-colors"
              >
                hello@webatlas.xyz
              </a>
              <span className="text-wa-ink-3">Casablanca, Morocco · Global</span>
            </div>
          </div>

          {/* Link columns */}
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

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-wa-border-s flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-wa-ink-3 text-xs">
            © {year} WebAtlas. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-wa-ink-3">
            <span>webatlas.xyz</span>
            <span aria-hidden="true">·</span>
            <span>EN · FR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
