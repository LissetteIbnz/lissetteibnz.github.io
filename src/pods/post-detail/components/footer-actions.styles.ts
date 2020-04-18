import { css } from 'emotion';

export const root = css`
  padding-top: 1.2rem;
`;

export const link = css`
  float: right;
  font-size: 16px;
  text-decoration: none;
  transition-property: all;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-timing-function: ease-in, ease-in, ease-in;
  transition-delay: 0s, 0s, 0s;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: rgba(0, 0, 0, 0.84);
    text-decoration: underline;
  }
`;
