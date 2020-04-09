import { css } from 'emotion';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: row;

  ${theme.breakpoints.bpMaxMD} {
    display: none;

    &.responsive {
      display: flex;
      flex-direction: column;
    }
  }
`;
