import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import application from './reducers';

import './index.scss';
import Announcement from './containers/Announcement';

const store = createStore(application);

ReactDOM.render(
  <Provider store={store}>
    <Announcement />
  </Provider>,
  document.getElementById('root'));