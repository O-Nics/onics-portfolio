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
        poppins: ["var(--font-poppins)"],
        sans: ["var(--font-poppins)"], // Poppins comme police principale
        inter: ["var(--font-sans)"], // Inter disponible via font-inter
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
                DEFAULT:"#00b3da"
              },
              success: {
                DEFAULT: "#3bec61",
                  foreground: "#ffffff",
              },


            },
          },
          dark: {
            colors: {
              background:{
                DEFAULT: "#151515",
                // DEFAULT: "#15181f",
                // DEFAULT: "#0f172a",
              },
              primary: {
                // DEFAULT:"#bc47ff"
                DEFAULT:"#5be6d4"
              },
                success: {
                    DEFAULT: "#3bec61",
                    foreground: "#ffffff",
                },

            },
          },
        },

      }
  )],
}

export default config;