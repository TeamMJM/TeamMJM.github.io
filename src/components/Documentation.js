import React, { Component } from 'react';
import $ from 'jquery';

// import react-scroll found on Github that helps with 'Get Started' scroll animation
import Scroll from 'react-scroll';
let scroll     = Scroll.animateScroll;

// import material-ui components
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

// import stylesheets
import './../styles/Doc.css';
import './../styles/Welcome.css';

const style = {
  margin: 6,
  marginTop: '20px',
  sub: {
    paddingLeft: '5px',
    color: 'gray',
    textTransform: 'none',
    letterSpacing: '1px',
  },
  label: {
    fontSize: '30px',
    paddingRight: '5px',
    color: '#E0E1E5',
    textTransform: 'none',
    letterSpacing: '1px',
  },
  paper: {
    height: '80px',
  },
};

class Doc extends Component {

  // handle individual section animations
  componentDidMount() {
    $(window).on("scroll", function() {
      if( ($(window).scrollTop() > 225) && ($(window).scrollTop() < 1300 ) )  {
        $(".doc-section2").removeClass("doc-section2-visible");
        $(".doc-section2").addClass("animated zoomIn");
      } else {
        $(".doc-section2").addClass("doc-section2-visible");
        $(".doc-section2").removeClass("animated zoomIn");
      }
      if ( ($(window).scrollTop() > 970 ) && ($(window).scrollTop() < 2400) ) {
        $(".doc-section3-content").removeClass("doc-section3-visible");
        $(".doc-section3-content").addClass("animated fadeInLeftBig");
      } else {
        $(".doc-section3-content").addClass("doc-section3-visible");
        $(".doc-section3-content").removeClass("animated fadeInLeftBig")
      }
      if ( ($(window).scrollTop() > 2920 ) && ($(window).scrollTop() < 3600) ) {
        $(".doc-section4-letsbuild").removeClass("doc-section4-letsbuild-visible");
        $(".doc-section4-letsbuild").addClass("animated zoomIn");
      } else {
        $(".doc-section4-letsbuild").addClass("doc-section4-letsbuild-visible");
        $(".doc-section4-letsbuild").removeClass("animated zoomIn")
      }
    });
  }

  render() {
    return(
      <div>
        <div className='doc-section1'>
        <h2 className='doc-title'>FOCUS GROUP MANAGEMENT PLATFORM</h2>

          <p className='doc-sub-2'>Open source developer tool for capturing<br/>and analyzing user interaction to<br/>radically improve UX</p>
        <RaisedButton style={{marginTop: '4%'}} label='Github' href='http://github.com/TeamMJM/SpionIO'></RaisedButton>
        <RaisedButton style={{marginTop: '4%', marginLeft: '2%'}} label='NPM' href='http://npmjs.com/create-spion'></RaisedButton>

        <div className='scroll demo' id='section07'>
            <a className='a' onClick={() => scroll.scrollTo(805)}>
              <span></span><span></span><span></span>
            </a>
            <br/><br/><br/>GET STARTED
        </div>
        </div>

        <div className='doc-section2'>
          <br/>
          <hr style={{marginBottom: '2%'}} width='15%'/>
          <h1 className='doc-section2-title'>How It Works</h1>
          <hr style={{marginTop: '2%'}} width='15%'/>
          <table>
            <tr>
              <td className='td-welcome'>
                <img className='mini-logo-website' src='./../../images/1.png'/>
                <h3 className='td-title'>Take Control</h3>
                <p className='td-sub'>By injecting our script into the top level of the front-end of your app and cloning our interface from Github, as a developer you now have the tools to manage your own focus groups remotely and fully capture user sessions on your website.</p>
              </td>
              <td className='td-welcome'>
                <img className='mini-logo-database' src='./../../images/2.png'/>
                <h3 className='td-title'>Bring the Best to Market</h3>
                <p className='td-sub'>Now that all of the management power is in your hands, you can analyze a variety of user interactions and determine the best course of action in redesigning to drastically improve UX in all of your deployed websites, with confidence.</p>
              </td>
              <td className='td-welcome'>
                <img className='mini-logo-machinelearning' src='./../../images/3.png'/>                
                <h3 className='td-title'>Scalability</h3>
                <p className='td-sub'>With an open source approach to this solution, we've discovered a way to keep costs completely free out-of-the box while giving you complete control over your costs by giving the developer's the option of providing their own server</p>
              </td>
            </tr>
          </table>
        </div>


        <div className='doc-section3'>
          <div className='doc-section3-content'>
          <hr style={{marginBottom: '2%', borderColor: 'lightgray', color: 'lightgray'}} width='15%'/>
          <h1 className='doc-section3-title'>The platform for managing modern front-end <br/>web applications.</h1>
          <hr style={{marginTop: '2%', borderColor: 'lightgray', color: 'lightgray'}} width='15%'/>
          <br/><br/><br/><br/><br/><br/><p className='gif'><img style={{width: '850px', height: '550px'}} src='./../../images/screen.png'/></p>
          </div>
        </div>

        <div className='doc-section4'>
          <div className='doc-section4-team'>
          <hr style={{marginBottom: '2%'}} width='15%'/>
          <h1>Meet the Team.</h1>
          <hr style={{marginTop: '2%'}} width='15%'/>
          <table style={{marginTop: '5%'}}>
            <tr>
              <td className='td-welcome'>
                <a href='https://github.com/morpherious'><Avatar style={{height: '200px', width: '360px', marginBottom: '10%', marginTop: '10%', transform: 'rotate(270deg)'}} src='./../../images/mustafa.JPG'/></a><br/><br/><br/>
                <img className='linkedin-logo' src='./../../images/linkedin.png'/><FlatButton style={{float: 'left', marginTop: '1%', margin: '0 auto'}} hoverColor='none' labelStyle={{letterSpacing: '3px', padding: '0'}} label='Mustafa Khan' href='https://www.linkedin.com/in/-mustafakhan/'></FlatButton>
              </td>
                <td className='td-welcome'>
                <a href='https://github.com/mm0nr0e'><Avatar style={{height: '200px', width: '360px', marginBottom: '10%', marginTop: '10%', transform: 'rotate(270deg)'}} src='./../../images/miranda.JPG'/></a><br/><br/><br/>
                <img className='linkedin-logo2' src='./../../images/linkedin.png'/><FlatButton style={{float: 'left', marginTop: '1%', margin: '0 auto'}} hoverColor='none' labelStyle={{letterSpacing: '3px', padding: '0'}} label='Miranda Monroe' href='https://www.linkedin.com/in/mirandajeanmonroe/'></FlatButton>
              </td>
              <td className='td-welcome'>
                <a href='https://github.com/j3rryj'><Avatar style={{height: '200px', width: '360px', marginBottom: '10%', marginTop: '10%', transform: 'rotate(270deg)'}} src='./../../images/jerry.JPG'/></a><br/><br/><br/>
                <img className='linkedin-logo' src='./../../images/linkedin.png'/><FlatButton style={{float: 'left', marginTop: '1%', margin: '0 auto'}} hoverColor='none' labelStyle={{letterSpacing: '3px', padding: '0'}} label='Jerry Jong' href='https://www.linkedin.com/in/jerry-jong/'></FlatButton>
              </td>
            </tr>
          </table>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div className='doc-section4-lets'>
          <p className='doc-section4-letsbuild'>Let's build something great together.</p>
          </div>
        </div>

        <div className='doc-sectionfooter'>
          <ul className='doc-footer-company'>
            <li className='doc-footer-company-title'>Company</li>
            <li>Blog</li>
            <li>Customers</li>
            <li>Team</li>
            <li>Career</li>
          </ul>




          <ul className='doc-footer-list'>
            <li className='doc-footer-individual'>Contact</li>
            <li className='doc-footer-individual'>Terms</li>
            <li className='doc-footer-individual'>Privacy</li>
            <li className='doc-footer-individual'>@Private-I</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Doc;