/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        acordion: "url('/carousel/4.png')"
      },
      backgroundColor: theme => ({
        // ...theme('colors'),
        primary: '#004B8D',
        secondary: '#323267',
        tertiary: '#F6A704',
        twitter: '#45BBE3',
        facebook: '#3F51B5',
        black: '#4A4A4A'
      }),
      textColor: {
        primary: '#004B8D',
        secondary: '#323267',
        tertiary: '#F6A704',
        black: '#4A4A4A'
      },
      fontFamily: {
        Montserrat: ['Arial', 'sans-serif']
      },
      ringColor: {
        primary: '#004B8D',
        secondary: '#323267',
        tertiary: '#F6A704'
      },
      borderColor: {
        primary: '#004B8D',
        secondary: '#323267',
        tertiary: '#F6A704'
      }
    }
  },
  plugins: []
}
