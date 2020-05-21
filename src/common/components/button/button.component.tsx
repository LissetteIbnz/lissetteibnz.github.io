import React from 'react';
import * as classes from './button.styles';

export interface ButtonProps {
  color: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className={classes.button(props)} disabled={props.disabled} onClick={props.onClick}>
    {children}
  </button>
);
