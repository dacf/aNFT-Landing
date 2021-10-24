module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsxz}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('/Users/diegochui/Desktop/anft-landing/autosite-v3/public/SPACE_VAGINA.png')",
      },
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
