/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-hind-siliguri)"],
        newsreader: ["var(--font-newsreader)"],
      },
      colors: {
        brand: {
          textPrimary: "#E0E0E0",
          textSecondary: "#A0A0A0",
          textTerciary: "#FFF",
          buttonback: "#171717",
          background: "#1c1c1c",
        },
      },
    },
  },
  plugins: [],
};
