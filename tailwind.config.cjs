/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      primary: {
        100: "#818EFF",
        200: "#4451D5",
        300: "#7A36E5",
      },
      secondary: {
        100: "#F9DEC5",
        200: "#F36607",
      },
      paper: {
        100: "#FCFAFE",
        200: "#E3E0E7",
      },
      grey: "#202122",
    },
    extend: {},
  },
  plugins: [],
};
