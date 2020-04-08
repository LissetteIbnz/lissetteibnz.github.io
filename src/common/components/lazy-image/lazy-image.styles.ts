import { css } from 'emotion';

export const container = css`
  overflow: hidden;
`;

export const rounded = css`
  border-radius: 100%;
`;

export const img = css`
  object-fit: cover;
  transition: all ease 0.3s;
  opacity: 0;
`;

export const loading = css`
  opacity: 1;
  filter: blur(15px);
`;

export const loaded = css`
  opacity: 1;
`;

export const description = css`
  text-align: center;
  font-size: 14px;
  margin: 0;
  a {
    font-size: inherit;
  }
`;
