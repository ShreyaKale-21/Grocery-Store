/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Inter, sans-serif', // Adds a new `font-display` class
        dosis: 'dosis , sans-serif',
      }
    },
  },
  plugins: [],
}

