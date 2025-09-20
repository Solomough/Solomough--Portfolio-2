/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e", // green accent for your portfolio
        secondary: "#f59e0b", // subtle gold accent
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
