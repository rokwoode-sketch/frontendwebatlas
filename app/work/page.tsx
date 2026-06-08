import type { Metadata } from 'next'
import Link from 'next/link'
import { WorkPageJsonLd } from '@/components/JsonLd'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Case Studies — Booking, Lead Capture & B2B Results',
  description: 'WebAtlas case studies with before/after metrics: 3× clinic bookings in Casablanca, 61% direct riad reservations in Marrakech, 12 leads/month in Brussels. Real numbers from real projects.',
  alternates: { canonical: `${SITE.url}/work` },
  openGraph: {
    title: 'WebAtlas Case Studies — Real Results',
    description: 'Before/after metrics from booking engines, lead capture sites, and B2B catalogs built in 10 days.',
    url: `${SITE.url}/work`,
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CASES = [
  {
    id: 'clinic',
    industry: 'Aesthetic Clinic',
    location: 'Casablanca, Morocco',
    tag: 'Booking System',
    tagColor: '#7C3AED',
    client: 'Dr. Amina — cosmetic medicine clinic',
    problem: 'The clinic ran entirely on phone and WhatsApp bookings. Three staff members spent a combined 90 minutes a day managing appointment requests. Evenings and weekends — peak decision time for patients — were dead zones.',
    solution: 'A booking engine built directly into the clinic\'s existing site. Real-time calendar, SMS confirmation, automated reminders. Patients book in 45 seconds without calling.',
    timeline: '9 days',
    before: [
      '8–12 appointments booked per week',
      'Zero online booking capability',
      '90+ minutes/day on appointment admin',
      'Patients calling outside office hours left voicemails, then went elsewhere',
      'No visibility on cancellations until the slot was empty',
    ],
    after: [
      '35–40 bookings per week (online only)',
      '100% of new patients book without calling',
      'Admin time down to 15 minutes/day',
      'Automated reminders cut no-shows by 60%',
      'Project ROI reached in the first month',
    ],
    metrics: [
      { value: '3×', label: 'more bookings/week' },
      { value: '60%', label: 'fewer no-shows' },
      { value: '1 mo', label: 'to break even' },
    ],
    quote: 'We went from 10 phone bookings a week to 38 online in the first month. I hadn\'t expected it to be this immediate.',
    quoteName: 'Dr. Amina B.',
    quoteRole: 'Founder — Aesthetic clinic, Casablanca',
  },
  {
    id: 'riad',
    industry: 'Boutique Riad',
    location: 'Marrakech, Morocco',
    tag: 'Direct Reservation',
    tagColor: '#D97706',
    client: 'Maison Tagine — 8-room boutique riad',
    problem: 'Over 80% of reservations came through Booking.com and Airbnb at a combined commission of 18–22%. The owner had a basic website — essentially a brochure — with no booking capability and no way to capture guests directly.',
    solution: 'A full direct-booking flow: real-time availability calendar, Stripe payment, automated confirmation and pre-arrival email sequence, and a dashboard to manage reservations without a third-party.',
    timeline: '10 days',
    before: [
      '82% of bookings via OTAs (18–22% commission)',
      'No direct payment capability on the site',
      'Guest communication entirely manual (WhatsApp + email)',
      'Invisible to guests searching "riad Marrakech book direct"',
      '$3,800/month lost to platform commissions',
    ],
    after: [
      '61% direct bookings within 3 months of launch',
      'Commission overhead dropped to under 8%',
      'Automated pre-arrival emails reduced reception calls by half',
      'Average direct booking value 12% higher than OTA bookings',
      '$2,800/month recovered from commission reduction',
    ],
    metrics: [
      { value: '61%', label: 'direct bookings' },
      { value: '$2.8k', label: 'saved/month' },
      { value: '12%', label: 'higher booking value' },
    ],
    quote: 'Within 90 days we went from almost all Booking.com to over half direct. The site paid for itself in week three.',
    quoteName: 'Youssef M.',
    quoteRole: 'Owner — Maison Tagine, Marrakech',
  },
  {
    id: 'export',
    industry: 'Import-Export',
    location: 'Tangier, Morocco',
    tag: 'B2B Catalog + RFQ',
    tagColor: '#059669',
    client: 'Atlantis Trading — industrial components export',
    problem: 'The company exported to France, Spain, and Belgium but had no web presence. Their "catalog" was a 47-page PDF sent by WhatsApp. International buyers couldn\'t find them. Their French competitors had polished B2B sites with proper quoting flows.',
    solution: 'A bilingual (FR/EN) B2B product catalog with searchable filters, product spec pages, and a request-for-quote form that routes directly to the sales team. Deployed in 10 days.',
    timeline: '10 days',
    before: [
      'No web presence — invisible to international buyers',
      '47-page PDF catalog sent case by case via WhatsApp',
      '0 inbound inquiries from online channels',
      'All new clients came through personal referral only',
      'No way to present to a French buyer at 10 PM',
    ],
    after: [
      '3 new export clients within 60 days of launch',
      'Inbound RFQs from France, Belgium, and Portugal',
      'Catalog browsed on mobile by 68% of visitors',
      'Sales team spends 40% less time on initial qualification',
      'Now referenced in 2 industry directories',
    ],
    metrics: [
      { value: '3', label: 'new export clients' },
      { value: '4', label: 'countries reached' },
      { value: '60', label: 'days to first deal' },
    ],
    quote: 'Three months ago we had no website. Today we have a French client who found us on Google and sent an RFQ at 11 PM.',
    quoteName: 'Karim E.',
    quoteRole: 'Director — Atlantis Trading, Tangier',
  },
  {
    id: 'recruiter',
    industry: 'Recruitment Agency',
    location: 'Brussels, Belgium',
    tag: 'Lead Capture Site',
    tagColor: '#2563EB',
    client: 'LinkUp Talent — mid-market recruitment boutique',
    problem: 'A generic WordPress site built three years prior. High bounce rate, no lead capture, no mobile optimisation. The company was growing via referral but couldn\'t convert the traffic their LinkedIn presence was generating.',
    solution: 'A conversion-focused site redesign: single clear value proposition, multi-step lead qualification form, automated follow-up email, and a fast mobile experience. New site ranked for two target keywords within 5 weeks.',
    timeline: '8 days',
    before: [
      'Bounce rate: 74%',
      'Average session duration: 58 seconds',
      'Zero online leads per month from the site',
      'Not indexed on page 1 for any target search',
      'Site loaded in 5.8s on mobile',
    ],
    after: [
      'Bounce rate: 38% (−36 points)',
      'Average session duration: 3m 12s',
      '11–14 qualified leads/month from organic traffic',
      'Page 1 for "cabinet de recrutement Bruxelles" within 5 weeks',
      'Site loads in 1.4s on mobile',
    ],
    metrics: [
      { value: '−36pt', label: 'bounce rate drop' },
      { value: '12×', label: 'more leads/month' },
      { value: '1.4s', label: 'mobile load time' },
    ],
    quote: 'We went from zero qualified web leads to 12 last month. The site just works.',
    quoteName: 'Sophie L.',
    quoteRole: 'Founder — LinkUp Talent, Brussels',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────
function SLabel({ children, color = '#7C3AED' }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
      style={{ color, borderColor: color + '60', background: color + '14', letterSpacing: '0.02em' }}>
      {children}
    </span>
  )
}

function Bullet({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-snug">
      <span className="mt-0.5 shrink-0 text-base leading-none" style={{ color: ok ? '#A78BFA' : '#52525B' }}>
        {ok ? '✓' : '○'}
      </span>
      <span style={{ color: ok ? '#A1A1AA' : '#52525B' }}>{children}</span>
    </li>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  return (
    <>
      <WorkPageJsonLd />
      {/* Header */}
      <section className="pt-32 pb-16 grid-bg"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%)' }}>
        <div className="section flex flex-col items-center text-center gap-5">
          <span className="label-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
            Case Studies
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            Real projects.{' '}
            <span style={{ background: 'linear-gradient(135deg,#A78BFA,#7C3AED,#D97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real numbers.
            </span>
          </h1>
          <p className="text-wa-ink-2 text-lg max-w-lg leading-relaxed">
            Every project here is a business that had a specific problem — and a measurable outcome.
            No vanity metrics. No rounded-up percentages.
          </p>
          {/* Aggregate bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-6 pt-6 border-t border-wa-border w-full max-w-2xl">
            {[['4', 'Projects below'], ['3×', 'Avg booking increase'], ['10 days', 'Avg delivery'], ['4', 'Countries reached']].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="font-display font-bold text-2xl text-wa-violet">{v}</p>
                <p className="text-xs text-wa-ink-3 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <div className="py-16">
        {CASES.map((c, i) => (
          <section
            key={c.id}
            id={c.id}
            className={`py-16 ${i % 2 === 1 ? 'bg-bg-surface' : ''}`}
            aria-labelledby={`case-${c.id}`}
          >
            <div className="section flex flex-col gap-10">

              {/* Case header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    <SLabel color={c.tagColor}>{c.tag}</SLabel>
                    <SLabel color="#52525B">{c.industry}</SLabel>
                    <SLabel color="#52525B">{c.location}</SLabel>
                  </div>
                  <h2 id={`case-${c.id}`}
                    className="font-display font-bold text-2xl md:text-3xl text-wa-ink tracking-tight">
                    {c.client}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-wa-ink-3 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-wa-violet" />
                  Delivered in {c.timeline}
                </div>
              </div>

              {/* Metrics bar */}
              <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-wa-border">
                {c.metrics.map(m => (
                  <div key={m.label}
                    className="bg-bg flex flex-col items-center justify-center text-center py-7 px-4">
                    <p className="font-display font-bold text-3xl md:text-4xl"
                      style={{ color: c.tagColor }}>{m.value}</p>
                    <p className="text-wa-ink-3 text-xs mt-1.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Problem → Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest">The situation</p>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest">What we built</p>
                  <p className="text-wa-ink-2 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Before / After grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Before */}
                <div className="rounded-2xl border border-wa-border bg-bg-surface overflow-hidden">
                  <div className="px-5 py-3 border-b border-wa-border flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#52525B]" />
                    <span className="text-xs font-semibold text-wa-ink-3 uppercase tracking-widest">Before</span>
                  </div>
                  <ul className="p-5 flex flex-col gap-3">
                    {c.before.map(b => <Bullet key={b} ok={false}>{b}</Bullet>)}
                  </ul>
                </div>
                {/* After */}
                <div className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: c.tagColor + '50', background: c.tagColor + '08' }}>
                  <div className="px-5 py-3 border-b flex items-center gap-2"
                    style={{ borderColor: c.tagColor + '30' }}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.tagColor }} />
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: c.tagColor }}>After</span>
                  </div>
                  <ul className="p-5 flex flex-col gap-3">
                    {c.after.map(a => <Bullet key={a} ok={true}>{a}</Bullet>)}
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <figure className="rounded-2xl p-6 border border-wa-border bg-bg-surface flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <span className="text-5xl font-serif leading-none"
                  style={{ color: c.tagColor, opacity: 0.5 }}>"</span>
                <div className="flex flex-col gap-3">
                  <blockquote className="text-wa-ink text-base md:text-lg leading-relaxed italic">
                    {c.quote}
                  </blockquote>
                  <figcaption>
                    <p className="font-display font-semibold text-sm text-wa-ink">{c.quoteName}</p>
                    <p className="text-xs text-wa-ink-3">{c.quoteRole}</p>
                  </figcaption>
                </div>
              </figure>

            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-28 grid-bg"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 105%, rgba(124,58,237,0.18) 0%, transparent 60%)' }}>
        <div className="section flex flex-col items-center text-center gap-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
            Want results like these<br />
            <span style={{ background: 'linear-gradient(135deg,#A78BFA,#7C3AED,#D97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              for your business?
            </span>
          </h2>
          <p className="text-wa-ink-2 max-w-md text-base leading-relaxed">
            We start with a free preview of your new site. You approve it. Then we build — in 10 days.
          </p>
          <Link href="/contact"
            className="btn-primary px-8 py-4 text-base"
            style={{ boxShadow: '0 0 36px rgba(124,58,237,0.38)' }}>
            Get Your Free Preview
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="text-xs text-wa-ink-3">No contract · No upfront payment · Live preview in 48 hours</p>
        </div>
      </section>
    </>
  )
}
