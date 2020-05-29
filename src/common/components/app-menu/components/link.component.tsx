import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cx } from 'emotion';
import type { Theme } from '@/core/theme';
import { Link } from '../app-menu.vm';
import * as classes from './link.styles';

interface LinkProps {
  link: Link;
  theme: Theme;
  onClick: () => void;
}

export const LinkComponent: React.FC<LinkProps> = ({ link, theme, onClick }) => {
  const linkStyles = cx(classes.link(theme), { [classes.active]: link.active });

  return (
    <RouterLink className={linkStyles} to={link.path} onClick={onClick}>
      {link.label}
    </RouterLink>
  );
};
