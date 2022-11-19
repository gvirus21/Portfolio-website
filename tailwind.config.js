/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '670px',
      'lg': '1200px',
      'xl': '1440px',
      '2xl': '2100px',

    },
    extend: {},
  },
  plugins: [],
}
