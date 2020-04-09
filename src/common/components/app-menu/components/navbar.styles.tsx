import { css } from 'emotion';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${theme.breakpoints.l}) {
    display: none;

    &.responsive {
      display: flex;
      flex-direction: column;
    }
  }
`;
