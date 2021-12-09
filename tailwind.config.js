module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'footer': '48px'
      },
      width: {
        's-12': '12vw',
        's-32': '32vw',
        's-40': '40vw',
        's-45': '45vw'
      },
      height: {
        'main-sections': '520px',
        's-12': '12vw',
        's-32': '32vw',
        's-40': '40vw',
        's-45': '45vw'
      },
      maxHeight: {

      },
      minHeight: {
        'main-sections': '520px'
      },
      backgroundColor: {
        'main-section': '#E3E1DC',
        'secondary':  '#979797',
        'third': '#4D270C',
        'fourth': '#E0E0E0',
        'fifth': '#544439'
      },
      textColor: {
        'strong': '#291507'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
