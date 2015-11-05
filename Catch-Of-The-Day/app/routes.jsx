// Router Config. Include components and App structure here

import React from 'react';
import Router, {Route, RouteHandler, DefaultRoute} from 'react-router';

// Components to navigate to
import App from './components/App.jsx';

// App describes the layout of the whole site
// Home is landing page
export default (
  <Route name="app" path="/" handler={App}>
  </Route>
);
