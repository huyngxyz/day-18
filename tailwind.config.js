/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabinet': ['Cabinet-Grotesk', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans'],
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      }
    },
  },
  plugins: [],
}