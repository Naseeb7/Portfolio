/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blue : {
        100 : '#b1ddf1',
        200 : '#91d7f8',
        300 : '#60cafb',
        400 : '#2dbafb',
        500 : '#00abfa',
        600 : '#0081bd',
        700 : '#015a83',
        800 : '#013751',
        900 : '#001b29',
      },
    },
  },
  plugins: [],
}

