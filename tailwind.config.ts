import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        umad: {
          navy:        '#0B1F4B',
          'navy-dark': '#07142F',
          'navy-light':'#1A3A7A',
          red:         '#C8102E',
          'red-dark':  '#A00D25',
          gold:        '#C89B3C',
          cream:       '#FFFFFF',
          gray:        '#6B7280',
          graphite:    '#1A1A1A',
        }
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(11,31,75,0.92) 0%, rgba(7,20,47,0.75) 100%)',
      }
    },
  },
  plugins: [],
}

export default config
