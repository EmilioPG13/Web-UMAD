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
          navy:        '#1B2A6B',
          'navy-dark': '#101D4E',
          'navy-light':'#2E4099',
          red:         '#E31E25',
          'red-dark':  '#B81920',
          cream:       '#F5F3EE',
          gray:        '#6B7280',
        }
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(27,42,107,0.92) 0%, rgba(16,29,78,0.75) 100%)',
      }
    },
  },
  plugins: [],
}

export default config
