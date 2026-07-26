/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D1A1C',
          950: '#0D1A1C',
          900: '#14262A',
          800: '#1C3237',
        },
        bone: {
          DEFAULT: '#EDEAE3',
          100: '#EDEAE3',
          200: '#D8D4CB',
        },
        muted: {
          DEFAULT: '#93A5A3',
          300: '#93A5A3',
          400: '#7A8C8A',
        },
        ocher: {
          DEFAULT: '#D9A441',
          400: '#D9A441',
          500: '#C2923A',
          600: '#A87C30',
        },
      },
      fontFamily: {
        display: ['"Familjen Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'resonance': 'resonance 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        resonance: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.6)' },
        },
      },
    },
  },
  plugins: [],
};
