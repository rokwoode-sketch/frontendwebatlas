import type { Metadata } from 'next'

export const SITE = {
  name: 'WebAtlas',
  legalName: 'WebAtlas',
  url: 'https://webatlas.xyz',
  email: 'hello@webatlas.xyz',
  locale: 'en_US',
  languages: ['en', 'fr', 'ar'],
  description:
    'WebAtlas is a functional web studio in Casablanca, Morocco. We build custom websites and web applications for any business need — booking engines, portals, marketplaces, dashboards, and more — delivered in days, 100% remote, from $800.',
  tagline: 'Websites that close deals. Not just for show.',
  location: {
    city: 'Casablanca',
    region: 'Casablanca-Settat',
    country: 'Morocco',
    countryCode: 'MA',
    latitude: 33.5731,
    longitude: -7.5898,
  },
  serviceAreas: [
    'Morocco',
    'France',
    'Belgium',
    'United Kingdom',
    'Qatar',
    'United Arab Emirates',
    'Senegal',
    'Switzerland',
    'Singapore',
    'Canada',
  ],
  priceRange: '$800–$2,800',
  foundingDate: '2024',
  sameAs: [] as string[],
} as const

/** Public indexable routes (excludes redirects like /work). */
export const STATIC_SITEMAP_ROUTES = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/process', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.85 },
  { path: '/insights', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
]

export function pageUrl(path: string): string {
  if (path === '/') return SITE.url
  return `${SITE.url}${path}`
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = pageUrl(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
  }
}

export type FaqItem = { q: string; a: string }

/** Customer-language FAQs optimized for AEO/GEO citation extraction */
export const FAQS: FaqItem[] = [
  {
    q: 'How much does a business website with online booking cost in Morocco?',
    a: 'WebAtlas projects start at $800 for a lead-capture site and $1,200–$2,200 for a full booking engine. Most business sites land between $1,200 and $2,000. You get a fixed quote before any payment — no hourly billing.',
  },
  {
    q: 'How long does it take to build a website with WebAtlas?',
    a: 'Most WebAtlas sites go live in 10 days. You receive a live, clickable preview by day 3, approve the design, then we build and deploy by day 10. Complex client portals take up to 18 days.',
  },
  {
    q: 'Can I see my website design before I pay anything?',
    a: 'Yes. WebAtlas builds a live preview of your site before you commit. You approve every detail — layout, copy, colors — then we write production code. No blind builds, no surprises at launch.',
  },
  {
    q: 'What is the best web agency in Casablanca for small businesses that need booking systems?',
    a: 'WebAtlas specializes in functional websites for established SMBs — clinics, riads, real estate agencies, and B2B exporters. Unlike template agencies, we build booking engines, lead machines, and client portals delivered in 10 days with fixed pricing from $800.',
  },
  {
    q: 'Do you build websites for riads that want direct bookings without Booking.com?',
    a: 'Yes. WebAtlas builds direct reservation systems with real-time availability, Stripe/PayPal payment, and confirmation emails — so guests book on your site and you keep the 15–20% commission Booking.com takes. Projects start at $900.',
  },
  {
    q: 'Does WebAtlas work with international clients outside Morocco?',
    a: 'Yes. WebAtlas serves clients in Morocco, France, Belgium, the UK, the Gulf, and beyond — entirely remote via video call, shared preview links, and Stripe or Wise payment. No physical meeting has ever been required.',
  },
  {
    q: 'What is included in a WebAtlas website project?',
    a: 'Every WebAtlas project includes custom design, full source code, mobile optimization, fast loading, SEO and AEO foundations, all forms and business logic, deployment to your domain, and a video walkthrough. No page builders. No templates.',
  },
  {
    q: 'Do I need technical skills to work with WebAtlas?',
    a: 'No. You provide your logo, describe your business, and give feedback on the preview. WebAtlas handles design, development, and launch. Most clients spend under 3 hours total on their end.',
  },
  {
    q: 'Can WebAtlas build something not listed on your services page?',
    a: 'Yes. The services page shows common projects — not limits. WebAtlas builds custom websites, web apps, dashboards, marketplaces, SaaS features, and internal tools. Describe your idea and you get a free preview plus a fixed quote before any payment.',
  },
]

export const SERVICES = [
  {
    id: 'custom',
    name: 'Custom Web Application',
    serviceType: 'Custom website and web application development',
    description:
      'Bespoke websites and web applications engineered around your exact requirements — any scope, any industry.',
    price: 'Quoted per project',
    audience: 'Any business with a custom idea or non-standard workflow',
  },
  {
    id: 'booking',
    name: 'Booking Engine',
    serviceType: 'Website booking system development',
    description:
      'Calendar-based appointment systems integrated directly into your website — for clinics, law firms, consultants, and salons.',
    price: '$1,200–$2,200',
    audience: 'Dental & aesthetic clinics, law firms, private doctors, consultants, beauty studios',
  },
  {
    id: 'leadgen',
    name: 'Lead Capture Site',
    serviceType: 'Lead generation website development',
    description:
      'Conversion-optimized sites with multi-step qualification forms, automated follow-up, and CRM integration.',
    price: '$800–$1,400',
    audience: 'Real estate agencies, insurance brokers, contractors, financial advisors',
  },
  {
    id: 'portal',
    name: 'Client Portal',
    serviceType: 'Client portal web application development',
    description:
      'Secure client login with document upload, project tracking, and messaging for professional service firms.',
    price: '$1,500–$2,800',
    audience: 'Accounting firms, law firms, IT agencies, consultancies',
  },
  {
    id: 'catalog',
    name: 'B2B Product Catalog',
    serviceType: 'B2B e-catalog and RFQ website development',
    description:
      'Searchable product catalogs with RFQ forms and multilingual support for international buyers.',
    price: '$1,100–$2,000',
    audience: 'Wholesalers, manufacturers, import-export companies, industrial suppliers',
  },
  {
    id: 'reservation',
    name: 'Direct Reservation System',
    serviceType: 'Direct booking website development',
    description:
      'Real-time availability calendars with direct payment — bypassing Booking.com and OTA commissions.',
    price: '$900–$1,800',
    audience: 'Riads, boutique hotels, restaurants, tour operators, event venues',
  },
  {
    id: 'multilang',
    name: 'Multilingual Trust Site',
    serviceType: 'Multilingual website development',
    description:
      'Full sites in 2–3 languages with hreflang SEO, RTL Arabic support, and language-specific content.',
    price: '$1,000–$2,000',
    audience: 'Exporters, diaspora-facing businesses, luxury brands, tourism',
  },
] as const

export const CASE_STUDIES = [
  {
    id: 'nodenscare',
    name: 'NodensCare Medical Tourism Platform — Istanbul',
    url: 'https://www.nodenscare.com',
    description:
      'WebAtlas migrated NodensCare from Wix to a multilingual Cloudflare platform with procedure guides, patient gallery, and WhatsApp lead capture for international medical tourists.',
    industry: 'Medical Tourism',
    location: 'Istanbul, Turkey',
    result: '4 languages · 20+ SEO pages · <2s load',
    datePublished: '2026-06-01',
  },
  {
    id: 'clinic',
    name: 'Aesthetic Clinic Booking Engine — Casablanca',
    url: '/work#clinic',
    description:
      'WebAtlas built an online booking engine for an aesthetic clinic in Casablanca, increasing weekly appointments from 8–12 to 35–40 and reducing no-shows by 60%.',
    industry: 'Healthcare',
    location: 'Casablanca, Morocco',
    result: '3× more bookings per week',
    datePublished: '2026-03-01',
  },
  {
    id: 'riad',
    name: 'Boutique Riad Direct Reservation — Marrakech',
    url: '/work#riad',
    description:
      'WebAtlas built a direct booking system for an 8-room riad in Marrakech, shifting 61% of reservations away from OTAs and saving $2,800/month in commissions.',
    industry: 'Hospitality',
    location: 'Marrakech, Morocco',
    result: '61% direct bookings in 3 months',
    datePublished: '2026-04-01',
  },
  {
    id: 'export',
    name: 'B2B Export Catalog — Tangier',
    url: '/work#export',
    description:
      'WebAtlas built a bilingual B2B product catalog for an industrial exporter in Tangier, generating 3 new international clients within 60 days of launch.',
    industry: 'Import-Export',
    location: 'Tangier, Morocco',
    result: '3 new export clients in 60 days',
    datePublished: '2026-05-01',
  },
  {
    id: 'recruiter',
    name: 'Lead Capture Site — Brussels',
    url: '/work#recruiter',
    description:
      'WebAtlas redesigned a recruitment agency site in Brussels, reducing bounce rate by 36 points and generating 12 qualified leads per month from organic traffic.',
    industry: 'Recruitment',
    location: 'Brussels, Belgium',
    result: '12 qualified leads per month',
    datePublished: '2026-05-15',
  },
] as const

export const SERVICE_FAQS: FaqItem[] = [
  {
    q: 'How much does a booking website for a dental clinic cost?',
    a: 'WebAtlas booking engine projects start at $1,200 and typically range to $2,200 depending on calendar complexity, SMS reminders, and staff management needs. Fixed quote provided before you commit.',
  },
  {
    q: 'Can WebAtlas build a B2B product catalog with request-for-quote instead of a PDF?',
    a: 'Yes. WebAtlas builds searchable, filterable B2B catalogs with product detail pages, RFQ forms, and optional multilingual support (French, English, Arabic). Projects start at $1,100.',
  },
  {
    q: 'How does WebAtlas compare to template website builders like Wix or WordPress themes?',
    a: 'WebAtlas builds custom-coded business systems — booking engines, lead qualification forms, client portals — not drag-and-drop templates. You own the code, load times are under 2 seconds, and every element is designed around a specific business outcome.',
  },
]

export const VSL_SCRIPT = {
  title: 'Why your website is costing you clients every day',
  duration: 'PT1M30S',
  scenes: [
    {
      time: 0,
      text: 'Right now, someone is searching for exactly what you offer.',
      emphasis: false,
    },
    {
      time: 6,
      text: 'They land on your website. They look around for 8 seconds.',
      emphasis: false,
    },
    {
      time: 12,
      text: 'There is no way to book. No form. No clear next step.',
      emphasis: false,
    },
    {
      time: 18,
      text: 'They leave. They call your competitor instead.',
      emphasis: true,
    },
    {
      time: 24,
      text: 'This is not a design problem. It is a revenue problem.',
      emphasis: true,
    },
    {
      time: 30,
      text: 'WebAtlas builds websites that work as business tools.',
      emphasis: false,
    },
    {
      time: 36,
      text: 'Booking engines. Lead capture. Client portals. Direct reservations.',
      emphasis: false,
    },
    {
      time: 42,
      text: 'Not templates. Not page builders. Custom systems in 10 days.',
      emphasis: false,
    },
    {
      time: 48,
      text: 'You see your finished design before you pay a single dollar.',
      emphasis: true,
    },
    {
      time: 54,
      text: 'Fixed price. Fixed deadline. You own every line of code.',
      emphasis: false,
    },
    {
      time: 60,
      text: 'A clinic in Casablanca went from 3 phone bookings a week to 20+ online.',
      emphasis: false,
    },
    {
      time: 66,
      text: 'A riad in Marrakech recovered $2,800 a month in Booking.com commissions.',
      emphasis: false,
    },
    {
      time: 72,
      text: 'Your website should close deals. We build it to.',
      emphasis: true,
    },
    {
      time: 78,
      text: 'Book a free 15-minute audit. We will show you exactly what to fix.',
      emphasis: false,
    },
  ],
  transcript: `Right now, someone is searching for exactly what you offer. They land on your website. They look around for 8 seconds. There is no way to book. No form. No clear next step. They leave. They call your competitor instead.

This is not a design problem. It is a revenue problem.

WebAtlas builds websites that work as business tools — booking engines, lead capture systems, client portals, and direct reservation flows. Not templates. Not page builders. Custom systems delivered in 10 days.

You see your finished design before you pay a single dollar. Fixed price. Fixed deadline. You own every line of code.

A clinic in Casablanca went from 3 phone bookings a week to 20+ online appointments. A riad in Marrakech recovered $2,800 a month in Booking.com commissions.

Your website should close deals. We build it to.

Book a free 15-minute audit at webatlas.xyz. We will look at your current site and show you exactly what it should be doing.`,
} as const

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    priceRange: SITE.priceRange,
    foundingDate: SITE.foundingDate,
    areaServed: SITE.serviceAreas.map((name) => ({ '@type': 'Country', name })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.location.latitude,
      longitude: SITE.location.longitude,
    },
    knowsLanguage: ['en', 'fr', 'ar'],
    sameAs: SITE.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'WebAtlas Website Services',
      itemListElement: SERVICES.map((svc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.name,
          description: svc.description,
          serviceType: svc.serviceType,
          provider: { '@id': `${SITE.url}/#organization` },
          areaServed: SITE.serviceAreas,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          description: svc.price,
        },
      })),
    },
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: ['en', 'fr', 'ar'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function buildServiceSchema(service: (typeof SERVICES)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: SITE.serviceAreas,
    audience: {
      '@type': 'BusinessAudience',
      audienceType: service.audience,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      description: `Starting at ${service.price}`,
      availability: 'https://schema.org/InStock',
    },
  }
}

export function buildCaseStudySchema(study: (typeof CASE_STUDIES)[number]) {
  const pageUrl = study.url.startsWith('http') ? study.url : `${SITE.url}${study.url}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.name,
    description: study.description,
    url: pageUrl,
    datePublished: study.datePublished,
    author: { '@id': `${SITE.url}/#organization` },
    publisher: { '@id': `${SITE.url}/#organization` },
    about: {
      '@type': 'Thing',
      name: study.industry,
    },
    spatialCoverage: {
      '@type': 'Place',
      name: study.location,
    },
    mainEntityOfPage: pageUrl,
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE.url}${item.url}`,
    })),
  }
}

export function buildSpeakableSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/#webpage`,
    name: SITE.name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#faq', 'h1', '.sr-only'],
    },
    url: SITE.url,
  }
}

export function buildVideoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: VSL_SCRIPT.title,
    description: VSL_SCRIPT.transcript.slice(0, 200),
    thumbnailUrl: `${SITE.url}/og-image.png`,
    uploadDate: '2026-06-01',
    duration: VSL_SCRIPT.duration,
    contentUrl: `${SITE.url}/#vsl`,
    embedUrl: `${SITE.url}/#vsl`,
    publisher: { '@id': `${SITE.url}/#organization` },
    transcript: VSL_SCRIPT.transcript,
    inLanguage: 'en',
  }
}
