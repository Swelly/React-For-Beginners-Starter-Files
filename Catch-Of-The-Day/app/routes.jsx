// Router Config. Include components and App structure here

import React from 'react';
import Router, {Route, RouteHandler, DefaultRoute} from 'react-router';

// Components = {Handler_Name}
import App from './components/App.jsx';

import StorePicker from './components/StorePicker.jsx';

// App describes the layout of the whole site
// Home is landing page
export default (
  <Route name="app" path="/" handler={App}>
    <Route name="storepicker" path="/picker" handler={StorePicker} />
  </Route>
);
