'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="label-pill">Something went wrong</p>
      <h1 className="font-display font-bold text-3xl text-wa-ink tracking-tight">
        We hit a snag
      </h1>
      <p className="text-wa-ink-2 text-sm max-w-md leading-relaxed">
        The page failed to load. Try again — if it keeps happening, refresh the browser or restart the dev server.
      </p>
      <div className="flex gap-3">
        <button type="button" onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-ghost">
          Go home
        </Link>
      </div>
    </div>
  )
}
