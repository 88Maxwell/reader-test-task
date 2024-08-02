import type { ThemeNames, ThemeOption } from "./commonTypes";

export const themeOptions: ThemeOption[] = [
  { value: "light", label: "Світла" },
  { value: "dark", label: "Темна" },
];

export const themeOptionsMap: Record<ThemeNames, ThemeOption> = {
  light: { value: "light", label: "Світла" },
  dark: { value: "dark", label: "Темна" },
};
