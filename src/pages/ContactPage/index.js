import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Event from '../../components/Event';
import shule5 from '../../assets/images/shule5.jpg';



class ContactPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="hero-area section">
                    <div className="bg-image bg-parallax overlay" style={{ backgroundImage: "url(" + shule5 + ")" }}></div>


                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 text-center">
                                <h1 className="white-text">Contact Us</h1>
                                <h4 className="white-text">Contact the SakaShule team for any queries</h4>

                            </div>
                        </div>
                    </div>

                </div>
                <div id="contact" className="section">


                    <div className="container">


                        <div className="row">


                            <div className="col-md-6">
                                <div className="contact-form">
                                    <h4>Send A Message</h4>
                                    <form>
                                        <input className="input" type="text" name="name" placeholder="Name" />
                                        <input className="input" type="email" name="email" placeholder="Email" />
                                        <input className="input" type="text" name="subject" placeholder="Subject" />
                                        <textarea className="input" name="message" placeholder="Enter your Message"></textarea>
                                        <button className="main-button icon-button pull-right">Send Message</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-5 col-md-offset-1">
                                <h4>Contact Information</h4>
                                <ul className="contact-details">
                                    <li><i className="fa fa-envelope"></i>Educate@email.com</li>
                                    <li><i className="fa fa-phone"></i>122-547-223-45</li>
                                    <li><i className="fa fa-map-marker"></i>4476 Clement Street</li>
                                </ul>


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
}

export default ContactPage;
