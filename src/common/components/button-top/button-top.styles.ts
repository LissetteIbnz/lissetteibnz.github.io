import { css } from 'emotion';
import { theme } from '@/core/theme';

export const button = css`
  visibility: visible;
  opacity: 1;
  color: ${theme.colors.white};
  position: fixed;
  transform-origin: center center;
  background-color: ${theme.colors.purple};
  border-color: ${theme.colors.purple};
  height: 46px;
  width: 46px;
  box-shadow: ${theme.shadows[1]};
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  bottom: 16px;
  right: 16px;
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  border-style: none;
  transition: ${theme.transition.ease};

  &:hover {
    background-color: ${theme.colors.purpleLighten};
    box-shadow: ${theme.shadows[3]};
  }
`;

export const hide = css`
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
