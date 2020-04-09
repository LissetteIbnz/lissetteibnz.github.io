import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { cx } from 'emotion';
import * as classes from './link.styles';

interface LinkProps {
  label: string;
  path: string;
}

export const Link: React.FC<LinkProps> = ({ label, path }) => {
  const match = useRouteMatch({
    path,
    exact: false,
  });

  const linkStyles = cx(classes.link, { [classes.active]: Boolean(match) });

  return (
    <RouterLink className={linkStyles} to={path}>
      {label}
    </RouterLink>
  );
};
