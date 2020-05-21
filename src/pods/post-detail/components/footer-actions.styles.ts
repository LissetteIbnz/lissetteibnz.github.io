import { css } from 'emotion';

export const root = css`
  margin-bottom: 2rem;
`;

export const comment = css`
  padding: 1rem 0;
`;

export const previewMarkdown = css`
  padding: 0.8rem 1.2rem;
  display: block;
  color: #555;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  height: 213px;
  p {
    margin: 0 0 0.2rem;
    font-size: 16px;
  }
`;

export const formComment = css`
  margin-bottom: 0.6rem;
`;

export const inputComment = css`
  font: inherit;
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: block;
  color: #555;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

export const actions = css`
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.8rem;
  }
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
