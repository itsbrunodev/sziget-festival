/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f6ee",
          100: "#ece6d0",
          200: "#ddd1ab",
          300: "#cab37a",
          400: "#ba9955",
          500: "#ab8547",
          600: "#926b3c",
          700: "#765132",
          800: "#64442f",
          900: "#563b2d",
          950: "#311f17",
        },
        zinc: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      maxWidth: {
        content: "1000px",
      },
    },
  },
  plugins: [],
};
