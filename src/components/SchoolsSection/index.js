import React, { Component } from 'react';
import shule5 from '../../assets/images/shule5.jpg';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';


class SchoolsSection extends Component {
    render() {
        return (
            <>
                <div id="schools" className="section">

                    <div className="container">

                        <div className="row">
                            <div className="section-header text-center">
                                <h2>Explore Schools</h2>
                                <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                            </div>

                            <div id="schools-wrapper">
                                <div className="row">

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">BMoi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="center-btn">
                                <Link to={ROUTES.schools} className="main-button icon-button">
                                    More Schools
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default SchoolsSection;
