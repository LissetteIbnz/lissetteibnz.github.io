const maxSM = '700px';
const maxMD = '1000px';

export const theme = {
  colors: {
    purple: '#b665e6',
    white: '#f9f9f9',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    oposite: '#f9f9f9',
    disabled: 'rgba(0, 0, 0, 0.38)',
    highlight: '#b665e6',
  },
  breakpoints: {
    sm: maxSM,
    md: maxMD,
    bpMaxSM: `@media screen and (max-width: ${maxSM})`,
    bpMaxMD: `@media screen and (max-width: ${maxMD})`,
  },
  transition: {
    ease: 'all 100ms ease',
  },
} as const;
