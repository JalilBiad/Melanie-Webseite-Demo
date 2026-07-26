/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#1a1816',
        },
        clay: {
          50: '#fbf6f1',
          100: '#f5ebe0',
          200: '#ead5c0',
          300: '#dcb89a',
          400: '#c99368',
          500: '#b8764a',
          600: '#a35d3a',
          700: '#844a30',
          800: '#6b3d2b',
          900: '#573327',
          950: '#3d2419',
        },
        sage: {
          50: '#f4f7f3',
          100: '#e6ede3',
          200: '#cedbc8',
          300: '#aac0a2',
          400: '#84a078',
          500: '#658460',
          600: '#4f6a4b',
          700: '#3f553d',
          800: '#344432',
          900: '#2c392b',
          950: '#1a221a',
        },
        amber: {
          50: '#fef9ee',
          100: '#fbecc8',
          200: '#f6d78c',
          300: '#f0bb50',
          400: '#ea9f2a',
          500: '#d4811a',
          600: '#b86314',
          700: '#944a16',
          800: '#7a3c17',
          900: '#663217',
          950: '#3c1b09',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
