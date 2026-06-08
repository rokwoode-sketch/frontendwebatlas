'use client'

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
  type MotionValue,
} from 'framer-motion'
import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from 'react'

// ─── Easing curves ────────────────────────────────────────────────────────────
export const ease = {
  smooth:  [0.16, 1, 0.3, 1]    as const,
  snappy:  [0.2, 0, 0, 1]       as const,
  spring:  { type: 'spring', stiffness: 260, damping: 22 } as const,
  springS: { type: 'spring', stiffness: 180, damping: 18 } as const,
}

// ─── Shared variants ──────────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(6px)'  },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.7, ease: ease.smooth } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.93, filter: 'blur(4px)' },
  visible: { opacity: 1, scale: 1,   filter: 'blur(0px)',
    transition: { duration: 0.6, ease: ease.smooth } },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 0.65, ease: ease.smooth } },
}

const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

// ─── Reveal ───────────────────────────────────────────────────────────────────
// Scroll-triggered animation for a single element.
export function Reveal({
  children,
  className,
  style,
  variants = fadeUp,
  delay = 0,
  once = true,
  margin = '0px 0px -60px 0px',
  as: Tag = 'div',
  immediate = false,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  variants?: Variants
  delay?: number
  once?: boolean
  margin?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'p'
  /** Skip scroll trigger — content visible on mount (use for hero/above-fold) */
  immediate?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin, amount: 0.15 } as Parameters<typeof useInView>[1])

  const MotionTag = motion[Tag] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      variants={variants}
      initial={immediate ? 'visible' : 'hidden'}
      animate={immediate || inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

// ─── StaggerReveal ────────────────────────────────────────────────────────────
// Stagger-animates direct children. Each child must use a motion variant.
export function StaggerReveal({
  children,
  className,
  style,
  delay = 0,
  stagger = 0.09,
  once = true,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  stagger?: number
  once?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -60px 0px', amount: 0.1 } as Parameters<typeof useInView>[1])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={{ ...staggerContainer, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

// ─── WordReveal ───────────────────────────────────────────────────────────────
// Premium "text curtain" reveal: each word slides up from below.
export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.065,
  once = true,
  immediate = false,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  once?: boolean
  immediate?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px', amount: 0.01 } as Parameters<typeof useInView>[1])
  const words = text.split(' ')
  const show = immediate || inView

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
          <motion.span
            className={`inline-block ${wordClassName ?? ''}`}
            initial={immediate ? { y: '0%', opacity: 1 } : { y: '108%', opacity: 0 }}
            animate={show ? { y: '0%', opacity: 1 } : { y: '108%', opacity: 0 }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.72,
              ease: ease.smooth,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </span>
  )
}

// ─── Counter ──────────────────────────────────────────────────────────────────
// Counts up from 0 to `to` when scrolled into view.
export function Counter({
  to,
  duration = 1.8,
  suffix = '',
  prefix = '',
}: {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px', amount: 0.2 } as Parameters<typeof useInView>[1])
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const startTime = performance.now()
    const endTime = startTime + duration * 1000

    function tick(now: number) {
      const raw = Math.min((now - startTime) / (endTime - startTime), 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - raw, 3)
      setDisplay(Math.round(eased * to))
      if (raw < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

// ─── TiltCard ─────────────────────────────────────────────────────────────────
// Responds to mouse position with a subtle 3-D tilt + floating lift on hover.
export function TiltCard({
  children,
  className,
  style,
  intensity = 7,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  intensity?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = (e.clientX - rect.left) / rect.width  - 0.5
    const cy = (e.clientY - rect.top)  / rect.height - 0.5
    setTilt({ x: -cy * intensity, y: cx * intensity })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d', perspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, translateY: 0 }}
      whileHover={{ translateY: -5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}

// ─── ScrollLine ───────────────────────────────────────────────────────────────
// A vertical line whose height is driven by scroll progress through a container.
export function ScrollLine({
  containerRef,
  className,
}: {
  containerRef: React.RefObject<HTMLElement>
  className?: string
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 40%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  return (
    <div className={`relative ${className ?? ''}`}>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-wa-border" />
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-wa-violet origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  )
}

// ─── ParallaxFloat ────────────────────────────────────────────────────────────
// Element moves at a different scroll speed — for depth/parallax.
export function ParallaxFloat({
  children,
  speed = 0.15,
  className,
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * -100}%`])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}
