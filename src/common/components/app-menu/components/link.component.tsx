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

  return (
    <RouterLink className={cx(classes.link, match && classes.active)} to={path}>
      {label}
    </RouterLink>
  );
};
