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
      screens: {
        'sm': '0px',
        // => @media (min-width: 640px) { ... }
  
        'md': '770px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '800px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '900px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1000px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

