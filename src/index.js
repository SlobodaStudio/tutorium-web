import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'redux/modules/root_reducer'

import 'material-design-icons/iconfont/material-icons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'react-toolbox/lib/commons.scss';
import './index.scss';

const store = createStore(reducer)
const rootEl = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
  rootEl
);

/* develblock:start */
if (module.hot) {
  module.hot.accept('./containers/app/App', () => {
    const NextApp = require('./containers/app/App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
/* develblock:end */
