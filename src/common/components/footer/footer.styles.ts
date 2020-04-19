import { css } from 'emotion';
import { theme } from '@/core/theme';

export const root = css`
  background: ${theme.colors.purple};
  color: white;
  padding: 4rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a + a {
    margin-left: 20px;
  }

  ${theme.breakpoints.bpMaxMD} {
    height: auto;
    padding: 1rem 0;
    flex-wrap: wrap;
    justify-content: center;
    & > div {
      flex: 1 0 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;
