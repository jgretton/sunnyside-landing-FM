module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkDesCyan: "hsl(167, 40%, 24%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        DarkModCyan: "hsl(168, 34%, 41%)",

        VeryDarkDesCyan: "hsl(212, 27%, 19%)",
        VeryDarkGrayblue: "hsl(213, 9%, 39%)",
        DarkGrayBlue: "hsl(232, 10%, 55%)",
        GrayBlue: "hsl(210, 4%, 67%)",
      },
    },
  },
  plugins: [],
};
