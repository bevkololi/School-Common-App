import React, { Component } from 'react';
import shule5 from '../../assets/images/shule5.jpg';
import avatar from '../../assets/images/group-avatar.png';
import { fetchSchoolsAction } from '../../containers/ListSchools/state/actions';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '../../routes';

class Schools extends Component {
  state = {
    schools: {
      results: []
    },
    total_pages: null,
    next_page: null,
    previous_page: null,
  };

  componentDidMount() {
    const { fetchSchools, match = {} } = this.props;
    const { params = {} } = match;
    const { pageNumber } = params;
    fetchSchools(pageNumber);
  }


  render() {
    const { schools, previous_page, next_page } = this.props;
    const current_page = this.props.match.params.pageNumber;
    const next_url = next_page ? next_page.split("=").slice(-1)[0] : null
    const previous_url = previous_page == "http://127.0.0.1:8000/api/schools/" ? 1
                        : previous_page ? previous_page.split("=").slice(-1)[0] : null
    const n = this.props.total_pages;
    const schoolList = schools.length ? (
      schools.map(school => {
        return (
          <div className="col-md-4" key={school.slug}>
            <div className="school">
              <Link to={`/schools/view/${school.slug}`} className="school-img">
                <img src={school.school.image || avatar} alt="school" />
                <i className="school-link-icon fa fa-link"></i>
              </Link>
              <a className="school-title" href={`/schools/view/${school.slug}`}>{school.name}</a>
              <div className="school-details">
                <span className="school-category">{school.school.level}</span>
                <span className="school-price school-free">{school.school.ownership}</span>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="col-md-12" style={{ textAlign: "center", paddingTop: "30px" }}>
        <h3 className="center">No schools to show</h3>
      </div>
      );

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

                  {schoolList}

                </div>


                <div className="row">


                  <div className="col-md-12">
                    <div className="post-pagination">
                      {previous_url
                        ? <a href={`/schools/all/${previous_url}`} className="pagination-back pull-left">Back</a>
                        : null
                      }
                      <ul className="pages">
                        {[...Array(n)].map((x, i) =>
                          <li key={i} className={`${(current_page == (i + 1)) ? 'active' : ''}`}><a href={`/schools/all/${i + 1}`}>{i + 1}</a></li>
                        )}
                      </ul>
                      {next_url
                        ? <a href={`/schools/all/${next_url}`} className="pagination-next pull-right">Next</a>
                        : null
                      }
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

Schools.defaultProps = {
  schools: {
    results: {}
  },
};

Schools.propTypes = {
  errors: PropTypes.shape({}),
  fetchSchools: PropTypes.func.isRequired,
};

const mapStateToProps = ({ listschools }) => listschools;

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSchools: fetchSchoolsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Schools);
