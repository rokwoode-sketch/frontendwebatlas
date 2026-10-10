import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Naskh_Arabic, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipLink from '@/components/SkipLink'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { GlobalJsonLd } from '@/components/JsonLd'
import { SITE } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic-display',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WebAtlas — مواقع تجيب عملاء | الإمارات والخليج',
    template: '%s | WebAtlas',
  },
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
  authors: [{ name: 'WebAtlas', url: SITE.url }],
  creator: 'WebAtlas',
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': `${SITE.location.latitude};${SITE.location.longitude}`,
    ICBM: `${SITE.location.latitude}, ${SITE.location.longitude}`,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    alternateLocale: ['en_US', 'fr_FR'],
    url: SITE.url,
    siteName: 'WebAtlas',
    title: 'WebAtlas — مواقع تجيب عملاء',
    description: SITE.tagline,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WebAtlas — UAE & GCC web studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebAtlas — Websites That Get Clients',
    description: SITE.tagline,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  metadataBase: new URL(SITE.url),
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${inter.variable} ${notoNaskh.variable} ${notoSansArabic.variable}`}
    >
      <body className="font-sans antialiased bg-bg text-wa-ink">
        <Providers>
          <GlobalJsonLd />
          <SkipLink />
          <div className="grain-overlay" aria-hidden="true" />
          <div className="site-vignette" aria-hidden="true" />
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </Providers>
      </body>
    </html>
  )
}
