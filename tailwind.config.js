/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        // "new-boxshawod":"0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
        "new-boxshawod":"0px 4px 12px rgba(0, 0, 0, 0.1)",
        "back-button":"0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
      }
    },
  },
  plugins: [],
}

