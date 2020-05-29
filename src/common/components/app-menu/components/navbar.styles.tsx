import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const root = (theme: Theme) => css`
  display: flex;
  flex-direction: row;

  ${theme.breakpoints.maxMD} {
    display: none;

    &.responsive {
      display: flex;
      flex-direction: column;
    }
  }
`;
