import type { Metadata } from 'next'

export const SITE = {
  name: 'WebAtlas',
  legalName: 'WebAtlas',
  url: 'https://webatlas.xyz',
  email: 'autopilot.ai6@outlook.com',
  locale: 'ar_AE',
  languages: ['ar', 'en', 'fr'],
  description:
    'WebAtlas builds premium Arabic + English websites for UAE and GCC businesses — WhatsApp leads, booking, and a look as strong as your service. Delivered in about 10 days.',
  tagline: 'Websites that get clients — not just looks.',
  location: {
    city: 'Dubai',
    region: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  serviceAreas: [
    'United Arab Emirates',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
  ],
  priceRange: 'AED 4,500–12,000',
  foundingDate: '2024',
  sameAs: [] as string[],
} as const

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
  if (path === '/') return `${SITE.url}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${normalized}${normalized.endsWith('/') ? '' : '/'}`
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

export type ServiceItem = {
  id: string
  name: string
  description: string
  priceFrom?: string
}

export const FAQS: FaqItem[] = [
  {
    q: 'How much does a business website cost in the UAE with WebAtlas?',
    a: 'Three clear packages: Website + 1 year hosting from AED 3,900; Website + SEO + hosting AED 5,900; Premium Arabic + English AED 8,900. Fixed details after a short WhatsApp — before any payment.',
  },
  {
    q: 'How long does WebAtlas take to deliver a website?',
    a: 'Most projects launch in about 10 days after scope and content are agreed. You approve the design direction early, then we build, connect WhatsApp/forms, and go live.',
  },
  {
    q: 'Do you build Arabic and English websites for Dubai businesses?',
    a: 'Yes. WebAtlas specializes in proper Arabic RTL plus English for UAE and GCC businesses — clinics, real estate, salons, professional firms, and more — with WhatsApp-first conversion paths.',
  },
  {
    q: 'Can WebAtlas help if my business has no website or only Instagram?',
    a: 'Yes. Many UAE businesses rely on Instagram or Google Maps alone. We build a premium site that turns those visits into WhatsApp chats, calls, or bookings.',
  },
  {
    q: 'Do I need to meet you in person in Dubai?',
    a: 'No. WebAtlas works remotely across the Gulf via WhatsApp and video calls. Delivery and communication stay clear without office meetings.',
  },
]

export const SERVICE_FAQS: FaqItem[] = [
  {
    q: 'Do you build booking websites for clinics and salons in Dubai?',
    a: 'Yes. Booking-focused packages include appointment flows, mobile layout, and WhatsApp CTAs so clients can book without endless chat threads.',
  },
  {
    q: 'Can you build a lead site for real estate brokers in the UAE?',
    a: 'Yes. Lead sites include inquiry forms, WhatsApp buttons, service/area pages, and a bilingual layout suited to local and expat clients.',
  },
  {
    q: 'Is the site Arabic and English?',
    a: 'Yes. Proper RTL Arabic plus English is standard for UAE-facing packages unless you choose a single language.',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'leadgen',
    name: 'Lead & WhatsApp Site',
    description:
      'Bilingual UAE business website with inquiry forms, WhatsApp CTAs, mobile-first layout, and trust pages that convert visitors into chats.',
    priceFrom: 'AED 4,500',
  },
  {
    id: 'booking',
    name: 'Booking Website',
    description:
      'Appointment or reservation flow for clinics, salons, and service businesses — plus WhatsApp fallback and Arabic/English UI.',
    priceFrom: 'AED 7,500',
  },
  {
    id: 'presence',
    name: 'Premium Presence Site',
    description:
      'High-trust visual presence for Gulf brands that need to look as premium online as they do offline.',
    priceFrom: 'AED 6,500',
  },
  {
    id: 'catalog',
    name: 'Catalog + RFQ',
    description:
      'Browsable services or products with quote requests — built for serious B2B and fit-out buyers.',
    priceFrom: 'AED 6,500',
  },
  {
    id: 'multilang',
    name: 'Arabic + English Site',
    description:
      'Proper RTL Arabic and English in one polished site for local clients and expats across the UAE.',
    priceFrom: 'AED 4,500',
  },
  {
    id: 'custom',
    name: 'Custom Web Build',
    description:
      'Portals, dashboards, and custom flows scoped after a short discovery call — fixed quote before payment.',
  },
]

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    areaServed: SITE.serviceAreas.map((name) => ({ '@type': 'Country', name })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    sameAs: SITE.sameAs,
    image: `${SITE.url}/showcase/global-scale.png`,
    logo: `${SITE.url}/showcase/global-scale.png`,
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
    inLanguage: ['ar', 'en'],
    publisher: { '@id': `${SITE.url}/#organization` },
  }
}

export function buildFaqSchema(faqs: FaqItem[] = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function buildSpeakableSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SITE.name,
    url: SITE.url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#hero-heading', '.seo-hidden'],
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE.url}/showcase/global-scale.png`,
    },
  }
}

export function buildServiceSchema(svc: ServiceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/services/#${svc.id}`,
    name: svc.name,
    description: svc.description,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: SITE.serviceAreas,
    ...(svc.priceFrom
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'AED',
            price: svc.priceFrom.replace(/[^\d.]/g, ''),
            description: `From ${svc.priceFrom}`,
          },
        }
      : {}),
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.url),
    })),
  }
}

/** Kinetic homepage VSL — UAE positioning */
export const VSL_SCRIPT = {
  title: 'Why Gulf businesses lose clients online',
  scenes: [
    { text: 'Your service is strong.', emphasis: false },
    { text: 'Your Instagram looks busy.', emphasis: false },
    { text: 'Then someone opens your link…', emphasis: false },
    { text: 'Slow. Outdated. No WhatsApp. No booking.', emphasis: true },
    { text: 'They leave.', emphasis: true },
    { text: 'Not because you are bad.', emphasis: false },
    { text: 'Because the first impression failed.', emphasis: true },
    { text: 'In the UAE, trust is visual.', emphasis: false },
    { text: 'Arabic + English. Fast. Clear CTA.', emphasis: false },
    { text: 'WebAtlas builds sites that get clients.', emphasis: true },
    { text: 'WhatsApp. Booking. Premium presence.', emphasis: false },
    { text: 'About 10 days. Clear AED packages.', emphasis: false },
    { text: 'Your website should work as hard as you do.', emphasis: true },
    { text: 'Message us on WhatsApp.', emphasis: true },
  ],
  transcript: `Your service is strong. Your Instagram looks busy. Then someone opens your link — and it is slow, outdated, or has no clear WhatsApp or booking path. They leave. Not because your business is weak, but because the first impression failed. In the UAE and across the Gulf, trust is visual and bilingual. WebAtlas builds Arabic + English websites that turn visitors into WhatsApp chats and bookings — premium presence, clear packages in AED, delivered in about 10 days. Message us on WhatsApp to start.`,
}
