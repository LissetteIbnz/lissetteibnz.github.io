import { css } from 'emotion';

export const navContainer = css`
  padding: 1rem;
  background-color: #d16ba5; /** old browsers */
  background-image: linear-gradient(to right top, #d16ba5, #c37bbf, #b08bd3, #9a9ae1, #86a8e7);
  color: #fff;
  & h1,
  h2 {
    margin: 0.8rem 0px;
    text-align: center;
    line-height: 1.15;
  }
  & h1 {
    font-weight: 700;
    font-size: 3em;
    color: inherit;
  }
  & h2 {
    font-weight: 400;
    font-size: 1.5em;
    color: rgb(55, 71, 79);
  }
`;

export const menu = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin-bottom: 0;
`;
