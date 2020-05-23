import React from 'react';
import { cx } from 'emotion';
import { useAppTheme } from '@/core/theme';
import { NavBar, Menu, BrandLink, ToggleMode } from './components';
import * as classes from './app-menu.styles';

export const AppMenu: React.FC = () => {
  const { toggleTheme, isDark } = useAppTheme();
  const [open, setOpen] = React.useState(false);

  const onClick = () => {
    setOpen(prev => !prev);
  };

  const rootStyles = cx(classes.fixed, 'animate__slideInDown animated');
  const containerStyles = cx(classes.container, {
    [classes.responsive]: open,
  });

  return (
    <div className={rootStyles}>
      <div className={containerStyles}>
        <ToggleMode isDark={isDark} onChange={toggleTheme} className={classes.toggle} />
        <BrandLink />
        <NavBar />
        <Menu open={open} onClick={onClick} />
      </div>
    </div>
  );
};
