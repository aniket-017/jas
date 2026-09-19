/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        nav: '981px',
      },
      colors: {
        // Core surface — deep industrial navy
        navy: {
          950: '#050D22',
          900: '#0A1733',
          800: '#102244',
          700: '#17305C',
          600: '#22407A',
          500: '#33559B',
        },
        // Signal accent — JAS orange
        brand: {
          700: '#C4470F',
          600: '#E05713',
          500: '#F4762A',
          400: '#FB9455',
          300: '#FDB489',
          100: '#FDE7DA',
          50: '#FFF5EF',
        },
        // Data accent — used for charts, process, technical marks
        data: {
          600: '#1E7FD4',
          500: '#3B9DF0',
          400: '#6BB8F7',
          300: '#A5D5FB',
        },
        canvas: {
          DEFAULT: '#FAFAF9',
          alt: '#F3F5FA',
          deep: '#EBEEF6',
        },
        ink: '#0E1626',
        muted: {
          DEFAULT: '#5B647A',
          light: '#858FA6',
        },
        line: {
          DEFAULT: '#E4E7F0',
          strong: '#D2D7E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display scale — one ramp used across every section
        'display-xl': ['clamp(2.25rem, 1.4rem + 3.9vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.95rem, 1.3rem + 2.8vw, 3.1rem)', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
        'display-md': ['clamp(1.6rem, 1.2rem + 1.7vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.018em' }],
      },
      maxWidth: {
        site: '1200px',
      },
      spacing: {
        section: '5.5rem',
        'section-lg': '8rem',
      },
      boxShadow: {
        card: '0 2px 4px -2px rgba(10,23,51,0.06), 0 12px 32px -12px rgba(10,23,51,0.16)',
        'card-hover': '0 4px 8px -4px rgba(10,23,51,0.08), 0 24px 48px -16px rgba(10,23,51,0.22)',
        panel: '0 32px 64px -24px rgba(10,23,51,0.32)',
        glow: '0 0 0 1px rgba(244,118,42,0.2), 0 8px 28px -8px rgba(244,118,42,0.38)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.82)' },
        },
        'flow-line': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '32px 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        'flow-line': 'flow-line 1.4s linear infinite',
      },
    },
  },
  plugins: [],
}
