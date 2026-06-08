import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="label-pill">404</p>
      <h1 className="font-display font-bold text-3xl text-wa-ink tracking-tight">
        Page not found
      </h1>
      <p className="text-wa-ink-2 text-sm max-w-md">
        This page doesn&apos;t exist. Head back to the homepage or contact us.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/contact" className="btn-ghost">Contact</Link>
      </div>
    </div>
  )
}
