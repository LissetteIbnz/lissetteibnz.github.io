import { css } from 'emotion';
import { theme } from '@/core/theme';
import { ButtonProps } from './button.component';

export const button = (props: ButtonProps) => css`
  background: ${props.color === 'primary'
    ? theme.palette.primary.main
    : theme.palette.secondary.main};
  :hover {
    background: ${props.color === 'primary'
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark};
    box-shadow: ${theme.shadows[2]};
  }
  margin: 0.6rem 0;
  box-shadow: ${theme.shadows[1]};
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  color: #fff;
  line-height: 1.75;
  border-radius: 4px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 0.02857em;
  cursor: pointer;
`;
