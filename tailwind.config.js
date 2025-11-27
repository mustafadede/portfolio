module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
       animation: {
        text: "text 5s ease infinite",
       },  keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
          "25%": {
            "background-size": "200% 200%",
            "background-position": "top center",
          },
        },
      }
    },
  },
  plugins: [],
}
