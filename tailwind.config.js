/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#00aeef',
        brandAlt:'#006d95',
        pyellow: '#fff200',
        pred: '#ed1b24',
        primary : '#3c3c3d',
        icon: '#3c3c3d'
      },
    backgroundImage: {
      'pattern': "url('/src/assets/pattern.svg')",
       },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"]
    }
  },
  },
  plugins: [],
}

