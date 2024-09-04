/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#E7F0FE',
        bgBody: '#3B5987',
        border2: '#999999',
        border1: '#FFAA00',
        border3: '#BA4615',
        underline: '#3B5987',
        text: '#2C2C2C',
      },
      fontWeight:{
        'bold-500': 500,
      },
      borderRadius: {
        '5xl': '2.5rem', 
      },
      height: {
        '2/5': '40%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

