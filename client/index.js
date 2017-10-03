import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Login from './components/Auth/login.jsx'
// require('./index.scss');


ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Login}>
    </Route>
  </Router>,
  document.getElementById('app'));