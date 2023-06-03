const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Britania Vintage', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      emas: "#FFD700",
      putih: "#FFFFFF",
      biru: "#013DA6",
      "hijau-satu": "#3C9916",
      "hijau-dua": "#ACDC22",
      "oren-satu": "#E95546",
      "oren-dua": "#F3922A",
    },
  },
};
