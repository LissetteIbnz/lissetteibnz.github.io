export const baseRoutes = {
  root: '/',
  home: '/home',
  about: '/about',
  blog: '/blog',
  blogPost: '/blog/:title/:issueNumber',
  cv: '/cv',
  projects: '/projects',
};

export type SwitchRoutes = typeof baseRoutes;
export type BaseRoutes = Omit<SwitchRoutes, 'root' | 'blogPost'>;
