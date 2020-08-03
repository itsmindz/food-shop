import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'
import LoginForm from './components/Navbar/form/LoginForm';
import product from './components/Navbar/product';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/product" component={product}/>
    <Route path="login"component={LoginForm}/>  
  </Router>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
