import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const button = (theme: Theme) => css`
  visibility: visible;
  opacity: 1;
  bottom: 16px;
  right: 16px;
  position: fixed;
  color: ${theme.primary.contrastText};
  background-color: ${theme.primary.main};
  border-color: ${theme.primary.main};
  transform-origin: center center;
  height: 46px;
  width: 46px;
  box-shadow: ${theme.shadows[1]};
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  border-style: none;
  transition: ${theme.transition.ease};

  &:hover {
    background: ${theme.primary.light};
    box-shadow: 0 0 1px 7px ${theme.primary.dark};
    color: #fff;
    outline: 0;
  }
`;

export const hide = (theme: Theme) => css`
  visibility: hidden;
  opacity: 0;
  transition: ${theme.transition.ease};
`;

export const chevron = css`
  &::before {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 0.9em;
    position: relative;
    top: 0.25em;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.9em;
    color: currentColor;
  }
`;
