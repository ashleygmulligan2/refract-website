import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdf8f0",
          100: "#f9edd9",
          200: "#f2d9b0",
          300: "#e9bf7f",
          400: "#dfa04d",
          500: "#d6882e",
          600: "#c76f23",
          700: "#a55520",
          800: "#854521",
          900: "#6c3a1e",
          950: "#3a1c0e",
        },
        stone: {
          850: "#231f1b",
          925: "#1a1714",
          950: "#110f0d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
