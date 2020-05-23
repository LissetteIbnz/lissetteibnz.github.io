import { css } from 'emotion';
import { theme } from '@/core/theme';

const heightHeader = '56px';

export const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: color ease-in-out 0.3s, background-color ease-in-out 0.3s;
`;

export const main = css`
  flex: 1;
  margin: 1rem;
  width: 90%;
  max-width: 1000px;
  margin: 2rem auto 0px;
  padding: 7rem 10px 10px;

  ${theme.breakpoints.maxMD} {
    width: 100%;
    margin: ${heightHeader} auto 0;
    padding: 0;
  }
`;
