const maxSM = '700px';
const maxMD = '1000px';

export const theme = {
  colors: {
    purple: '#b665e6',
    purpleLighten: '#bd74e8',
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
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  ],
  transition: {
    ease: 'all 300ms ease',
    cubicBezier: 'all 300ms cubic-bezier(.25,.8,.25,1)',
  },
} as const;
