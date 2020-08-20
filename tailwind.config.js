module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        borderColor: "rgb(213, 205, 205)",
        primary: {
          linearGradient: "hsl(236, 72%, 79%) to hsl(237, 63%, 64%)",
        },
        neutral: {
          veryLightGrayishBlue: "hsl(240, 78%, 98%)",
          lightGrayishBlue: "hsl(234, 14%, 74%)",
          grayishBlue: "hsl(233, 13%, 49%)",
          darKGrayishBlue: "hsl(232, 13%, 33%)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
