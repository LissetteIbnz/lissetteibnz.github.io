import React from 'react';
import { baseRoutes } from '@/core/router';
import { normalizeString } from '@/common/utils';
import { Link } from './link.component';

export const NavBar: React.FC = () => (
  <>
    {Object.keys(baseRoutes).map(item => (
      <Link key={item} label={normalizeString(item)} path={baseRoutes[item]} />
    ))}
  </>
);
