module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink-cyber': '#EF5DA8',
        'blue-cyber': '#252F88',
        'yellow-cyber': '#FFA800'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
