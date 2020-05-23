import React from 'react';
import { getAppTheme, setAppTheme } from './theme.business';
import { DARK_MODE_MEDIA_QUERY, Context } from './theme.vm';

export const ThemeContext = React.createContext<Context>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState(getAppTheme);

  const handleThemeChange = (event: MediaQueryListEvent) => {
    const theme = event.matches ? 'dark' : 'light';

    setTheme(theme);
  };

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>{children}</ThemeContext.Provider>
  );
};
