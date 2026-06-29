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
          DEFAULT: '#030308',
          surface: '#0A0A14',
          raised:  '#12121F',
        },
        wa: {
          /* Premium indigo — primary brand */
          violet:     '#5E6AD2',
          'violet-l': '#A5B4FC',
          'violet-m': 'rgba(94,106,210,0.14)',
          'violet-g': 'rgba(94,106,210,0.38)',
          /* Futuristic cyan — secondary accent */
          gold:       '#38BDF8',
          'gold-l':   '#7DD3FC',
          /* Champagne platinum — tertiary */
          champagne:  '#C8B496',
          border:     'rgba(148,163,184,0.12)',
          'border-s': 'rgba(148,163,184,0.06)',
          ink:        '#F4F4F8',
          'ink-2':    '#9494A8',
          'ink-3':    '#5C5C72',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',         'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d-sm':  '0 1px 0 rgba(255,255,255,0.1) inset, 0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        '3d-md':  '0 2px 0 rgba(255,255,255,0.12) inset, 0 20px 50px rgba(0,0,0,0.55), 0 0 40px rgba(94,106,210,0.12)',
        '3d-lg':  '0 2px 0 rgba(255,255,255,0.14) inset, 0 32px 80px rgba(0,0,0,0.65), 0 0 60px rgba(56,189,248,0.1)',
        'glow-indigo': '0 0 40px rgba(94,106,210,0.35)',
        'glow-cyan':   '0 0 40px rgba(56,189,248,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0px) rotateX(12deg) rotateY(-8deg)' },
          '50%':      { transform: 'translateY(-14px) rotateX(8deg) rotateY(-4deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease forwards',
        'float-3d':   'float-3d 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer':    'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
