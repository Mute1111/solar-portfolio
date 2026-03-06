/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgba(10, 10, 30, 1)",         // main 3D scene background
        card: "rgba(255, 255, 255, 0.1)",  // glass panel background
        cardBorder: "rgba(255, 255, 255, 0.2)", // border for glass panels
        accent: "#FFD700",                  // example accent color (gold)
        textPrimary: "#FFFFFF",           // primary text color (white)
        textSecondary: "rgba(255,255,255,0.8)",
      },
      borderRadius: {
        card: "1.5rem", // 24px rounded corners for cards/panels
      },
      boxShadow: {
        card: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // frosted shadow
      },
    },
  },
  plugins: [],
};