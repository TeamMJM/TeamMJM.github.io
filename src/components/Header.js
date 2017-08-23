import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery';

// import stylesheets 
import './../styles/Header.css';

// import material-ui components 
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
  margin: 6,
  marginTop: '20px',
  sub: {
    paddingLeft: '5px',
    color: 'gray',
    textTransform: 'none',
    letterSpacing: '2px',
  },
  label: {
    textTransform: 'none',
    fontSize: '30px',
    paddingRight: '5px',
    color: '#E0E1E5',
    letterSpacing: '5px',
  },
  button: {
    marginLeft: '5px', 
    border: '1px solid gray', 
    borderRadius: '50px'
  }
};

class Header extends Component {
  componentDidMount() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 1) {
        $(".topnav").addClass("active");
      } else {
       $(".topnav").removeClass("active");
      }
    });
  }

  render() {
    return (
      <header>
        <Paper 
          rounded={false} style={{backgroundColor: 'none'}} 
          zDepth={1} 
          className="topnav" 
          id="myTopnav"
          >
          <div className="topnav-content">
            <img className='logo' src='./../../images/logo.png'/>
            <Link to='/'>
              <FlatButton hoverColor='none' labelStyle={style.label} label='Spion IO' />
            </Link>
            <Link to='/'>
              <FlatButton hoverColor='none' labelStyle={style.sub} label='/ PROTOTYPE v0.0.1 /' />
            </Link>
          </div>
        </Paper>
      </header>
    )
  }
}

export default Header;
