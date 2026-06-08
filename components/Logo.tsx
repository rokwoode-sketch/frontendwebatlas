import Link from 'next/link'

/** Text-only wordmark — no icon, no target */
export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-3xl md:text-4xl',
  }

  return (
    <Link href="/" className="group inline-block" aria-label="WebAtlas home">
      <span className={`wordmark ${sizes[size]}`}>
        web<span className="wordmark-accent">atlas</span>
      </span>
    </Link>
  )
}
