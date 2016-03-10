import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app/App.react';
import Home from './home/Page.react';
import NotFound from './notfound/Page.react';

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
