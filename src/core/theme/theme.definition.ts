import { DarkOrLightTheme } from './theme.vm';

/** Theme definition */
const small = 800;
const medium = 1000;
const large = 1280;
const smSize = '700px';
const mdSize = '1000px';
const lgSize = `${large}px`;

const light = {
  background: { paper: '#fff', default: '#fafafa' },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: '#121212',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.54)',
  },
};

const dark = {
  background: { paper: '#253341', default: '#2c3e50' }, // 192734 twitter
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.62)',
    disabled: 'rgba(255, 255, 255, 0.38)',
    hint: 'rgba(255, 255, 255, 0.54)',
  },
};

const composeThemeOptions = { light, dark };

const theme = {
  common: { black: '#000', white: '#fff' },
  primary: {
    light: 'rgba(189, 116, 232, 1)',
    main: 'rgba(182, 101, 230, 1)',
    dark: 'rgba(122, 60, 158, 1)',
    contrastText: '#fff',
  },
  secondary: {
    light: 'rgba(80, 180, 172, 1)',
    main: 'rgba(35, 143, 134, 1)',
    dark: 'rgba(31, 99, 92, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
  },
  success: '#88c559',
  error: '#e02447',
  warning: '#ffd138',
  breakpoints: {
    maxSM: `@media screen and (max-width: ${smSize})`,
    maxMD: `@media screen and (max-width: ${mdSize})`,
    minLG: `@media screen and (min-width: ${lgSize})`,
    lgSize,
  },
  shape: {
    borderRadius: '5px',
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  ],
  transition: {
    backgroundAndColor: 'color ease-in-out 0.3s, background-color ease-in-out 0.3s',
    ease: 'all 300ms ease',
    cubicBezier: 'all 300ms cubic-bezier(.25,.8,.25,1)',
  },
};

export type Theme = typeof theme & typeof light & typeof dark;

export const mergeTheme = (mode: DarkOrLightTheme = 'light'): Theme => ({
  ...theme,
  ...composeThemeOptions[mode],
});
