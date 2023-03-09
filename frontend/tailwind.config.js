/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
