/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors :{
        strongCyan : '#26bba4',
      }
     },
    fontFamily:{
      sans : ["Bai Jamjuree","san-serif"],
      serif : ["Merriweather","serif"]
    }
  },
  plugins: [],
}

