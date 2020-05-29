import type { Theme as ThemeDefinition } from './theme.definition';
export type Theme = ThemeDefinition;

export type DarkOrLightTheme = 'light' | 'dark';
export type ModeTheme = 'system' | DarkOrLightTheme;

export interface Context {
  mode: ModeTheme;
  isDark: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

export const STORAGE_KEY = 'theme';
export const VALID_THEMES: ModeTheme[] = ['system', 'light', 'dark'];
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';
export const DATA_ATTRIBUTE = 'data-theme';

type Options = 'text' | 'backgroundColor' | 'borderColor' | 'buttonText' | 'buttonTextHover';
export type ThemeOptions = Record<Options, string>;
