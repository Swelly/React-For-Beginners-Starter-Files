// Load additional assets in /assets
require.context(
  "./assets",
  true,
  /.*/
);

// App JS entry point. Router Run here.

// import './favicon.ico';
import './index.html';
import './scss/_normalize.scss';
import './scss/master.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

// Bind to body
const mountNode = document.getElementById('main');

ReactDOM.render(routes, mountNode);