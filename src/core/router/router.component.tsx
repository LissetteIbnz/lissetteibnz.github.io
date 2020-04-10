import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ScrollToTop } from '@/common/hooks';
import {
  AboutScene,
  BlogScene,
  HomeScene,
  PostDetailsScene,
  ProjectsScene,
  NotFoundScene,
} from '@/scenes';
import { switchRoutes } from './routes';

export const RouterComponent = () => (
  <HashRouter>
    <ScrollToTop />
    <Switch>
      <Route exact={true} path={switchRoutes.root}>
        <Redirect to={switchRoutes.home} />
      </Route>
      <Route exact={true} path={switchRoutes.home}>
        <HomeScene />
      </Route>
      <Route exact={true} path={switchRoutes.aboutMe}>
        <AboutScene />
      </Route>
      <Route exact={true} path={switchRoutes.blog}>
        <BlogScene />
      </Route>
      <Route exact={true} path={switchRoutes.projects}>
        <ProjectsScene />
      </Route>
      <Route path={switchRoutes.blogPost}>
        <PostDetailsScene />
      </Route>
      <Route>
        <NotFoundScene />
      </Route>
    </Switch>
  </HashRouter>
);
