import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import logo3 from '../../assets/images/logo3.png';
import shule5 from '../../assets/images/shule5.jpg';

class Navbar extends Component {
  render() {
    return (
      <>
        <header id="header">
          <div className="container">

            <div className="navbar-header">
              <div className="navbar-brand">
                <Link to={ROUTES.index} className="logo">
                  <img src={logo3} alt="logo" />
                  <h5>Saka Shule</h5>
                </Link>
              </div>

              <button className="navbar-toggle">
                <span></span>
              </button>
            </div>

            <nav id="nav">
              <ul className="main-menu nav navbar-nav navbar-right">
                <li><Link to={ROUTES.index}>Home</Link></li>
                <li><Link to={ROUTES.schools}>Schools</Link></li>
                <li><Link to={ROUTES.auth.login}>Login</Link></li>
                <li><Link to={ROUTES.contact}>Contact</Link></li>
                <li className="drop-down">
                  <a href="#">
                  <img src={shule5} className="profile-image img-circle" /></a>
                  <ul>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">me</a></li>
                    <li><a href="#">Board</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
