/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'], // Adding the custom font
      },
    },
  },
  plugins: [],
}

