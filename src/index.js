import 'material-design-icons/iconfont/material-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'react-toolbox/lib/commons.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './redux/modules'
import App from './containers/app/App'

import './index.scss'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

/* develblock:start */
if (module.hot) {
  module.hot.accept('./containers/app/App', () => {
    const NextApp = require('./containers/app/App').default // eslint-disable-line global-require
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
/* develblock:end */
