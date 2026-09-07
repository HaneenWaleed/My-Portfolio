/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08080B',
        surface: '#0E0E13',
        raised: '#151420',
        bloom: '#F2437A',
        violet: '#6C4CE0',
        cyan: '#FF4FA0',
        blush: '#FF9BC6',
        paper: '#F7F5F8',
        dim: '#8B8794',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        clamp1: 'clamp(2.75rem, 8vw, 7.5rem)',
        clamp2: 'clamp(2rem, 5vw, 4rem)',
        clamp3: 'clamp(1.5rem, 3vw, 2.25rem)',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
