import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          surface: '#F8FAFC',
          raised:  '#F1F5F9',
        },
        wa: {
          /* Professional slate accent (class name kept for compat) */
          violet:     '#0F172A',
          'violet-l': '#334155',
          'violet-m': 'rgba(15,23,42,0.06)',
          'violet-g': 'rgba(15,23,42,0.16)',
          gold:       '#475569',
          'gold-l':   '#64748B',
          champagne:  '#94A3B8',
          border:     'rgba(15,23,42,0.1)',
          'border-s': 'rgba(15,23,42,0.06)',
          ink:        '#0F172A',
          'ink-2':    '#475569',
          'ink-3':    '#94A3B8',
        },
      },
      fontFamily: {
        sans:    ['var(--font-arabic-sans)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-arabic-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d-sm':  '0 1px 2px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.08)',
        '3d-md':  '0 4px 16px rgba(15,23,42,0.08), 0 1px 3px rgba(15,23,42,0.06)',
        '3d-lg':  '0 12px 40px rgba(15,23,42,0.1), 0 4px 12px rgba(15,23,42,0.06)',
        'glow-indigo': '0 8px 24px rgba(15,23,42,0.12)',
        'glow-cyan':   '0 8px 24px rgba(15,23,42,0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.45' },
          '50%':      { opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.55s ease forwards',
        'float-3d':   'float-3d 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer':    'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
