import { css } from 'emotion';

const baseColor = '#fff';

export const link = css`
  a {
    position: relative;
    color: ${baseColor};
    text-decoration: none;
    &:hover {
      color: ${baseColor};
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${baseColor};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover::before {
      visibility: visible;
      -webkit-transform: scaleX(1.2);
      transform: scaleX(1.2);
    }
  }
`;

export const active = css`
  a::before {
    visibility: visible;
    -webkit-transform: scaleX(1.2);
    transform: scaleX(1.2);
  }
`;
