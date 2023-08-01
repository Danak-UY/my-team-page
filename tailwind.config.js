/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const animationPlugin = require("tailwindcss-animate");

module.exports = {
  content: ["./index.html", "./js/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        200: "2",
      },
      fontSize: {
        xxs: "0.6875rem",
      },
      aspectRatio: {
        person: "476 / 682",
      },
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
    animationPlugin
  ],
};
