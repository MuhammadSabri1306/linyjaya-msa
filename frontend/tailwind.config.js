const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    fontFamily: {
      "sans": ["DM Sans", ...defaultTheme.fontFamily.sans],
      "serif": ["DM Serif Display", ...defaultTheme.fontFamily.serif],
      "display": ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
      "body": ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}