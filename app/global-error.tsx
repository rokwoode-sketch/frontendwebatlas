'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#09090B', color: '#FAFAFA', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 24, textAlign: 'center' }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>WebAtlas</h1>
          <p style={{ color: '#A1A1AA', maxWidth: 400, lineHeight: 1.6, margin: 0 }}>
            Something broke at the root level. Refresh the page or try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: '#5E6AD2',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '12px 24px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
          {process.env.NODE_ENV === 'development' && (
            <pre style={{ color: '#52525B', fontSize: 11, maxWidth: 600, overflow: 'auto', textAlign: 'left' }}>
              {error.message}
            </pre>
          )}
        </div>
      </body>
    </html>
  )
}
