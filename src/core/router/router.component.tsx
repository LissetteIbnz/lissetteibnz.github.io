import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppMenu } from '@/common/components';
import { BlogPost } from '@/pods/blog-post';
import { AboutScene, HomeScene } from '@/scenes';
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
      {/* <Route path={baseRoutes.blogPost}>
        <BlogPost />
      </Route> */}
      <Route path={baseRoutes.blogPost}>
        <BlogPost />
      </Route>
    </Switch>
  </HashRouter>
);

// blog/🚀%20First%20post%20(test%20blog)/1
