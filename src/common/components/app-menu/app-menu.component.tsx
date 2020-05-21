import React from 'react';
import { cx } from 'emotion';
import { NavBar, Menu, BrandLink } from './components';
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
        <BrandLink />
        <NavBar />
        <Menu open={open} onClick={onClick} />
      </div>
    </div>
  );
};
