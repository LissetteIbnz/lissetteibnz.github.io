import React from 'react';
import { baseRoutes } from '@/core/router';
import { Link } from './components';
import { Route } from './app-menu.vm';
import * as classes from './app-menu.styles';

export const AppMenu: React.FC = () => {
  const links: Route[] = [
    {
      title: 'Home',
      path: baseRoutes.home,
    },
    {
      title: 'Blog',
      path: baseRoutes.blog,
    },
    {
      title: 'Projects',
      path: baseRoutes.projects,
    },
    {
      title: 'Resume',
      path: baseRoutes.cv,
    },
    {
      title: 'About me',
      path: baseRoutes.about,
    },
  ];

  return (
    <nav className={classes.navContainer}>
      <h1>
        SL<span>Blog</span>
      </h1>
      <h2>Frontend developer</h2>
      <ul className={classes.menu}>
        {links.map(({ title, path }) => (
          <Link label={title} path={path} key={title} />
        ))}
      </ul>
    </nav>
  );
};
