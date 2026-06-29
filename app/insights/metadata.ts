import type { Metadata } from 'next'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Insights — Web Agency Research & Case Patterns',
  description:
    'WebAtlas insights: case study patterns, market research, and strategic guides for businesses investing in functional websites in Morocco and internationally.',
  alternates: { canonical: `${SITE.url}/insights` },
}
