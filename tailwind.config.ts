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
        black: "#767676",
        gray: "#B1B1B1",
        grayLight: "#ECECEC",
        green: "#07AF9D",
        red: "#FA4949",
        yellow: "#FECE01",
        white: "#F6F6F5",
      },
      spacing: {
        "7xl": "85.5rem",
        "8xl": "93.75rem",
      },
      maxWidth: {
        "8xl": "87.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
