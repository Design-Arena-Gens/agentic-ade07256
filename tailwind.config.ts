import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4C7F1D",
          light: "#76A533",
          dark: "#2E5011"
        }
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(25,38,16,0.85), rgba(76,127,29,0.75))"
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
