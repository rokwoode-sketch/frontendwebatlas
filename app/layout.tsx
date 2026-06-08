import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GlobalJsonLd } from '@/components/JsonLd'
import { SITE } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WebAtlas — Functional Web Studio | Casablanca',
    template: '%s | WebAtlas',
  },
  description: SITE.description,
  keywords: [
    'web agency Casablanca', 'agence web Maroc', 'création site web Casablanca',
    'site web prise de rendez-vous Maroc', 'booking engine website',
    'lead generation website Morocco', 'client portal development',
    'B2B catalog website', 'riad direct booking Marrakech',
    'multilingual website Morocco', 'web studio Casablanca', 'webatlas',
  ],
  authors: [{ name: 'WebAtlas', url: SITE.url }],
  creator: 'WebAtlas',
  alternates: { canonical: SITE.url },
  other: {
    'geo.region': 'MA-06',
    'geo.placename': 'Casablanca',
    'geo.position': `${SITE.location.latitude};${SITE.location.longitude}`,
    ICBM: `${SITE.location.latitude}, ${SITE.location.longitude}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: SITE.url,
    siteName: 'WebAtlas',
    title: 'WebAtlas — Websites That Close Deals',
    description: SITE.tagline,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WebAtlas — Functional Web Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebAtlas — Websites That Close Deals',
    description: SITE.tagline,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  metadataBase: new URL(SITE.url),
}

export const viewport: Viewport = {
  themeColor: '#030308',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-bg text-wa-ink">
        <GlobalJsonLd />
        {/* Film grain overlay — adds depth to the dark background */}
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
