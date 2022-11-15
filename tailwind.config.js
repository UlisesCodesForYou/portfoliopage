/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '576px',
      // => @media (min-width: 576px) { ... }

      'tablet': '820px',
      // => @media (min-width: 960px) { ... }

      'desktop': '1058px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      pageFont: ['Source Code Pro']
    },
},
  plugins: [],
}