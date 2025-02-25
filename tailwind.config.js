/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff9933',
          light: '#fff5ea',
          lighter: '#fff5ea',
          dark: '#ce7a26',
          darker: '#c57524'
        }
      }
    },
  },
  plugins: [],
};