/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      colors: {
        'white-grayish': '#ccd6f6',
        'white-grayish-hover': '#9ba2ba',
        'dark-hover': '#2c3a4d',
        'dark-second': '#2a2e39',
        'dark-main': '#1E222D',
      },
    },
  },
  plugins: [
  ],
}