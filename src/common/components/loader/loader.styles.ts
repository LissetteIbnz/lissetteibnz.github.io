import { css, keyframes } from 'emotion';

export const color = '#333';

const swing = keyframes`
  50% {
    transform: rotate(-3deg);
  }`;

const steamLarge = keyframes`
  0% {
    stroke-dashoffset: 13;
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: 39;
    opacity: 0;
  }
`;

const steamSmall = keyframes`
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  `;

export const root = css`
  background-color: #fafafa;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  touch-action: none;
  width: 100%;
  height: 100%;
  display: grid;
  text-align: center;
  grid-row-gap: 16px;
  align-content: center;
  justify-items: center;
  grid-auto-flow: row;
  justify-content: center;

  svg {
    transform: scale(2);

    #teabag {
      transform-origin: top center;
      transform: rotate(3deg);
      animation: ${swing} 2s infinite;
    }

    #steamL {
      stroke-dasharray: 13;
      stroke-dashoffset: 13;
      animation: ${steamLarge} 2s infinite;
    }

    #steamR {
      stroke-dasharray: 9;
      stroke-dashoffset: 9;
      animation: ${steamSmall} 2s infinite;
    }
  }
`;

const moveSides = keyframes`
  0% {
     transform: translateX(-30px);
     letter-spacing: 0px;
  }

  25% {
     letter-spacing: 3px;
  }

  50% {
     transform: translateX(30px);
     letter-spacing: 0px;
  }

  75% {
     letter-spacing: 3px;
  }

  100% {
     transform: translateX(-30px);
     letter-spacing: 0px;
  }`;

export const text = css`
  font-size: 1.4rem;
  color: ${color};
  z-index: 9999;
  animation: ${moveSides} 4s ease infinite;
  width: 100px;
  text-align: center;
  font-weight: bold;
`;
