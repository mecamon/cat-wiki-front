module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'footer': '48px'
      },
      height: {
        'main-sections': '520px'
      },
      maxHeight: {

      },
      backgroundColor: {
        'main-section': '#E3E1DC',
        'secondary':  '#979797',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
