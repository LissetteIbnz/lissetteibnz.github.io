import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ScrollToTop } from '@/common/hooks';
import {
  AboutScene,
  BlogScene,
  HomeScene,
  NotFoundScene,
  PostDetailsScene,
  ProjectsScene,
} from '@/scenes';
import { switchRoutes } from './routes';
import { AppLayout } from '@/layouts';

export const RouterComponent = () => (
  <HashRouter>
    <AppLayout>
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
        {/* <Route exact={true} path={switchRoutes.projects}>
        <ProjectsScene />
      </Route> */}
        <Route path={switchRoutes.blogPost}>
          <PostDetailsScene />
        </Route>
        <Route path={switchRoutes.notFound}>
          <NotFoundScene />
        </Route>
        <Route>
          <Redirect to={switchRoutes.notFound} />
        </Route>
      </Switch>
    </AppLayout>
  </HashRouter>
);
