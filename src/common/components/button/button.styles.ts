import { css } from 'emotion';
import type { Theme } from '@/core/theme';
import { ButtonProps } from './button.component';

export const button = (color: ButtonProps['color'], theme: Theme) => css`
  background: ${color === 'primary'
    ? theme.primary.dark
    : color === 'secondary'
    ? theme.secondary.dark
    : '#45464e'};
  :hover:not(:disabled) {
    background: ${color === 'primary'
      ? theme.primary.dark
      : color === 'secondary'
      ? theme.secondary.dark
      : '#3c3d43'};
    box-shadow: ${theme.shadows[2]};
  }

  transition: ${theme.transition.ease};
  margin: 0.6rem 0;
  box-shadow: ${theme.shadows[1]};
  padding: 6px 16px;
  min-width: 64px;
  box-sizing: border-box;
  color: #fff;
  line-height: 1.75;
  border-radius: 4px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  &:disabled {
    cursor: inherit;
    background: ${theme.text.disabled};
    box-shadow: none;
  }
`;
