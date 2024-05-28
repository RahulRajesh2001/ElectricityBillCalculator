/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        vvsm:"250px",
        vsm:"360px",
        ssm:"400px",
        sm:"640px",
        md:"769px",
        lg:"1024px",
        xl:"1280px",
        xxl:"1800px"
      },
    },
  },
  plugins: [],
}

