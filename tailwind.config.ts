import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "4.5": "1.125rem",
      },
      colors: {
        "light-gray-600": "#424957",
        "dark-icon-primary": "#D9D9D9",
        "dark-label-primary": "#ECEDEF",
        "dark-background-header-bg": "#19191A",
        "dark-background-primary": "#000",
      },
    },
  },
  plugins: [],
};
export default config;
