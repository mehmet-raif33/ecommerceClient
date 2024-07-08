/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'home': "url('./src/assets/images/HomeIcon.png')",
        'homeIsClicked': "url('./src/assets/images/HomeIconIsClicked.png')",
      }
    },
  },
  plugins: [],
}

