import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { baseRoutes } from '@/core/router';
import { NavBar } from './components/navbar.component';
import * as classes from './app-menu.styles';

export const AppMenu: React.FC = () => (
  <div className={classes.fixed}>
    <div className={classes.container}>
      <RouterLink id="logo" to={baseRoutes.home}>
        Lissette<span>Ibnz</span>
      </RouterLink>
      <NavBar />
    </div>
  </div>
);
