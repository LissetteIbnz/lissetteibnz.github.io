import {
  Theme,
  DARK_MODE_MEDIA_QUERY,
  DATA_ATTRIBUTE,
  STORAGE_KEY,
  VALID_THEMES,
} from './theme.vm';

const existsThemeInValidTheme = (theme: Theme): boolean => VALID_THEMES.includes(theme);

export const getAppTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const storage = window.localStorage.getItem(STORAGE_KEY) as Theme;
    const config: Theme = existsThemeInValidTheme(storage) ? storage : 'system';

    if (config === 'system') {
      return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches ? 'dark' : 'light';
    } else {
      return config;
    }
  } else {
    return 'system';
  }
};

export const setAppTheme = (theme: Theme) => {
  if (existsThemeInValidTheme(theme)) {
    window.localStorage.setItem(STORAGE_KEY, theme);

    if (theme !== 'system') {
      window.document.documentElement.setAttribute(DATA_ATTRIBUTE, theme);
    } else {
      window.document.documentElement.removeAttribute(DATA_ATTRIBUTE);
    }
  }
};
