import { css } from 'emotion';
import { theme } from '@/core/theme';

export const wrapper = css`
  overflow: auto;
  font-size: 16px;
  border-radius: 6px;
  line-height: 1.5em;
`;

export const pre = css`
  padding: 0 10px;
  ${theme.breakpoints.bpMaxMD} {
    width: fit-content;
  }
`;

export const numbers = css`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;
