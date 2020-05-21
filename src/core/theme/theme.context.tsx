import React from 'react';
import { getAppTheme, setAppTheme } from './theme.business';
import { Theme, DARK_MODE_MEDIA_QUERY } from './theme.vm';

interface Context {
  theme: Theme;
}

export const ThemeContext = React.createContext<Context>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState(getAppTheme);

  const handleThemeChange = (event: MediaQueryListEvent) => {
    const theme = event.matches ? 'dark' : 'light';

    setTheme(theme);
  };

  React.useEffect(() => {
    setAppTheme(theme);
  }, [theme]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY);

    mediaQuery.addListener(handleThemeChange);

    return () => {
      mediaQuery.removeListener(handleThemeChange);
    };
  }, []);

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
