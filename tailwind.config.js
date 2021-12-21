module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'TentangNanti':['TentangNanti', 'sans-serif'],
        'Montserrat':['Montserrat', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif']
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
