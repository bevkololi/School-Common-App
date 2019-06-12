import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import ListSchools from '../../containers/ListSchools';
import login from '../../assets/images/login.jpg';
import shule5 from '../../assets/images/shule5.jpg';
import shule1 from '../../assets/images/shule1.jpg';
import shule16 from '../../assets/images/shule16.JPG';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';


const HomePage = props => {
  return (
    <>
      <Navbar />

      <div id="home" className="hero-area">

        <div className="bg-image bg-parallax overlay" style={{ backgroundImage: "url(" + login + ")" }}></div>

        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="white-text">Free online search engine for Kenyan schools</h1>
                <p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
                <Link to={ROUTES.schools} className="main-button icon-button" href="#">
                  Get Started!
                  </Link>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div id="about" className="section">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="section-header">
                <h2>Welcome to Sakashule</h2>
                <p className="lead">We help you find the right school for your children.</p>
              </div>

              <div className="feature">
                <i className="feature-icon fa fa-search"></i>
                <div className="feature-content">
                  <h4>School database</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>

              <div className="feature">
                <i className="feature-icon fa fa-comments"></i>
                <div className="feature-content">
                  <h4>Enquiries</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>

              <div className="feature">
                <i className="feature-icon fa fa-envelope"></i>
                <div className="feature-content">
                  <h4>Constant updates</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>

              <div className="feature">
                <i className="feature-icon fa fa-users"></i>
                <div className="feature-content">
                  <h4>Community</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-img">
                <img src={shule5} alt="school girls" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListSchools {...props} />

        <div id="cta" className="section">

        <div className="bg-image bg-parallax overlay" style={{ backgroundImage: "url(" + shule16 + ")" }}></div>

        <div className="container">

          <div className="row">

            <div className="col-md-6">
              <h2 className="white-text">We manage your applications to various schools all around Kenya</h2>
              <p className="lead white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
              <a className="main-button icon-button" href="#">Apply!</a>
            </div>

          </div>

        </div>

      </div>


      <div id="why-us" className="section">

        <div className="container">

          <div className="row">
            <div className="section-header text-center">
              <h2>Services</h2>
              <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
            </div>

            <div className="col-md-4">
              <div className="feature">
                <i className="feature-icon fa fa-flask"></i>
                <div className="feature-content">
                  <h4>Online Courses</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature">
                <i className="feature-icon fa fa-users"></i>
                <div className="feature-content">
                  <h4>Expert Teachers</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature">
                <i className="feature-icon fa fa-comments"></i>
                <div className="feature-content">
                  <h4>Community</h4>
                  <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                </div>
              </div>
            </div>

          </div>

          <hr className="section-hr" />

          <div className="row">

            <div className="col-md-6">
              <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
              <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
              <p>No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.</p>
            </div>

            <div className="col-md-5 col-md-offset-1">
              <a className="about-video" href="#">
                <img src={shule16} alt="" />
                <i className="play-icon fa fa-play"></i>
              </a>
            </div>

          </div>

        </div>

      </div>

      <div id="contact-cta" className="section">


        <div className="bg-image bg-parallax overlay" style={{ backgroundImage: "url(" + shule1 + ")" }}></div>

        <div className="container">

          <div className="row">

            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="white-text">Contact Us</h2>
              <p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
              <Link to={ROUTES.contact} className="main-button icon-button">Contact Us Now</Link>
            </div>

          </div>

        </div>

      </div>
      <footer id="footer" className="section">

        <div className="container">

          <Navbar />
          <div id="bottom-footer" className="row">

            <div className="col-md-4 col-md-push-8">
              <ul className="footer-social">
                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>

            <div className="col-md-8 col-md-pull-4">
              <div className="footer-copyright">
                <span>&copy; Copyright 2019. All Rights Reserved</span>
              </div>
            </div>

          </div>

        </div>

      </footer>


    </>
  );
}
export default HomePage;
