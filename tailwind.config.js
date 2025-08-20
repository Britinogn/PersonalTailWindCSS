module.exports = {

  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx,html}"
  ],

  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {},
  plugins: [],
}
