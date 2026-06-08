'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type ReactNode, type CSSProperties } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  accent?: string
  intensity?: number
  glow?: boolean
  as?: 'div' | 'article' | 'figure'
}

export function GlassCard({
  children,
  className = '',
  style,
  accent = '#5E6AD2',
  intensity = 12,
  glow = true,
  as = 'div',
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 180, damping: 22 })
  const shineX = useSpring(useTransform(mx, [-0.5, 0.5], [0, 100]), { stiffness: 120, damping: 20 })
  const shineY = useSpring(useTransform(my, [-0.5, 0.5], [0, 100]), { stiffness: 120, damping: 20 })

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  const Tag = motion[as] as typeof motion.div

  return (
    <Tag
      ref={ref}
      className={`glass-card group ${glow ? 'glass-card-glow' : ''} ${className}`}
      style={{
        ...style,
        '--card-accent': accent,
        rotateX,
        rotateY,
      } as CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{
        y: -8,
        scale: 1.01,
        transition: { type: 'spring', stiffness: 260, damping: 22 },
      }}
    >
      {/* Accent edge glow */}
      <div className="glass-card-edge" aria-hidden="true" />

      {/* Cursor-following shine */}
      <motion.div
        className="glass-card-shine"
        aria-hidden="true"
        style={{
          background: `radial-gradient(600px circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.14), transparent 40%)`,
        }}
      />

      <div className="glass-card-inner">
        {children}
      </div>
    </Tag>
  )
}
