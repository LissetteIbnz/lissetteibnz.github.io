import React from 'react';
import { getAppTheme, setAppTheme, isLightOrDark } from './theme.business';
import { mergeTheme } from './theme.definition';
import { DARK_MODE_MEDIA_QUERY, Context } from './theme.vm';

export const ThemeContext = React.createContext<Context>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [modeTheme, setModeTheme] = React.useState(getAppTheme);
  const [theme, setTheme] = React.useState(mergeTheme);

  const handleModeThemeChange = (event: MediaQueryListEvent) => {
    const theme = event.matches ? 'dark' : 'light';

    setModeTheme(theme);
  };

  const toggleTheme = React.useCallback(() => {
    setModeTheme(mode => (mode === 'light' ? 'dark' : 'light'));
  }, []);

  const isDark = modeTheme === 'dark';

  React.useEffect(() => {
    setAppTheme(modeTheme);
    const option = isLightOrDark(modeTheme);
    setTheme(mergeTheme(option));
  }, [modeTheme]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY);

    mediaQuery.addListener(handleModeThemeChange);

    return () => {
      mediaQuery.removeListener(handleModeThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode: modeTheme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
