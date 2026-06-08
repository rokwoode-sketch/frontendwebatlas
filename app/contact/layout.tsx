import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — WebAtlas',
  description: 'Book a free 20-minute audit. Tell us about your business and what your website should be doing for it.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
