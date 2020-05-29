import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as classes from './brand-link.styles';

interface BrandLinkProps {
  path: string;
  onClick: () => void;
}

export const BrandLink: React.FC<BrandLinkProps> = ({ path, onClick }) => (
  <div className={classes.root}>
    <RouterLink to={path} onClick={onClick}>
      Lissette<span>Ibnz</span>
    </RouterLink>
  </div>
);
