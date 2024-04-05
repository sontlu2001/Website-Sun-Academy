/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "user-background": "url('../src/assets/wallpaper.jpg')",
        "primary-gradient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        )`
      },
      boxShadow: {
        "custom": "0 3px 6px rgba(0,0,0,.16);",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
