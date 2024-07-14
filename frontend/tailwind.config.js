/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mycolor : "#D4AF37"
      },
      fontFamily: {
        "primary" :  "'Poetsen One', 'sans-serif';"
      },
      boxShadow: {
        'gold': '0 4px 6px rgba(212, 175, 55, 0.3), 0 10px 15px rgba(212, 175, 55, 0.2), 0 20px 25px rgba(212, 175, 55, 0.1)',
      }
    },
  },
  plugins: [],
  
}

