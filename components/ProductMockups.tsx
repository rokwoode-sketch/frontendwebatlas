'use client'

type MockupProps = { accent?: string }

export function BookingMockup({ accent = '#5E6AD2' }: MockupProps) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const slots = ['09:00', '10:30', '14:00', '16:30']

  return (
    <div className="mockup-ui h-full flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-wa-ink-3 uppercase tracking-widest">Book appointment</p>
          <p className="text-sm font-display font-semibold text-wa-ink mt-0.5">Dr. Amina — Aesthetic Clinic</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-full font-semibold"
          style={{ background: accent + '22', color: accent, border: `1px solid ${accent}44` }}>
          Live
        </span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {days.map((d, i) => (
          <div key={d}
            className="rounded-lg py-2 text-center text-[10px] font-medium"
            style={{
              background: i === 2 ? accent + '28' : 'rgba(255,255,255,0.03)',
              border: i === 2 ? `1px solid ${accent}55` : '1px solid rgba(255,255,255,0.06)',
              color: i === 2 ? '#FAFAFA' : '#71717A',
            }}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {slots.map((s, i) => (
          <button key={s} type="button"
            className="rounded-xl py-3 text-xs font-semibold transition-colors"
            style={{
              background: i === 1 ? accent : 'rgba(255,255,255,0.04)',
              border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.08)',
              color: i === 1 ? '#fff' : '#A1A1AA',
              boxShadow: i === 1 ? `0 8px 24px ${accent}44` : 'none',
            }}>
            {s}
          </button>
        ))}
      </div>
      <div className="rounded-xl p-3 flex items-center justify-between"
        style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}>
        <span className="text-[11px] text-emerald-400 font-medium">✓ Confirmation sent via SMS</span>
        <span className="text-[10px] text-wa-ink-3">No call needed</span>
      </div>
    </div>
  )
}

export function LeadMockup({ accent = '#2563EB' }: MockupProps) {
  return (
    <div className="mockup-ui h-full flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex-1 h-1 rounded-full overflow-hidden bg-white/5">
            <div className="h-full rounded-full" style={{
              width: step <= 2 ? '100%' : '30%',
              background: step <= 2 ? accent : 'rgba(255,255,255,0.1)',
            }} />
          </div>
        ))}
      </div>
      <p className="text-sm font-display font-semibold text-wa-ink">Get a quote in 60 seconds</p>
      {['Company name', 'What do you need?', 'Budget range'].map((label, i) => (
        <div key={label} className="rounded-xl px-3 py-2.5 text-xs"
          style={{
            background: i === 1 ? accent + '18' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${i === 1 ? accent + '44' : 'rgba(255,255,255,0.08)'}`,
            color: i === 1 ? '#FAFAFA' : '#71717A',
          }}>
          {i === 1 ? 'Office renovation — Brussels' : label}
        </div>
      ))}
      <button type="button" className="mt-auto rounded-xl py-3 text-xs font-bold text-white"
        style={{ background: accent, boxShadow: `0 10px 28px ${accent}44` }}>
        Send my request →
      </button>
      <p className="text-[10px] text-center text-wa-ink-3">12 qualified leads last month from this form</p>
    </div>
  )
}

export function CatalogMockup({ accent = '#059669' }: MockupProps) {
  const products = [
    { name: 'Industrial Valve X42', spec: 'DN50 · SS316', price: 'RFQ' },
    { name: 'Pump Assembly P-9', spec: '220V · IP67', price: 'RFQ' },
    { name: 'Filter Unit F-12', spec: 'Export grade', price: 'RFQ' },
  ]

  return (
    <div className="mockup-ui h-full flex gap-3 p-4">
      <div className="w-24 shrink-0 flex flex-col gap-1.5">
        {['All', 'Valves', 'Pumps'].map((f, i) => (
          <div key={f} className="rounded-lg px-2 py-1.5 text-[10px] font-medium"
            style={{
              background: i === 0 ? accent + '22' : 'transparent',
              color: i === 0 ? accent : '#71717A',
              border: i === 0 ? `1px solid ${accent}44` : '1px solid transparent',
            }}>
            {f}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-display font-semibold text-wa-ink">B2B Catalog</p>
          <span className="text-[10px] text-wa-ink-3">FR · EN</span>
        </div>
        {products.map((p) => (
          <div key={p.name} className="rounded-xl p-2.5 flex items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <p className="text-[11px] font-semibold text-wa-ink">{p.name}</p>
              <p className="text-[10px] text-wa-ink-3">{p.spec}</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-lg"
              style={{ background: accent + '18', color: accent }}>{p.price}</span>
          </div>
        ))}
        <div className="mt-auto rounded-xl py-2.5 text-center text-[11px] font-semibold"
          style={{ background: accent, color: '#fff' }}>
          Request quote — 3 new export clients
        </div>
      </div>
    </div>
  )
}

export function ReservationMockup({ accent = '#D97706' }: MockupProps) {
  return (
    <div className="mockup-ui h-full flex flex-col gap-3 p-4">
      <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="h-16 relative" style={{ background: 'linear-gradient(135deg, #1a1208 0%, #2d1f0a 50%, #1a1208 100%)' }}>
          <div className="absolute inset-0 flex items-end p-3">
            <div>
              <p className="text-xs font-display font-semibold text-wa-ink">Maison Tagine</p>
              <p className="text-[10px] text-wa-ink-3">Marrakech · 8 rooms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['14 Jun', '15 Jun', '16 Jun'].map((d, i) => (
          <div key={d} className="rounded-lg py-2 text-center text-[10px] font-medium"
            style={{
              background: i === 1 ? accent + '28' : 'rgba(255,255,255,0.03)',
              border: i === 1 ? `1px solid ${accent}55` : '1px solid rgba(255,255,255,0.06)',
              color: i === 1 ? '#FAFAFA' : '#71717A',
            }}>
            {d}
          </div>
        ))}
      </div>
      <div className="rounded-xl p-3 flex flex-col gap-2"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex justify-between text-[11px]">
          <span className="text-wa-ink-2">Deluxe Suite · 2 nights</span>
          <span className="font-semibold text-wa-ink">€340</span>
        </div>
        <div className="flex justify-between text-[10px] text-emerald-400">
          <span>No Booking.com fee</span>
          <span>−€61 saved</span>
        </div>
      </div>
      <button type="button" className="rounded-xl py-3 text-xs font-bold text-black"
        style={{ background: '#FAFAFA', boxShadow: `0 8px 24px ${accent}33` }}>
        Book direct — pay now
      </button>
    </div>
  )
}

export function BeforeSiteMockup() {
  return (
    <div className="mockup-ui h-full flex flex-col gap-2 p-4 opacity-80">
      <div className="h-3 w-24 rounded bg-white/10" />
      <div className="h-2 w-full rounded bg-white/5" />
      <div className="h-2 w-4/5 rounded bg-white/5" />
      <div className="flex-1 rounded-xl mt-2 flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)' }}>
        <div className="text-center">
          <p className="text-[11px] text-wa-ink-3">No booking</p>
          <p className="text-[11px] text-wa-ink-3">No forms</p>
          <p className="text-[10px] text-red-400/80 mt-2">74% bounce rate</p>
        </div>
      </div>
      <p className="text-[10px] text-wa-ink-3 text-center">Template · 5.8s load · 2019</p>
    </div>
  )
}
