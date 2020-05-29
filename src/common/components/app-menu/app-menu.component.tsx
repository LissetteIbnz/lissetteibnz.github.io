import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { cx } from 'emotion';
import { useAppTheme } from '@/core/theme';
import { baseRoutes } from '@/core/router';
import { normalizeString } from '@/common/utils';
import { Link } from './app-menu.vm';
import { NavBar, Menu, BrandLink, ToggleMode } from './components';
import * as classes from './app-menu.styles';

export const AppMenu: React.FC = () => {
  const { pathname } = useLocation();
  const { toggleTheme, isDark, theme } = useAppTheme();
  const [open, setOpen] = React.useState(false);

  const links = React.useMemo<Link[]>(
    () =>
      Object.keys(baseRoutes).reduce((acc: Link[], item) => {
        const link: Link = {
          active: !!matchPath(pathname, baseRoutes[item]),
          path: baseRoutes[item],
          label: normalizeString(item),
        };
        return [...acc, link];
      }, []),
    [pathname]
  );

  const onClick = () => {
    setOpen(prev => !prev);
  };

  const rootStyles = cx(classes.fixed(theme), 'animate__slideInDown animated');
  const containerStyles = cx(classes.container(theme), {
    [classes.responsive(theme)]: open,
  });
  const toggleStyles = cx({ [classes.toggle(theme)]: !open });

  return (
    <div className={rootStyles}>
      <div className={containerStyles}>
        <ToggleMode isDark={isDark} onChange={toggleTheme} className={toggleStyles} />
        <BrandLink path={baseRoutes.home} onClick={onClick} />
        <NavBar theme={theme} onClick={onClick} links={links} />
        <Menu open={open} onClick={onClick} theme={theme} />
      </div>
    </div>
  );
};
