/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        "phone":"550px",
        "tablet":"750px",
        "laptop":"1000px"
      },
      height: {
        '128': '32rem',
      },
      width:{
        '150': '40rem',
        '100': '35rem',
        '125': '38rem',
        '175': '45rem',
        '200': '50rem'
      }
    },
  },
  plugins: [],
}