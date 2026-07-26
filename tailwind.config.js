/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFCF8',
          100: '#FAF8F1',
          200: '#F5F2E8',
          300: '#EFEADF',
        },
        sage: {
          50: '#F8FAF5',
          100: '#F1F5EE',
          200: '#E4ECDD',
          300: '#D2DEC8',
          400: '#B9CBB0',
        },
        moss: {
          700: '#3A4F3F',
          800: '#26362B',
          900: '#1A2620',
        },
        muted: {
          DEFAULT: '#6B7D6E',
          light: '#8A9A8C',
        },
        leaf: {
          300: '#9CC2A0',
          400: '#7BA67F',
          500: '#5F8A63',
          600: '#4E7352',
          700: '#3F5D43',
        },
        blossom: {
          200: '#F5DCD7',
          300: '#EFC9C2',
          400: '#E3A69E',
          500: '#D68C82',
        },
        pollen: {
          200: '#F6E6C4',
          300: '#F0D49A',
          400: '#E8BE72',
          500: '#D9A852',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Karla"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1.1s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'breathe-1': 'breathe 18s ease-in-out infinite',
        'breathe-2': 'breathe 22s ease-in-out infinite 2s',
        'breathe-3': 'breathe 26s ease-in-out infinite 4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.12)', opacity: '0.75' },
        },
      },
    },
  },
  plugins: [],
};
