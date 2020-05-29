import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const author = css`
  display: flex;
  align-items: center;
`;

export const avatar = css`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  margin: 10px;
  margin-left: 0px;
`;

export const infoAuthor = (theme: Theme) => css`
  line-height: 1.5rem;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  a {
    font-size: 16px;
    color: ${theme.text.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const infoPost = (theme: Theme) => css`
  color: ${theme.text.secondary};
  line-height: 1.5rem;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 0px;
  transition: ${theme.transition.backgroundAndColor};
`;
