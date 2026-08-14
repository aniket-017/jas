/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        nav: '981px',
      },
      colors: {
        navy: {
          950: '#071230',
          900: '#0B1B42',
          800: '#132a5e',
          600: '#2c4487',
        },
        brand: {
          600: '#E85D1F',
          500: '#F4762A',
          100: '#FDE7DA',
        },
        canvas: {
          DEFAULT: '#FAFAF9',
          alt: '#F2F4FA',
        },
        ink: '#0E1626',
        muted: {
          DEFAULT: '#5B647A',
          light: '#8891A5',
        },
        line: '#E6E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1180px',
      },
      boxShadow: {
        card: '0 8px 24px -8px rgba(11,27,66,0.18)',
        panel: '0 24px 48px -16px rgba(11,27,66,0.28)',
      },
    },
  },
  plugins: [],
}
