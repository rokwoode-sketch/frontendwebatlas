import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — WebAtlas',
  description: 'Message us on WhatsApp for a free audit. Tell us about your business and what your website should be doing for it.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
