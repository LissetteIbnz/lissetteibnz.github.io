import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const anchor = (theme: Theme) => css`
  color: ${theme.common.white};
  svg {
    display: block;
  }
`;
