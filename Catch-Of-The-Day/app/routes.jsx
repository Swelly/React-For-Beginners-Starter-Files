// Router Config. Include components and App structure here
import React from 'react';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

// Components = {Handler_Name}
import App from './components/App.jsx';
import NotFound from './components/NotFound.jsx';
import StorePicker from './components/StorePicker.jsx';

let routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

export default routes;
