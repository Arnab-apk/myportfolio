/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD400',
        'brand-dark': '#050816',
        'brand-card': '#0b1020',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
}
