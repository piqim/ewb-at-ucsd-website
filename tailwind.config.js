/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ucsd-navy':  '#182B49',
        'ucsd-gold':  '#C69214',
        'ewb-blue':   '#0065B2',
        'discord':    '#5865F2',
        'instagram':  '#C13584',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};