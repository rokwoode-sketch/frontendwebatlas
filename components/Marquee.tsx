'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MarqueeProps {
  items: string[]
  speed?: number          // seconds per full loop
  separator?: ReactNode
  className?: string
  itemClassName?: string
  direction?: 'left' | 'right'
}

export function Marquee({
  items,
  speed = 28,
  separator = <span className="text-wa-violet mx-3" aria-hidden="true">·</span>,
  className = '',
  itemClassName = '',
  direction = 'left',
}: MarqueeProps) {
  // Duplicate enough times to fill any screen width seamlessly
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden flex select-none ${className}`} aria-hidden="true">
      <motion.div
        className="flex items-center whitespace-nowrap shrink-0"
        animate={{ x: direction === 'left' ? ['0%', '-25%'] : ['-25%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className={`text-sm font-medium text-wa-ink-3 ${itemClassName}`}>
              {item}
            </span>
            {separator}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
