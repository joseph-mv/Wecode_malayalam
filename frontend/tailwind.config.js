/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: 'var(--main-bg-color)',
        primaryClr:'var(--primary-color)',
        secondaryClr:'var(--secondary-color)',
        mainText: 'var(--main-text-color)',
      },
      backgroundImage:{
        hero_bg:"url(/images/heroBg.webp)"
      }
    },
  },
  plugins: [],
}
