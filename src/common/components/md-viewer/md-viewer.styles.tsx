import { css, keyframes } from 'emotion';
import type { Theme } from '@/core/theme';

const waveAnimation = keyframes`
  0% { transform: rotate(  0.0deg) }
  10% { transform: rotate(-10.0deg) }
  20% { transform: rotate( 12.0deg) }
  30% { transform: rotate(-10.0deg) }
  40% { transform: rotate(  9.0deg) }
  50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`;

export const base = (theme: Theme) => css`
  .wave {
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  blockquote {
    margin: 1em 0;
    border-left: 0.25em solid ${theme.primary.main};
    padding: 0 1em;
    font-style: italic;
  }

  code {
    background: ${theme.primary.light};
    border-radius: 5px;
    padding: 0.1em 0.3em;
  }

  ul,
  ol {
    padding-left: 2em;
    list-style: disc;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    word-wrap: break-all;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;

    dt {
      padding: 0;
      margin-top: 16px;
      font-size: 1em;
      font-style: italic;
      font-weight: $font-weight-bold;
    }

    dd {
      padding: 0 16px;
      margin-bottom: 16px;
    }
  }
`;
