import { css } from 'emotion';
import { theme } from '@/core/theme';

const { primary, secondary } = theme.text;

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

export const infoAuthor = css`
  line-height: 1.5rem;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  a {
    font-size: 16px;
    color: ${primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const infoPost = css`
  color: ${secondary};
  line-height: 1.5rem;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 0px;
`;
