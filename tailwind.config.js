/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#22c55e",      // green brand color for portfolio highlights
        primary: "#22c55e",    // can be used interchangeably with brand
        secondary: "#f59e0b",  // subtle gold accent
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
