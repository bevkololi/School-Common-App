import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import logo3 from '../../assets/images/logo3.png';
import shule5 from '../../assets/images/shule5.jpg';
import avatar from '../../assets/images/avatar.jpg';
import PreLoader from '../../components/PreLoader';
import { getCurrentUser, getToken } from '../../utils/auth';


class Navbar extends Component {
  timeout;
  state = {
    hiddenLoader: false,
  }

  logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  onClick = () => {
    window.location.href = "/profile/update"
  }

  getAuthenticatedMenu = user => (
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
              <li><Link to="/schools/all/1">Schools</Link></li>
              <li><Link to={ROUTES.contact}>Contact</Link></li>
              <li className="drop-down">
                <a href="#">
                  <img src={user.image || avatar} className="profile-image img-circle" /></a>
                <ul>
                  <li onClick={this.onClick}><a>Profile</a></li>
                  <li><Link to={ROUTES.schools.create}>Add School</Link></li>
                  <li><Link to={ROUTES.index}>My schools</Link></li>
                  <li><Link to={ROUTES.index}>Notifications</Link></li>
                  <li onClick={this.logout}><a>Logout</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );

  getMenu = user => (
    <>
      {
        user ? this.getAuthenticatedMenu(user)
          : (
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
                      <li><Link to={ROUTES.schools.all}>Schools</Link></li>
                      <li><Link to={ROUTES.contact}>Contact</Link></li>
                      <li><Link to={ROUTES.auth.login}>Login</Link></li>
                    </ul>
                  </nav>
                </div>
              </header>
            </>
          )
      }
    </>
  );

  componentWillReceiveProps = (nextProps) => {
    const { isPageLoading } = nextProps;
    if (isPageLoading) {
      this.setState({ hiddenLoader: false });
    } else {
      this.timeout = setTimeout(() => {
        /* istanbul ignore next */
        this.setState({ hiddenLoader: true });
      }, 500);
    }
  };

  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  showProgress = (pageLoading) => {
    const { hiddenLoader } = this.state;

    const loader = (
      <PreLoader
        determinate
        progress={pageLoading ? 50 : 100}
        horizontal
        classNames={(hiddenLoader) && 'hidden'}
      />
    );
    return loader;
  };

  render() {
    const { user: propsUser } = this.props;
    const user = getCurrentUser() || propsUser;
    const token = getToken();
    const { isPageLoading, left, right } = this.props;

    return (
      <>
        {this.getMenu(user)}
        {/* {this.showProgress(isPageLoading)} */}
      </>
    );
  }
}

Navbar.defaultProps = {
  isPageLoading: false,
  left: null,
  right: null,
};

Navbar.propTypes = {
  isPageLoading: PropTypes.bool,
  left: PropTypes.shape(),
  right: PropTypes.shape(),
  user: PropTypes.shape({}),
};


const mapStateToProps = pageProgress => pageProgress;

export default connect(mapStateToProps, null)(Navbar);

