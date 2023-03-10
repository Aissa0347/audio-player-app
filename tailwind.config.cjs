/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{ts,js,tsx,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pally: ["Pally", "sans-serif"],
      },
      colors: {
        background: "#f6f6f6",
        foreground: "#27292d",
        neutral: {
          50: "#fafafa",
          100: "#f5f5f6",
          200: "#e7e8e9",
          300: "#d6d7d9",
          400: "#a4a5a8",
          500: "#737578",
          600: "#545659",
          700: "#414246",
          800: "#27292d",
          900: "#16181c",
        },
        blue: {
          50: "#f9fafb",
          100: "#eeeff1",
          200: "#dcdee2",
          300: "#c5c9cf",
          400: "#9096a3",
          500: "#606676",
          600: "#414a5a",
          700: "#2e3749",
          800: "#1c2534",
          900: "#121827",
        },
        purple: {
          50: "#fafafa",
          100: "#f4f4f6",
          200: "#e4e4ea",
          300: "#d4d4de",
          400: "#9f9fbf",
          500: "#6e6e98",
          600: "#4e4b86",
          700: "#3d3d56",
          800: "#27272c",
          900: "#18181b",
        },
        yellow: {
          50: "#fcfde9",
          100: "#fdffc7",
          200: "#fefb8e",
          300: "#ffef44",
          400: "#fad900",
          500: "#e9bd00",
          600: "#c89100",
          700: "#9f6700",
          800: "#835002",
          900: "#6f410b",
        },
      },
    },
  },
  plugins: [],
};
