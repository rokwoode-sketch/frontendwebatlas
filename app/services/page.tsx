import Link from 'next/link'
import type { Metadata } from 'next'
import { ServicesPageJsonLd } from '@/components/JsonLd'
import { SERVICE_FAQS, SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services — Booking Engines, Lead Sites & Client Portals',
  description:
    'WebAtlas builds booking engines ($1,200+), lead capture sites ($800+), client portals ($1,500+), B2B catalogs, direct reservation systems, and multilingual sites. Delivered in 10 days from Casablanca, serving Morocco, France, and globally.',
  alternates: { canonical: `${SITE.url}/services` },
  keywords: [
    'booking engine website', 'lead capture website', 'client portal development',
    'B2B product catalog', 'direct reservation system', 'multilingual website',
    'agence web Casablanca services',
  ],
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

const SERVICES_DETAIL = [
  {
    id: 'booking',
    label: 'Booking Engine',
    headline: 'Turn your site into a 24/7 appointment desk',
    body: 'Every hour your site can\'t book an appointment is a lead that called a competitor. We build calendar-based appointment systems that integrate directly into your website — no third-party app subscriptions, no friction for the client.',
    includes: [
      'Calendar widget with real-time availability',
      'Confirmation emails and SMS reminders',
      'Staff/resource management',
      'Buffer time and working-hours configuration',
      'Admin dashboard to manage bookings',
    ],
    for: 'Dental & aesthetic clinics · Law firms · Private doctors · Consultants · Beauty studios',
    price: '$1,200–$2,200',
  },
  {
    id: 'leadgen',
    label: 'Lead Machine',
    headline: 'Your best salesperson — it never sleeps',
    body: 'A lead-capture site is purpose-built to do one thing: get a qualified prospect to raise their hand. Every section, every CTA, every form field is optimised to convert visitors into contacts you can follow up with.',
    includes: [
      'Conversion-optimised landing page structure',
      'Multi-step qualification form',
      'Automated thank-you and follow-up email',
      'CRM integration or CSV export',
      'Google Analytics + conversion tracking',
    ],
    for: 'Real estate agencies · Insurance brokers · Contractors · Financial advisors · Relocation services',
    price: '$800–$1,400',
  },
  {
    id: 'portal',
    label: 'Client Portal',
    headline: 'Stop emailing documents. Build a hub.',
    body: 'For professional service firms, a client portal isn\'t a luxury — it\'s a competitive differentiator. Clients log in to see their documents, project status, invoices, and messages. You stop losing hours to email admin.',
    includes: [
      'Secure client login with role-based access',
      'Document upload and download',
      'Project status tracker',
      'Messaging thread (optional)',
      'White-labelled to your brand',
    ],
    for: 'Accounting firms · Law firms · IT agencies · Consultancies · HR providers',
    price: '$1,500–$2,800',
  },
  {
    id: 'catalog',
    label: 'B2B Catalog + RFQ',
    headline: 'A PDF sent by WhatsApp is not a catalog',
    body: 'International buyers expect to browse your products, filter by spec, and submit a request for quote without a salesperson in the loop. A proper B2B catalog opens you to markets you can\'t reach with a brochure site.',
    includes: [
      'Searchable, filterable product catalog',
      'Product detail pages with specifications',
      'Request-for-quote (RFQ) form',
      'Multilingual support (FR, EN, AR)',
      'PDF download per product (optional)',
    ],
    for: 'Wholesalers · Manufacturers · Import-export companies · Distributors · Industrial suppliers',
    price: '$1,100–$2,000',
  },
  {
    id: 'reservation',
    label: 'Reservation System',
    headline: 'Direct bookings. No commission cut.',
    body: 'If someone has to call to reserve a table or a riad, half of them won\'t. And if they book through Booking.com or Airbnb, you lose 15–20% of every reservation. We build direct booking flows that bypass the middleman entirely.',
    includes: [
      'Real-time availability calendar',
      'Direct payment (Stripe / PayPal)',
      'Booking confirmation and reminders',
      'Owner-facing management dashboard',
      'Integration with your existing calendar (optional)',
    ],
    for: 'Riads & boutique hotels · Restaurants · Tour operators · Activity providers · Event venues',
    price: '$900–$1,800',
  },
  {
    id: 'multilang',
    label: 'Multilingual Trust Site',
    headline: 'A site in one language cuts you off from half your clients',
    body: 'For businesses targeting international or diaspora clients, language is trust. A French buyer who lands on your Arabic-only site leaves. We build fully bilingual or trilingual sites with proper hreflang, SEO, and content structure for each language.',
    includes: [
      'Full site in 2–3 languages (EN, FR, AR)',
      'Language switcher with persistent selection',
      'hreflang tags for international SEO',
      'Separate content management per language',
      'Right-to-left (RTL) support for Arabic',
    ],
    for: 'Exporters · Professional services targeting diaspora · Luxury brands · Education · Tourism',
    price: '$1,000–$2,000',
  },
  {
    id: 'ai',
    label: 'AI Solutions',
    headline: 'Intelligent automations built into your web presence',
    body: 'The next layer of competitive advantage for SMBs is AI — not the buzzword kind, but practical automations that save hours and improve client experience. We\'re building this service now and will launch it soon.',
    includes: [
      'AI-powered lead qualification chatbot',
      'Automated content generation (SEO, product descriptions)',
      'Smart form routing and CRM classification',
      'AI-assisted email follow-up sequences',
      'Intelligent site search',
    ],
    for: 'All industries — launching soon',
    price: 'Coming soon',
    soon: true,
  },
]

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$800',
    description: 'A high-converting 5-page site with lead capture and SEO foundations. Ideal for businesses starting online.',
    features: ['5 custom pages', 'Lead capture form', 'Mobile responsive', 'SEO ready', '1 revision round'],
    cta: 'Start with Starter',
  },
  {
    name: 'Business',
    price: '$1,500',
    description: 'A functional system with booking, forms, or catalog — the full business tool in 10 days.',
    features: ['Everything in Starter', 'Booking or lead system', 'Admin dashboard', '2 revision rounds', '30-day support'],
    cta: 'Build a Business site',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complex portals, multilingual systems, or integrations. Scoped and quoted per project.',
    features: ['Everything in Business', 'Client portal or AI features', 'Multilingual support', 'Unlimited revisions', 'Ongoing retainer option'],
    cta: 'Get a custom quote',
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServicesPageJsonLd />
      {/* Hero */}
      <section className="pt-36 pb-20 grid-bg relative overflow-hidden" aria-label="Services hero">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)' }}
        />
        <div className="section text-center flex flex-col items-center gap-6 relative z-10">
          <SectionLabel>Services</SectionLabel>
          <h1
            className="font-display font-bold tracking-tight text-wa-ink"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Six systems.{' '}
            <span className="text-gradient">One mission.</span>
          </h1>
          <p className="text-wa-ink-2 text-lg max-w-xl leading-relaxed">
            Every website we build is designed around a specific business outcome — 
            not around what looks good in a portfolio screenshot.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20" aria-label="Service details">
        <div className="section flex flex-col gap-20">
          {SERVICES_DETAIL.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  {svc.soon && (
                    <span className="w-fit text-xs font-semibold text-wa-gold border border-wa-gold/40 rounded-full px-3 py-1">
                      Coming Soon
                    </span>
                  )}
                  <SectionLabel>{svc.label}</SectionLabel>
                  <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-wa-ink">
                    {svc.headline}
                  </h2>
                  <p className="text-wa-ink-2 text-base leading-relaxed">{svc.body}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {svc.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8.5l3.5 3.5L13 5" stroke="#7C3AED" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-wa-ink-2 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {!svc.soon && (
                  <Link href="/contact" className="btn-primary w-fit">
                    Start this project
                    <ArrowRight />
                  </Link>
                )}
              </div>

              {/* Info card */}
              <div className="flex flex-col gap-4 sticky top-24">
                <div className="card flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest">Starting price</span>
                    <span className="font-display font-bold text-xl text-wa-violet">{svc.price}</span>
                  </div>
                  <div className="h-px bg-wa-border" />
                  <div>
                    <p className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest mb-2">Best for</p>
                    <p className="text-wa-ink-2 text-sm leading-relaxed">{svc.for}</p>
                  </div>
                  <div className="h-px bg-wa-border" />
                  <div className="flex flex-col gap-1 text-sm text-wa-ink-2">
                    <span>✓ Delivered in 10 days</span>
                    <span>✓ Fixed price, no surprises</span>
                    <span>✓ 100% online process</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 bg-bg-surface" aria-labelledby="pricing-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>Pricing</SectionLabel>
            <h2
              id="pricing-heading"
              className="font-display font-bold text-3xl md:text-4xl tracking-tight text-wa-ink"
            >
              Transparent pricing
            </h2>
            <p className="text-wa-ink-2 text-base max-w-md">
              All prices are project-fixed. No hourly billing, no scope creep surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`card flex flex-col gap-6 ${
                  tier.highlight
                    ? 'border-wa-violet bg-wa-violet-m'
                    : ''
                }`}
              >
                {tier.highlight && (
                  <span className="label-pill w-fit text-xs">Most popular</span>
                )}
                <div>
                  <p className="font-display font-bold text-2xl text-wa-violet">{tier.price}</p>
                  <p className="font-display font-semibold text-lg text-wa-ink mt-1">{tier.name}</p>
                  <p className="text-wa-ink-2 text-sm mt-2 leading-relaxed">{tier.description}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-wa-ink-2">
                      <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8.5l3.5 3.5L13 5" stroke="#7C3AED" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={tier.highlight ? 'btn-primary justify-center' : 'btn-ghost justify-center'}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs — AEO/GEO optimized */}
      <section className="py-24 bg-bg-surface" id="faq" aria-labelledby="svc-faq-heading">
        <div className="section max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 id="svc-faq-heading" className="font-display font-bold text-3xl tracking-tight text-wa-ink">
              Common questions about our services
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {SERVICE_FAQS.map((faq) => (
              <details key={faq.q} className="group border border-wa-border rounded-xl overflow-hidden bg-bg-surface">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-bg-raised transition-colors select-none">
                  <span className="font-display font-semibold text-sm text-wa-ink leading-snug">{faq.q}</span>
                  <span className="text-wa-ink-3 group-open:rotate-45 transition-transform duration-200 shrink-0 text-xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" aria-label="Services CTA">
        <div className="section text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl text-wa-ink tracking-tight">
            Not sure which system you need?
          </h2>
          <p className="text-wa-ink-2 max-w-md leading-relaxed">
            Book a free 20-minute audit. We'll look at your current site and tell you 
            exactly what's costing you clients — and what would fix it.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">
            Book Free Audit
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
