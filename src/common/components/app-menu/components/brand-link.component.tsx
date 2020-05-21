import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { baseRoutes } from '@/core/router';
import * as classes from './brand-link.styles';

export const BrandLink = () => (
  <div className={classes.root}>
    <RouterLink to={baseRoutes.home}>
      Lissette<span>Ibnz</span>
    </RouterLink>
  </div>
);
