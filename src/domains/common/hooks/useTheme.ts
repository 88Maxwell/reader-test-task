import { useTheme as useNextTheme } from "next-themes";
import { useState } from "react";
import { themeOptions, themeOptionsMap } from "../commonConstants";
import { ThemeOption } from "../commonTypes";

export const useTheme = () => {
  const [themeOption, setThemeOption] = useState<ThemeOption>(themeOptions[0]);
  const { theme: themeName, setTheme: setThemeName } = useNextTheme();

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
