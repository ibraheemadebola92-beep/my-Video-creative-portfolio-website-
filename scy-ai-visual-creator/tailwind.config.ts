import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Satoshi",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },

      colors: {
        brand: {
          blue: "#2563EB",
          silver: "#C0C0C0",
          black: "#0A0A0A",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
