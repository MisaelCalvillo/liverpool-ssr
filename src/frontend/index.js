import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

import App from './components/App';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
, document.getElementById('app'));