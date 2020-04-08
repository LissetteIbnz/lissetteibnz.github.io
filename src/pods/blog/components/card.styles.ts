import { css } from 'emotion';

export const container = css`
  cursor: pointer;
  margin-bottom: 6rem;
  position: relative;
  border-radius: 10px;
  padding: 1.2rem;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.6rem;
  & > div {
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
    & div {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      font-weight: 300;
      line-height: 28px;
      border-radius: 3px;
      padding: 3px 15px;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }
  & > p {
    font-size: 15px;
    padding: 0;
    margin: 0;
    & > span::before {
      padding: 8px;
      color: black;
      content: '·';
    }
  }
`;

export const content = css`
  h2 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.25;
  }
  p {
    font-size: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
  }
`;
