import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Login from './components/Auth/login.jsx';
import Signup from './components/Auth/signup.jsx';
require('./styles/loaderbutton.css');
require('./styles/login.css');
require('./styles/signup.css')


ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Signup} />
    <Route path="/" component={Login} />
  </Router>,
  document.getElementById('app'));