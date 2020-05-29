import React from 'react';
import { cx } from 'emotion';
import type { Theme } from '@/core/theme';
import * as classes from './menu.styles';

interface MenuProps {
  open: boolean;
  theme: Theme;
  onClick: () => void;
}

export const Menu: React.FC<MenuProps> = ({ open, theme, onClick }) => {
  const menuStyles = cx(classes.menu(theme), { change: open });
  return (
    <div className={menuStyles} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
