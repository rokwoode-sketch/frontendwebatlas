'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VSL_SCRIPT } from '@/lib/seo'

const SCENE_DURATION_MS = 6000
const TOTAL_SCENES = VSL_SCRIPT.scenes.length

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M6 4.5l11 6.5-11 6.5V4.5z" fill="currentColor" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="13" y="4" width="4" height="14" rx="1" fill="currentColor" />
    </svg>
  )
}

export default function VSL() {
  const [playing, setPlaying] = useState(false)
  const [sceneIndex, setSceneIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const tickRef = useRef(0)

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = null
    setPlaying(false)
  }, [])

  const start = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    tickRef.current = 0
    setProgress(0)
    setPlaying(true)
    intervalRef.current = setInterval(() => {
      tickRef.current += 100
      const pct = Math.min((tickRef.current / SCENE_DURATION_MS) * 100, 100)
      setProgress(pct)
      if (tickRef.current >= SCENE_DURATION_MS) {
        tickRef.current = 0
        setProgress(0)
        setSceneIndex((prev) => {
          const next = prev + 1
          if (next >= TOTAL_SCENES) {
            stop()
            return 0
          }
          return next
        })
      }
    }, 100)
  }, [stop])

  const toggle = useCallback(() => {
    if (playing) stop()
    else start()
  }, [playing, start, stop])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  const scene = VSL_SCRIPT.scenes[sceneIndex]

  return (
    <section
      id="vsl"
      className="py-24 bg-bg-surface relative overflow-hidden"
      aria-labelledby="vsl-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      <div className="section relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <span className="label-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-wa-violet animate-pulse-glow" />
            90-second overview
          </span>
          <h2
            id="vsl-heading"
            className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight"
          >
            Watch why passive sites{' '}
            <span className="text-gradient">bleed revenue</span>
          </h2>
          <p className="text-wa-ink-2 text-base max-w-lg leading-relaxed">
            {VSL_SCRIPT.title}. Press play — or read the full transcript below for the complete story.
          </p>
        </div>

        {/* Player */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden border border-wa-border aspect-video flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0f0f12 0%, #1a1030 50%, #0f0f12 100%)' }}
            role="region"
            aria-label="Video sales letter player"
          >
            {/* Grid overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Scene text */}
            <div className="relative z-10 px-8 md:px-16 text-center min-h-[120px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={sceneIndex}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45 }}
                  className={`font-display leading-snug tracking-tight max-w-2xl ${
                    scene.emphasis
                      ? 'text-2xl md:text-4xl font-bold text-wa-ink'
                      : 'text-xl md:text-2xl font-medium text-wa-ink-2'
                  }`}
                >
                  {scene.text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-wa-border">
              <div
                className="h-full bg-wa-violet transition-none"
                style={{ width: `${playing ? progress : 0}%` }}
              />
            </div>

            {/* Scene counter */}
            <div className="absolute top-4 right-4 text-xs text-wa-ink-3 font-mono">
              {sceneIndex + 1} / {TOTAL_SCENES}
            </div>

            {/* Play overlay when paused at start */}
            {!playing && sceneIndex === 0 && progress === 0 && (
              <button
                onClick={start}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                aria-label="Play video sales letter"
              >
                <span className="w-16 h-16 rounded-full bg-wa-violet flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform"
                  style={{ boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}>
                  <PlayIcon />
                </span>
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4 mt-4 px-1">
            <button
              onClick={toggle}
              className="flex items-center gap-2 text-sm text-wa-ink-2 hover:text-wa-ink transition-colors"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              <span className="w-8 h-8 rounded-full border border-wa-border flex items-center justify-center">
                {playing ? <PauseIcon /> : <PlayIcon />}
              </span>
              {playing ? 'Pause' : sceneIndex > 0 ? 'Resume' : 'Play'}
            </button>

            <div className="flex gap-1">
              {VSL_SCRIPT.scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { stop(); setSceneIndex(i); setProgress(0) }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === sceneIndex ? 'w-6 bg-wa-violet' : 'w-1.5 bg-wa-border hover:bg-wa-ink-3'
                  }`}
                  aria-label={`Go to scene ${i + 1}`}
                />
              ))}
            </div>

            <Link href="/contact" className="btn-primary text-sm px-5 py-2 hidden sm:inline-flex">
              Book Free Audit
            </Link>
          </div>

          {/* Transcript — critical for AEO/SEO */}
          <details className="mt-8 border border-wa-border rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer text-sm font-display font-semibold text-wa-ink hover:bg-bg-raised transition-colors list-none flex items-center justify-between">
              Full transcript
              <span className="text-wa-ink-3 group-open:rotate-45 transition-transform text-lg">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1">
              <p className="text-wa-ink-2 text-sm leading-relaxed whitespace-pre-line">
                {VSL_SCRIPT.transcript}
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
