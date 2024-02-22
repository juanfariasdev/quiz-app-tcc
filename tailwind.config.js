/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f0edff',
          300: '#c4b7ff',
          500: '#6949ff',
          700: '#543acc',
        },
      },
    },
  },
  plugins: [],
};
