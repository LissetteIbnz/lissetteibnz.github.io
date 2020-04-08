import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppMenu } from '@/common/components';
import { AboutScene, BlogScene, HomeScene, PostDetailsScene, ProjectsScene } from '@/scenes';
import { switchRoutes } from './routes';

export const RouterComponent = () => (
  <HashRouter>
    <AppMenu />
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
    </Switch>
  </HashRouter>
);
