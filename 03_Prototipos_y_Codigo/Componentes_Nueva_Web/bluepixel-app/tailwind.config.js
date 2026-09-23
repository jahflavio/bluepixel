/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        onest: ['Onest', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#03050B',
          900: '#060A14',
          850: '#0A0F1D',
          800: '#0F1628',
          750: '#131D35',
          700: '#1A2540',
          600: '#253456',
        }
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
