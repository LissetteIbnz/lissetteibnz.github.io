import React from 'react';
import { css } from 'emotion';
import { baseRoutes } from '@/core/router';
import { Link } from './link.component';
import { normalizeString } from '@/common/utils';

export const NavBar: React.FC = () => (
  <ul
    className={css`
      display: flex;
    `}
  >
    {Object.keys(baseRoutes).map(item => (
      <li key={item}>
        <Link label={normalizeString(item)} path={baseRoutes[item]} />
      </li>
    ))}
  </ul>
);
