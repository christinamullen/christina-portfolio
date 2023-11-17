/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bubacan-image': "url('/src/assets/images/bubbacan.jpg')",
        'flexgrid-image': "url('/src/assets/images/FlexboxGrid.jpg')",
      })
    },
  },
  plugins: [],
}

