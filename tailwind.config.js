/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "user-background": "url('../src/assets/wallpaper.jpg')",
      },
      colors: {
        "primary": "#C89F84",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
