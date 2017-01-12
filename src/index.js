import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App'; // TODO: simplify import

import 'material-design-icons/iconfont/material-icons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'react-toolbox/lib/commons.scss';
import './index.scss';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
);

/* develblock:start */
if (module.hot) {
  module.hot.accept('./containers/App/App', () => { // TODO: simplify path access
    const NextApp = require('./containers/App/App').default; // TODO: simplify path access
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
/* develblock:end */
