/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: '#808080',
        black: '#000000',
        white: '#ffffff',
        purple: 'rgba(96,0,96, 1)',
        purplelight: 'rgba(142,0,142,0.9)',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca'
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
