import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/////////// import our React components ///////////
import Website from './Website.js';

/////////// import stylesheets ///////////
import './../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component { 
  render() {
    return(

      <Router>
        <MuiThemeProvider>
          <Route exact path='/' component={Website}/>
        </MuiThemeProvider>
      </Router>

    )
  }
}

export default App;
