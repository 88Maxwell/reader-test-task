import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem",
      },
      screens: {
        zero: "0px"
      },
      fontSize: {
        "3.5xl": "2rem",
      },
      borderRadius: {
        "1.5xl": "0.875rem",
        "2.5xl": "1.125rem",
      },
      borderColor: {},
      borderOpacity: {
        12: ".12",
      },
      colors: {
        "light-gray-600": "#424957",
        "dark-icon-primary": "#D9D9D9",
        "dark-label-primary": "#ECEDEF",
        "dark-background-header-bg": "#19191A",
        "dark-background-primary": "#000",
        "light-label-light-main-text": "#171A1F",
        "dark-label-sub-head": "#D9D9D9",
        "dark-background-quaternary-surface": "#3D3D3D",
        "dark-stroke-divider-primary": "#3D3D3D",
        "light-stroke-divider-primary": "#E1E3E6", // TODO: add color to design
        "switch-base": "#D5D5D6", // TODO: Add color to figma
        "dark-brand-brand": "#8E3F66",
        "light-label-dark-main-text": "#FFFFFF",
        "dark-background-tertiary": "#3D3D3D",
        "light-button-light-enabled": "#83325A",
        "dark-background-field-contrast": "#363636",
        "dark-stroke-tertiary": "#555",
        "dark-label-disabled": "#636567",
        "dark-background-secondary": "#232323",
        "light-gray-500": "#F2F3F5",
        "light-other-track-background": "#E1E3E6",
        "light-gray-100": "#FBFBFB",
        "dark-label-secondary": "#969A9F",
        "light-label-light-secondary-text": "#71747A",
        "light-icon-outline-medium": "#818C99",
        "dark-icon-secondary": "#B0B1B6",
      },
    },
  },
  plugins: [],
};
export default config;
