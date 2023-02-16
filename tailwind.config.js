// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['SpaceGrotesk', 'sans-serif'],
    },

    extend: {
      colors: {
        purple: {
          50: '#FCEAFF',
          100: '#F6C4FF',
          200: '#F19FFF',
          300: '#EB7AFF',
          400: '#E654FF',
          500: '#E02FFF',
          600: '#C915E8',
          700: '#A300BF',
          800: '#800096',
          900: '#5D006D',
        },
        green: {
          50: '#EAFFF5',
          100: '#C4FFE4',
          200: '#9FFFD3',
          300: '#7AFFC1',
          400: '#54FFB0',
          500: '#2FFF9F',
          600: '#15E887',
          700: '#00BF67',
          800: '#009651',
          900: '#006D3B',
        },
        gold: {
          50: '#FFF6E5',
          100: '#FFE5B7',
          200: '#FFD58A',
          300: '#FFC55C',
          400: '#FFB42E',
          500: '#E99600',
          600: '#C07C00',
          700: '#976200',
          800: '#6F4700',
          900: '#462D00',
        },
      }
    },
  },
  plugins: [],
};
