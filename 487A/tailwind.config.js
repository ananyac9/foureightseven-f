/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'backdrop': 'ffffff'
    },
    fontFamily: {
      'EBGaramond': ['EB Garamond', 'serif'],
      'specialelite': ['Special Elite', 'cursive'],
    },
    flexBasis:{
      '22': '22%',
      '1/2': '50%',
    },
    extend: {},
  },
  plugins: [],
}


// TODO: add rates to right side
// complete carousel
// fonts maybe
// checkered shadow
// animation
// fix flexbox on right