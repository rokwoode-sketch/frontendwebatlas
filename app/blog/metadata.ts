import type { Metadata } from 'next'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Web Design, Booking & Agency Insights',
  description:
    'Practical guides on booking websites, direct riad reservations, multilingual export sites, and web agency pricing for businesses in Morocco and beyond.',
  alternates: { canonical: `${SITE.url}/blog` },
}
