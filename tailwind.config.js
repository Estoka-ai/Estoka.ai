/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#db00cd',
          light: '#f9d2f6',
          lighter: '#f9d2f6',
          dark: '#b000a5',
          darker: '#8c0082'
        }
      }
    },
  },
  plugins: [],
};