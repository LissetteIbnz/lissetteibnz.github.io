import { css, keyframes } from 'emotion';
import { theme } from '@/core/theme';

const waveAnimation = keyframes`
  0% { transform: rotate(  0.0deg) }
  10% { transform: rotate(-10.0deg) }
  20% { transform: rotate( 12.0deg) }
  30% { transform: rotate(-10.0deg) }
  40% { transform: rotate(  9.0deg) }
  50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`;

export const base = css`
  .wave {
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  blockquote {
    margin: 1em 0;
    border-left: 0.25em solid ${theme.colors.purple};
    padding: 0 1em;
    font-style: italic;
  }
`;
