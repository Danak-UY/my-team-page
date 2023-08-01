/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./js/*.js"],
  darkMode: "class",
  // variants: {
  //   extend: {
  //     margin: ["even", "odd"],
  //   },
  // },
  theme: {
    extend: {
      colors: {
        gray: {
          "x-light": "#BDBDBD",
          light: "#4f4f4f",
          dark: "#333333",
        },
        gold: {
          DEFAULT: "#fdd05b",
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ['"PT Serif"', "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("middle", "&:nth-child(3n+2)");
    }),
  ],
};
