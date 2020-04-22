import { css } from 'emotion';
import { theme } from '@/core/theme';

export const menu = css`
  display: none;
  cursor: pointer;
  outline: 0;

  ${theme.breakpoints.bpMaxMD} {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
  }

  div {
    width: 30px;
    height: 2px;
    background-color: white;
    margin: 6px 0;
    outline: 0;
    transition: 0.4s;
  }

  &.change div:first-child {
    -webkit-transform: rotate(-45deg) translate(-9px, 5px);
    transform: rotate(-45deg) translate(-7px, 2px);
  }

  &.change div:nth-child(2) {
    opacity: 0;
  }

  &.change div:last-child {
    -webkit-transform: rotate(45deg) translate(-9px, -6px);
    transform: rotate(45deg) translate(-9px, -5px);
  }
`;

export const open = css`
  display: none;
`;
