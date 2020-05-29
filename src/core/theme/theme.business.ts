import {
  DARK_MODE_MEDIA_QUERY,
  DarkOrLightTheme,
  DATA_ATTRIBUTE,
  ModeTheme,
  STORAGE_KEY,
  VALID_THEMES,
} from './theme.vm';

const existsThemeInValidTheme = (theme: ModeTheme): boolean => VALID_THEMES.includes(theme);

export const getAppTheme = (): ModeTheme => {
  if (typeof window !== 'undefined') {
    const storage = window.localStorage.getItem(STORAGE_KEY) as ModeTheme;
    const config: ModeTheme = existsThemeInValidTheme(storage) ? storage : 'system';

    if (config === 'system') {
      return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches ? 'dark' : 'light';
    } else {
      return config;
    }
  } else {
    return 'system';
  }
};

export const setAppTheme = (theme: ModeTheme) => {
  if (existsThemeInValidTheme(theme)) {
    window.localStorage.setItem(STORAGE_KEY, theme);

    if (theme !== 'system') {
      window.document.documentElement.setAttribute(DATA_ATTRIBUTE, theme);
    } else {
      window.document.documentElement.removeAttribute(DATA_ATTRIBUTE);
    }
  }
};

export const isLightOrDark = (mode: ModeTheme): DarkOrLightTheme =>
  mode === 'dark' ? 'dark' : 'light';
