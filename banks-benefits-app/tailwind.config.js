/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#80BCBD',
        secondary: '#AAD9BB',
        tertiary: '#D5F0C1',
        quaternary: '#F9F7C9'
      },
    },
  },
  plugins: [],
}