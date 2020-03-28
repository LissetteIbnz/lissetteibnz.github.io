export const baseRoutes = {
  root: '/',
  home: '/home',
  about: '/about',
} as const;

export type BaseRoutes = typeof baseRoutes;
