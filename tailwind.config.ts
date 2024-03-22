import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "'Hedvig Letters Sans', sans-serif"
    },
    extend: {
      backgroundImage: {
        backdrop: "url(backdrop.png)",
      },
      colors: {
        primary: "#000000",
        accent: "#ffffff",
        background: "#ffffff",
        textBackground: "rgba(0, 0, 0, 0.5)"
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
    },
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