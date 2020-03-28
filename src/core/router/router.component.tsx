import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HomeScene, AboutScene } from '~/scenes';
import { baseRoutes } from './routes';

export const RouterComponent = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path={baseRoutes.root}>
        <Redirect to={baseRoutes.home} />
      </Route>
      <Route exact={true} path={baseRoutes.home}>
        <HomeScene />
      </Route>
      <Route exact={true} path={baseRoutes.home}>
        <AboutScene />
      </Route>
    </Switch>
  </HashRouter>
);
