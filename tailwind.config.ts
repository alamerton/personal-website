import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"Times New Roman"', "Times", "serif"],
      },
      colors: {
        "formation-purple": "#33005D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
