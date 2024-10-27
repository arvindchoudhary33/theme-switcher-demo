import { useContext, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppContext } from "../App";
import { ThemeName, themeNames, themeLabels } from "../constants";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  return (
    <Select onValueChange={handleThemeChange} value={theme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent aria-label="color theme selector">
        {themeNames.map((themeName) => (
          <SelectItem key={themeName} value={themeName}>
            {themeLabels[themeName]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
