import { css, keyframes } from 'emotion';

export const preloader = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: none repeat scroll 0 0 #ffffff;
`;

export const slideUp = css`
  transition: height 0.7s ease-in-out;
  height: 0px;
`;

const spinnerAnimation = keyframes`
  to {transform: rotate(360deg);}
  `;

export const spinnerOff = css`
  transition: opacity 0.7s ease-in-out;
  opacity: 0;
`;

export const spinner = css`
  border: 1px solid transparent;
  border-radius: 5px;
  position: relative;

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 45px;
    height: 45px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 1px solid #959595;
    border-top-color: #ffffff;
    animation: ${spinnerAnimation} 0.9s linear infinite;
  }
`;
