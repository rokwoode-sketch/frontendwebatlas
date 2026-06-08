import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — WebAtlas',
  description: 'AI-powered web agency based in Casablanca, Morocco. Building functional websites for serious businesses across 7+ countries.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

const VALUES = [
  {
    title: 'Function over aesthetics',
    body: 'A beautiful site that doesn\'t convert is a decoration. Every design decision we make is tested against one question: does this help the business?',
  },
  {
    title: 'Speed without sloppiness',
    body: '10 days is not a rushed timeline. It\'s a disciplined one. AI-assisted tools and a refined process let us move fast and deliver clean work.',
  },
  {
    title: 'Radical transparency',
    body: 'Fixed prices. Fixed timelines. A live preview before you sign. You know exactly what you\'re getting before you commit to anything.',
  },
  {
    title: 'Fully remote by design',
    body: 'We\'ve built a process that works entirely online — video calls, shared links, async updates. No office required on either side.',
  },
]

const MARKETS = [
  { region: 'Morocco', cities: 'Casablanca, Marrakech, Rabat, Agadir, Tangier', lang: 'French / Arabic' },
  { region: 'France & Francophone Europe', cities: 'Paris, Lyon, Brussels, Geneva, Montreal', lang: 'French' },
  { region: 'United Kingdom', cities: 'London, Manchester, Birmingham', lang: 'English' },
  { region: 'Gulf (GCC)', cities: 'Dubai, Riyadh, Doha, Abu Dhabi', lang: 'English' },
  { region: 'West Africa', cities: 'Dakar, Abidjan, Lagos', lang: 'French / English' },
  { region: 'Southeast Asia', cities: 'Singapore, Kuala Lumpur', lang: 'English' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 grid-bg relative overflow-hidden" aria-label="About hero">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
        />
        <div className="section relative z-10 flex flex-col items-start gap-6 max-w-3xl">
          <SectionLabel>About WebAtlas</SectionLabel>
          <h1
            className="font-display font-bold tracking-tight text-wa-ink"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            A different kind of{' '}
            <span className="text-gradient">web agency</span>
          </h1>
          <p className="text-wa-ink-2 text-lg leading-relaxed max-w-xl">
            We're an AI-powered web agency based in Casablanca, operating globally. 
            We build websites as functional business tools, not as decorative brochures.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" aria-labelledby="story-heading">
        <div className="section grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 id="story-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">
              What we noticed
            </h2>
            <div className="flex flex-col gap-4 text-wa-ink-2 text-base leading-relaxed">
              <p>
                Across every market we looked at — Morocco, France, the UK, the Gulf — we kept 
                finding the same pattern: profitable, well-run businesses with websites that were 
                actively costing them clients.
              </p>
              <p>
                Not because the sites were ugly. Because they were passive. No booking system. 
                No lead capture. No multilingual support. No mobile optimization. A dental clinic 
                in Casablanca losing three walk-ins a day because there was no "book an appointment" 
                button. A riad in Marrakech paying Booking.com 18% on every reservation because 
                their own site had no checkout.
              </p>
              <p>
                WebAtlas was built to fix that gap. We use AI to move faster, a refined process 
                to deliver in 10 days, and a fully online model to serve clients across seven 
                countries without ever needing a meeting room.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 sticky top-24">
            <div className="card">
              <p className="text-wa-ink-2 text-sm leading-relaxed italic">
                "The standard web agency model — 6-week timelines, in-person meetings, 
                spec documents that get ignored — doesn't serve SMBs well. We built the 
                agency we wished existed when we were looking for one."
              </p>
              <p className="text-wa-ink-3 text-xs mt-4">— WebAtlas founding principle</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '14', label: 'days delivery'     },
                { n: '7+', label: 'countries active'  },
                { n: 'FR+EN', label: 'languages'      },
                { n: '100%', label: 'remote process'  },
              ].map((s) => (
                <div key={s.label} className="card text-center">
                  <p className="font-display font-bold text-2xl text-wa-violet">{s.n}</p>
                  <p className="text-wa-ink-3 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-surface" aria-labelledby="values-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>How we work</SectionLabel>
            <h2 id="values-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">
              Four principles we don't compromise on
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.title} className="card flex flex-col gap-3">
                <h3 className="font-display font-semibold text-base text-wa-ink">{v.title}</h3>
                <p className="text-wa-ink-2 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-24" aria-labelledby="markets-heading">
        <div className="section">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>Where we work</SectionLabel>
            <h2 id="markets-heading" className="font-display font-bold text-3xl text-wa-ink tracking-tight">
              Based in Casablanca. Working globally.
            </h2>
            <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
              Our home market is Morocco, but our clients span six regions. We operate in 
              French and English and have never needed a physical meeting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {MARKETS.map((m) => (
              <div key={m.region} className="card flex flex-col gap-2">
                <h3 className="font-display font-semibold text-sm text-wa-ink">{m.region}</h3>
                <p className="text-wa-ink-3 text-xs">{m.cities}</p>
                <span className="label-pill w-fit mt-1">{m.lang}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-surface" aria-label="About CTA">
        <div className="section text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl text-wa-ink tracking-tight">
            Ready to build something that works?
          </h2>
          <p className="text-wa-ink-2 max-w-md leading-relaxed">
            Tell us about your business. We'll tell you exactly what your website should be doing for it.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-8 py-3.5"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  )
}
