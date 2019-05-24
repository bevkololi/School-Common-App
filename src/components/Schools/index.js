import React, { Component } from 'react';
import shule5 from '../../assets/images/shule5.jpg';

class Schools extends Component {
    render() {
        return (
            <>
                <div className="hero-area section">
                    <div className="bg-image bg-parallax overlay" style={{ backgroundImage: "url(" + shule5 + ")" }}></div>


                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 text-center">
                                <h1 className="white-text">Find your school of choice</h1>

                            </div>
                        </div>
                    </div>

                </div>
                <div id="blog" className="section">

                    <div className="container">

                        <div className="row">

                            <div id="aside" className="col-md-3">


                                {/* <div className="widget search-widget">
                                    <form>
                                        <input className="input" type="text" name="search" />
                                        <button><i className="fa fa-search"></i></button>
                                    </form>
                                </div> */}


                                <div className="widget category-widget">
                                    <h3>Categories</h3>
                                    <a className="category" href="#">Kindergarten <span>12</span></a>
                                    <a className="category" href="#">Primary School <span>5</span></a>
                                    <a className="category" href="#">Secondary School <span>24</span></a>
                                    <a className="category" href="#">University <span>78</span></a>
                                    <a className="category" href="#">Others <span>36</span></a>
                                </div>

                                <div className="widget posts-widget">
                                    <h3>Most Popular Schools</h3>


                                    <div className="single-post">
                                        <a className="single-post-img" href="blog-post.html">
                                            <img src={shule5} alt="" />
                                        </a>
                                        <a href="blog-post.html">Limuru Girls School</a>
                                        <br />
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <div className="single-post">
                                        <a className="single-post-img" href="blog-post.html">
                                            <img src={shule5} alt="" />
                                        </a>
                                        <a href="blog-post.html">Limuru Girls School</a>
                                        <br />
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <div className="single-post">
                                        <a className="single-post-img" href="blog-post.html">
                                            <img src={shule5} alt="" />
                                        </a>
                                        <a href="blog-post.html">Limuru Girls School</a>
                                        <br />
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <div className="single-post">
                                        <a className="single-post-img" href="blog-post.html">
                                            <img src={shule5} alt="" />
                                        </a>
                                        <a href="blog-post.html">Limuru Girls School</a>
                                        <br />
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <div className="single-post">
                                        <a className="single-post-img" href="blog-post.html">
                                            <img src={shule5} alt="" />
                                        </a>
                                        <a href="blog-post.html">Limuru Girls School</a>
                                        <br />
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>



                                </div>


                            </div>
                            <div id="main" className="col-md-9">



                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        Search Schools
                                            </div>
                                    <div className="panel-body">

                                        <form className="form-inline">
                                            <div className="form-group">
                                                <label>Find</label>
                                                <input className="form-control input-sm @cell" placeholder="text" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <label>County</label>
                                                <select className="form-control input-sm" data-bind="options: Partners, optionsText: 'Name', optionsValue: 'Id', value: FilterPartner">
                                                    <option>[All]</option>
                                                    <option>Laikipia</option>
                                                    <option>Nyeri</option>
                                                    <option>Mombasa</option>
                                                    <option>Kitui</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Type</label>
                                                <select className="form-control input-sm" data-bind="options: Partners, optionsText: 'Name', optionsValue: 'Id', value: FilterPartner">
                                                    <option>[All]</option>
                                                    <option>Private</option>
                                                    <option>Public</option>
                                                    <option>Girls School</option>
                                                    <option>Boys School</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-info btn-sm"><i className="fa fa-search"></i>&nbsp;Search</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div id="push"></div>



                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="school">
                                            <a href="#" className="school-img">
                                                <img src={shule5} alt="school" />
                                                <i className="school-link-icon fa fa-link"></i>
                                            </a>
                                            <a className="school-title" href="#">Moi Kabarak High School Moi Kabarak High School Moi Kabarak High School</a>
                                            <div className="school-details">
                                                <span className="school-category">High School</span>
                                                <span className="school-price school-free">Private</span>
                                            </div>
                                        </div>
                                    </div>



                                </div>


                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="post-pagination">
                                            <a href="#" className="pagination-back pull-left">Back</a>
                                            <ul className="pages">
                                                <li className="active">1</li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                            </ul>
                                            <a href="#" className="pagination-next pull-right">Next</a>
                                        </div>
                                    </div>


                                </div>

                            </div>


                        </div>


                    </div>


                </div>
            </>
        );
    }
}

export default Schools;
