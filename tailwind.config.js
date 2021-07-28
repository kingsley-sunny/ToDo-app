module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'maxa': '88rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
