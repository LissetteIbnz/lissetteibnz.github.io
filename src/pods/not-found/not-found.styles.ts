import { css } from 'emotion';

const imagePath =
  'https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';

export const maskImage = css`
  background-image: url(${imagePath});
  background-size: cover;
  position: relative;
  height: 100vh;
`;

export const text = css`
  background-color: white;
  color: black;
  font-size: 18vw;
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 80%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
`;
