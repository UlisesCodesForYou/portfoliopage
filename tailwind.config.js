/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pageFont: ["Source Code Pro"],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1C847A",
        },
      },
    ],
  },
};

// Remove the bg thing if the text goes away.
// backgroundImage: {
//   "layered-waves": "url('../public/blurry-gradient3.png')",
// },
