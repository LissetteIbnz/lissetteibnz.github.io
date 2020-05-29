import { css } from 'emotion';
import type { Theme } from '@/core/theme';

const heightHeader = '52px';

export const container = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${theme.breakpoints.minLG} {
    font-size: 1.1rem;
  }
`;

export const main = (theme: Theme) => css`
  flex: 1;
  margin: 1rem;
  width: 90%;
  max-width: ${theme.breakpoints.lgSize};
  margin: 2rem auto 0px;
  padding: 7rem 10px 10px;

  ${theme.breakpoints.maxMD} {
    width: 100%;
    margin: ${heightHeader} auto 0;
    padding: 0;
  }
`;
