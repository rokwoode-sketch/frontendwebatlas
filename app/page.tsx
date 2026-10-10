import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { HomePageJsonLd } from '@/components/JsonLd'
import { SITE, pageUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'WebAtlas — مواقع تجيب عملاء | الإمارات والخليج',
  description: SITE.description,
  keywords: [
    'web agency Dubai',
    'website UAE',
    'موقع إلكتروني دبي',
    'تصميم مواقع الإمارات',
    'Arabic English website Dubai',
    'WhatsApp business website UAE',
    'booking website Dubai',
    'web studio GCC',
    'webatlas',
  ],
  alternates: { canonical: pageUrl('/') },
  openGraph: {
    title: 'WebAtlas — مواقع تجيب عملاء',
    description: SITE.tagline,
    url: pageUrl('/'),
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <HomePageJsonLd />
      <div className="sr-only seo-hidden">
        <p>
          {SITE.description} Contact: {SITE.email}. Pricing: {SITE.priceRange}.
          Delivery: ~10 days. Markets: {SITE.serviceAreas.join(', ')}.
        </p>
      </div>
      <HomePage />
    </>
  )
}
