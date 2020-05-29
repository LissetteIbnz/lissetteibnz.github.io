import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const wrapper = css`
  overflow: auto;
  font-size: 1rem;
  border-radius: 6px;
  line-height: 1.5em;
`;

export const pre = (theme: Theme) => css`
  padding: 0 10px;
  ${theme.breakpoints.maxMD} {
    width: fit-content;
  }
`;

export const numbers = css`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;
