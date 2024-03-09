/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "5fr": "repeat(5, 1fr)"
      },
      screens: {
        base: "200px"
      }
    }
  },
  plugins: []
};
