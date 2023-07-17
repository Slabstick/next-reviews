/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#f5faf6",
      background: "#0d1b11",
      primary: "#523e89",
      secondary: "#18301e",
      accent: "#b27762",
    },
  },
  plugins: [],
};
