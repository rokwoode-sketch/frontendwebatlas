'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DEFAULT_PHONE = '+212600000000'

const QUICK_MESSAGES = [
  { label: 'Custom project', text: "Hi WebAtlas — I have a custom project in mind and want to know if you can build it." },
  { label: 'Free site audit', text: "Hi WebAtlas — I'd like a free audit of my current website." },
  { label: 'Get a quote', text: "Hi WebAtlas — I'd like a quote for something I want built." },
] as const

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function phoneToWaId(phone: string): string {
  return phone.replace(/\D/g, '')
}

function buildWaUrl(phone: string, message: string): string {
  const id = phoneToWaId(phone)
  return `https://wa.me/${id}?text=${encodeURIComponent(message)}`
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const phone = process.env.NEXT_PUBLIC_WHATSAPP?.trim() || DEFAULT_PHONE

  const openChat = useCallback(
    (message: string) => {
      window.open(buildWaUrl(phone, message), '_blank', 'noopener,noreferrer')
      setOpen(false)
    },
    [phone]
  )

  return (
    <div className="wa-widget" aria-label="WhatsApp contact">
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="wa-widget-backdrop"
              aria-label="Close WhatsApp panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="wa-widget-panel"
              role="dialog"
              aria-labelledby="wa-widget-title"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="wa-widget-panel-glow" aria-hidden="true" />

              <header className="wa-widget-header">
                <div className="wa-widget-avatar">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="wa-widget-header-text">
                  <p id="wa-widget-title" className="wa-widget-brand">WebAtlas Studio</p>
                  <p className="wa-widget-status">
                    <span className="wa-widget-status-dot" aria-hidden="true" />
                    Typically replies within 4 hours
                  </p>
                </div>
                <button
                  type="button"
                  className="wa-widget-close"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </button>
              </header>

              <div className="wa-widget-body">
                <p className="wa-widget-headline">Need a site that actually converts?</p>
                <p className="wa-widget-sub">
                  Tell us what you want built — anything from a booking flow to a full custom platform. We&apos;ll respond on WhatsApp.
                </p>

                <div className="wa-widget-chips">
                  {QUICK_MESSAGES.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className="wa-widget-chip"
                      onClick={() => openChat(item.text)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="wa-widget-cta"
                  onClick={() => openChat("Hi WebAtlas — I'm interested in a new website project.")}
                >
                  <WhatsAppIcon size={18} />
                  Start a conversation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="wa-widget-trigger"
        aria-label={open ? 'Close WhatsApp' : 'Open WhatsApp chat'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="wa-widget-trigger-ring" aria-hidden="true" />
        <span className="wa-widget-trigger-ring wa-widget-trigger-ring-2" aria-hidden="true" />
        <span className="wa-widget-trigger-inner">
          {open ? <CloseIcon /> : <WhatsAppIcon size={24} />}
        </span>
        {!open && <span className="wa-widget-trigger-label">Chat</span>}
      </motion.button>
    </div>
  )
}
