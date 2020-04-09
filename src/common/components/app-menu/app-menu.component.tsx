import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cx } from 'emotion';
import { baseRoutes } from '@/core/router';
import { NavBar, Menu } from './components';
import * as classes from './app-menu.styles';

export const AppMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const onClick = () => {
    setOpen(prev => !prev);
  };

  const containerStyles = cx(classes.container, { [classes.responsive]: open });

  return (
    <div className={classes.fixed}>
      <div className={containerStyles}>
        <RouterLink to={baseRoutes.home}>
          Lissette<span>Ibnz</span>
        </RouterLink>
        <NavBar />
        <Menu open={open} onClick={onClick} />
      </div>
    </div>
  );
};
