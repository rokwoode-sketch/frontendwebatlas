import type { Metadata } from 'next'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Our Process — 10-Day Web Delivery',
  description:
    'WebAtlas delivery process: free audit, live preview by day 3, production build, launch and handover. Fixed scope, fixed deadline, no agency bloat.',
  alternates: { canonical: `${SITE.url}/process` },
}
