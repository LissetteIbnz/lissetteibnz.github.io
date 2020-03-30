import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppMenu } from '@/common/components';
import {
  AboutScene,
  BlogScene,
  HomeScene,
  PostDetailsScene,
  ProjectsScene,
  ResumeScene,
} from '@/scenes';
import { baseRoutes } from './routes';

export const RouterComponent = () => (
  <HashRouter>
    <AppMenu />
    <Switch>
      <Route exact={true} path={baseRoutes.root}>
        <Redirect to={baseRoutes.home} />
      </Route>
      <Route exact={true} path={baseRoutes.home}>
        <HomeScene />
      </Route>
      <Route exact={true} path={baseRoutes.about}>
        <AboutScene />
      </Route>
      <Route exact={true} path={baseRoutes.blog}>
        <BlogScene />
      </Route>
      <Route exact={true} path={baseRoutes.cv}>
        <ResumeScene />
      </Route>
      <Route exact={true} path={baseRoutes.projects}>
        <ProjectsScene />
      </Route>
      <Route path={baseRoutes.blogPost}>
        <PostDetailsScene />
      </Route>
    </Switch>
  </HashRouter>
);
