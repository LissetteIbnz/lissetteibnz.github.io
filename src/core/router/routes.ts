export const baseRoutes = {
  home: '/home',
  blog: '/blog',
  projects: '/projects',
  aboutMe: '/about-me',
};

export const switchRoutes = {
  ...baseRoutes,
  root: '/',
  blogPost: `${baseRoutes.blog}/:issueNumber`,
};

export type BaseRoutes = typeof baseRoutes;
export type SwitchRoutes = typeof switchRoutes;
