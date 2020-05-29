import React from 'react';
import { useTheme } from '@/core/theme';
import * as classes from './button.styles';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, color = 'default', ...props }) => {
  const theme = useTheme();
  return (
    <button
      className={classes.button(color, theme)}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
