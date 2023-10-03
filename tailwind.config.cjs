/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(12, 12, 13)',
        'background-light': '#f6f8fd',
      },
      gridTemplateColumns: {
        movie: 'repeat(auto-fill, minmax(180px, 1fr))',
        'movie-md': 'repeat(auto-fill, minmax(160px, 1fr))',
        'movie-sm': 'repeat(auto-fill, minmax(150px, 1fr))',
        'movie-xs': 'repeat(auto-fill, minmax(120px, 1fr))',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0.5rem',
        lg: '1rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
