/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "new-boxshawod":"0px 4px 12px rgba(0, 0, 0, 0.1)",
        "back-button":"0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
      },
      screens:{
        "new-sm-4":"200px",
        "new-sm-3":"300px",
        "new-sm-2":"400px",
        "new-sm-2-5":"500px",
        "new-sm":"600px",
        "new-sm-1":"670px",
        "new-md":"800px",
        "new-lg":"1000px",
        "new-xl":"1200px"
      }
    },
  },
  plugins: [],
}

