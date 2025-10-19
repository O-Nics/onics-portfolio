import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(
      {
        layout:{
          dividerWeight: "1px",
          disabledOpacity: 0.7,
        },
        themes:{
          light: {
            colors: {
              background:{
                DEFAULT:"#ffffff"
              },
              primary: {
                DEFAULT:"#0febff"
              },
              // secondary: {
              //   DEFAULT:""
              // },
              // success: {
              //   DEFAULT:""
              // },
              // danger: {
              //   DEFAULT:""
              // },
              // foreground: {
              //   DEFAULT:""
              // },
              // warning:{
              //   DEFAULT:""
              // },
              // default: {
              //   DEFAULT:""
              // },
              // focus:{
              //   DEFAULT:""
              // },
            },
          },
          dark: {
            colors: {
              background:{
                DEFAULT: "#0f172a",
              },
              primary: {
                DEFAULT:"#5be6d4"
              },

            },
          },
        },

      }
  )],
}

export default config;