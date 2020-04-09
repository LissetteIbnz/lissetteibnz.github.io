import { css } from 'emotion';
import { theme } from '@/core/theme';

export const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const main = css`
  flex: 1;
  margin: 1rem;
  width: 90%;
  max-width: 1000px;
  margin: 2rem auto 0px;
  padding: 7rem 10px 10px;

  @media screen and (max-width: ${theme.breakpoints.s}) {
    width: 100%;
    margin: 0 auto;
  }
`;
