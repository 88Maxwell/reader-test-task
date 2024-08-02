import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config"; // Fix the path

export const twConfig = resolveConfig(tailwindConfig);
