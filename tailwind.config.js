const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        "light-blue": colors.lightBlue,
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
