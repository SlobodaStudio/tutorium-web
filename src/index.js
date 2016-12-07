import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
);

/* develblock:start */
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
/* develblock:end */
