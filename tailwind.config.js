module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-1000': '#0c121d',
        'gray-1100': '#080b11',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
