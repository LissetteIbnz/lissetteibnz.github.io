import { css } from 'emotion';
import type { Theme } from '@/core/theme';

const baseColor = (theme: Theme) => theme.common.white;

export const link = (theme: Theme) => css`
  position: relative;
  color: ${baseColor(theme)};
  text-decoration: none;
  user-select: none;

  &:hover,
  &:focus {
    color: ${baseColor(theme)};
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${baseColor(theme)};
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
`;

export const active = css`
  &::before {
    visibility: visible;
    -webkit-transform: scaleX(1.2);
    transform: scaleX(1.2);
  }
`;
