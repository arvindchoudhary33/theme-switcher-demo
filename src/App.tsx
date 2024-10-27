import React, { createContext, useState, useCallback } from "react";
import { ThemeName, THEMES } from "./constants";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";
import { Button } from "./components/ui/button.tsx";

type AppContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

const App = () => {
  const [theme, setThemeState] = useState<ThemeName>(THEMES.GRUVBOX_DARK);

  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
  }, []);

  const contextValue: AppContextType = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeSwitcher />
      <Button>hello</Button>
    </AppContext.Provider>
  );
};

export default App;
