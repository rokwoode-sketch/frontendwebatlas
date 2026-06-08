'use client'

import { useState } from 'react'

const SERVICES = [
  'Booking Engine',
  'Lead Machine',
  'Client Portal',
  'B2B Catalog + RFQ',
  'Reservation System',
  'Multilingual Site',
  'AI Solutions',
  'Not sure yet',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-pill">
      <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
      {children}
    </span>
  )
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error((err as { message?: string }).message ?? 'Something went wrong')
      }

      setState('success')
      form.reset()
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'An unexpected error occurred.')
    }
  }

  const inputClass =
    'w-full bg-bg-raised border border-wa-border rounded-lg px-4 py-3 text-sm text-wa-ink placeholder:text-wa-ink-3 focus:outline-none focus:border-wa-violet transition-colors'

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 grid-bg relative overflow-hidden" aria-label="Contact hero">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
        />
        <div className="section relative z-10 text-center flex flex-col items-center gap-5">
          <SectionLabel>Contact</SectionLabel>
          <h1
            className="font-display font-bold tracking-tight text-wa-ink"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Let's build something that{' '}
            <span className="text-gradient">works for you</span>
          </h1>
          <p className="text-wa-ink-2 text-base max-w-md leading-relaxed">
            Tell us about your business and what you need. We'll come back within 4 hours 
            with an honest assessment and a path forward.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 pb-32" aria-label="Contact form and info">
        <div className="section grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">

          {/* Form */}
          <div className="lg:col-span-3">
            {state === 'success' ? (
              <div className="card flex flex-col items-center text-center gap-5 py-12">
                <div className="w-14 h-14 rounded-full bg-wa-violet-m border border-wa-violet flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l5 5L19 7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-xl text-wa-ink">Message received</h2>
                <p className="text-wa-ink-2 text-sm max-w-xs leading-relaxed">
                  We'll review your project and get back to you within 4 hours. 
                  Check your inbox — we'll send a confirmation now.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="btn-ghost text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">
                      Full name <span className="text-wa-violet">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">
                      Email <span className="text-wa-violet">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+212 6 00 00 00 00"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">
                      Company / Business name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your business"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={`${inputClass} cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-wa-ink-2 uppercase tracking-wider">
                    Tell us about your project <span className="text-wa-violet">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="What does your business do? What's wrong with your current website? What would you like it to do for you?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {state === 'error' && (
                  <div className="rounded-lg border border-red-800/40 bg-red-950/30 px-4 py-3">
                    <p className="text-red-400 text-sm">{errorMsg || 'Something went wrong. Please try again.'}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
                        <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-wa-ink-3 text-xs text-center">
                  We respond within 4 hours · French & English · No spam, ever
                </p>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="card flex flex-col gap-4">
              <h3 className="font-display font-semibold text-sm text-wa-ink">What happens next</h3>
              <div className="flex flex-col gap-3">
                {[
                  { step: '1', text: 'We review your message and your current website within 4 hours.' },
                  { step: '2', text: 'You receive a short voice note or email with our honest assessment.' },
                  { step: '3', text: 'We schedule a 20-minute video call if there\'s a fit.' },
                  { step: '4', text: 'You receive a fixed-price proposal within 24 hours of the call.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-wa-violet-m border border-wa-violet text-wa-violet-l text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <p className="text-wa-ink-2 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card flex flex-col gap-3">
              <h3 className="font-display font-semibold text-sm text-wa-ink">Contact directly</h3>
              <a
                href="mailto:hello@webatlas.xyz"
                className="flex items-center gap-2 text-sm text-wa-ink-2 hover:text-wa-violet-l transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 5.5l6 4 6-4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                hello@webatlas.xyz
              </a>
              <p className="text-wa-ink-3 text-xs">Casablanca, Morocco · GMT+1</p>
              <p className="text-wa-ink-3 text-xs">Available Monday – Saturday, 9am – 8pm</p>
            </div>

            <div
              className="rounded-xl border border-wa-border-s p-5"
              style={{ background: 'rgba(124,58,237,0.05)' }}
            >
              <p className="text-wa-violet-l text-sm font-display font-semibold mb-2">
                Free audit included
              </p>
              <p className="text-wa-ink-2 text-xs leading-relaxed">
                Every inquiry includes a free review of your current website. 
                We'll tell you what's costing you clients — with or without a project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
