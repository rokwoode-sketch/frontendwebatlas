import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { HomePageJsonLd } from '@/components/JsonLd'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'WebAtlas — Booking Systems & Lead Engines | Casablanca Web Studio',
  description: SITE.description,
  keywords: [
    'web agency Casablanca',
    'agence web Maroc',
    'création site web Casablanca',
    'booking website Morocco',
    'site web prise de rendez-vous',
    'lead generation website',
    'AI web agency',
    'riad direct booking website',
    'B2B catalog website',
    'client portal development',
    'webatlas',
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: 'WebAtlas — Websites That Close Deals',
    description: SITE.tagline,
    url: SITE.url,
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <HomePageJsonLd />
      {/* Crawler-visible entity summary for AEO/GEO */}
      <div className="sr-only seo-hidden">
        <p>
          {SITE.description} Contact: {SITE.email}. Pricing: {SITE.priceRange}.
          Delivery: 10 days. Markets: {SITE.serviceAreas.join(', ')}.
        </p>
      </div>
      <HomePage />
    </>
  )
}
