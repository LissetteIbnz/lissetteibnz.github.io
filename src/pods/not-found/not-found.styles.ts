import { css } from 'emotion';

const imagePath =
  'https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';

export const maskImage = css`
  background-size: cover;
  background-image: url(${imagePath});
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 15vw;
  font-weight: 700;
`;
