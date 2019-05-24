import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/index.css';
import Router from './routes';
import * as serviceWorker from './serviceWorker';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
