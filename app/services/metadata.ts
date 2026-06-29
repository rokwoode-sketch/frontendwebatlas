import type { Metadata } from 'next'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services — Custom Web Apps & Business Systems',
  description:
    'WebAtlas builds custom websites and web applications for any business need — booking engines, portals, marketplaces, dashboards, and more. Fixed pricing, delivered in days from Casablanca, serving Morocco and globally.',
  alternates: { canonical: `${SITE.url}/services` },
}
