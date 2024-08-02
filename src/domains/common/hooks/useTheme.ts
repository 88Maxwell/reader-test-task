import { useTheme as useNextTheme } from "next-themes";
import { useState } from "react";
import { themeOptionsMap } from "../commonConstants";
import type { ThemeNames, ThemeOption } from "../commonTypes";

export const useTheme = () => {
  const { theme: themeName, setTheme: setThemeName } = useNextTheme();
  const [themeOption, setThemeOption] = useState<ThemeOption>(
    themeOptionsMap[themeName as ThemeNames],
  );

  const switchToDarkTheme = () => {
    setThemeOption(themeOptionsMap.dark);
    setThemeName("dark");
  };

  const switchToLightTheme = () => {
    setThemeOption(themeOptionsMap.light);
    setThemeName("light");
  };

  const onChangeTheme = (o: ThemeOption) => {
    if (o.value === "light") switchToLightTheme();
    if (o.value === "dark") switchToDarkTheme();
  };

  return {
    themeName,
    themeOption,
    switchToDarkTheme,
    switchToLightTheme,
    onChangeTheme,
  };
};
