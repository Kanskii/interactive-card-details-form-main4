// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        purple: "hsl(278, 94%, 30%)",
        blue: "hsl(249, 99%, 64%)",
        red: "hsl(0, 100%, 66%)",
      },
      neutral: {
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(270, 3%, 87%)",
        "dark-gray": "hsl(279, 6%, 55%)",
        purple: "hsl(278, 68%, 11%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Space\\ Grotesk", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        homepage: "1fr minmax(1fr, 1280px) 1fr",
      },
    },
  },
  plugins: [],
};

