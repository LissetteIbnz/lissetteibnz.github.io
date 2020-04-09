import React from 'react';
import { cx } from 'emotion';
import * as classes from './menu.styles';

interface MenuProps {
  open: boolean;
  onClick: () => void;
}

export const Menu: React.FC<MenuProps> = ({ open, onClick }) => {
  const menuStyles = cx(classes.menu, { change: open });
  return (
    <div className={menuStyles} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
