import React from 'react';
import type { Theme } from '@/core/theme';
import { Link } from '../app-menu.vm';
import { LinkComponent } from './link.component';

interface NavBarProps {
  links: Link[];
  theme: Theme;
  onClick: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ links, theme, onClick }) => (
  <>
    {links.map(link => (
      <LinkComponent link={link} key={link.label} onClick={onClick} theme={theme} />
    ))}
  </>
);
