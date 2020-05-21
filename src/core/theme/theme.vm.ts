export type Theme = 'system' | 'light' | 'dark';

export const STORAGE_KEY = 'theme';
export const VALID_THEMES: Theme[] = ['system', 'light', 'dark'];
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';
export const DATA_ATTRIBUTE = 'data-theme';

type Options = 'text' | 'backgroundColor' | 'buttonText' | 'buttonTextHover';
export type ThemeOptions = Record<Options, string>;
