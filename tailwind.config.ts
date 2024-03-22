import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#000000",
      accent: "#7357ff",
      background: "#ffffff",
    },
    animation: {
      overshootSpin: "spin 2.5s cubic-bezier(.7, .1, .55, 1) infinite"
    },
    keyframes: {
      spin: {
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(360deg)"
        },
      },
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value: string) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
} as Config