import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

/////////// import components ///////////
import Header from './Header.js';
import Documentation from './Documentation.js';

/////////// import stylesheets ///////////
import './../styles/App.css';

const Website = () => (
  <div>
    <Header />
    <Documentation />
  </div>
)

export default Website;
