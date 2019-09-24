import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';

class SideNav extends Component {
  render() {
    return (
      <>
        <div className="col-md-3 col-sm-6">
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav fa-ul">
              <li>
                <i className="fa-li fa fa-home" aria-hidden="true"></i>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i className="fa-li fa fa-plus-circle" aria-hidden="true"></i>
                <Link to={ROUTES.schools.create}>Add School</Link>
              </li>
              
              <li>
                <i className="fa-li fa fa-edit" aria-hidden="true"></i>
                <Link to={ROUTES.schools.update}>Update School</Link>
              </li>
              <li>
                <i className="fa-li fa fa-trash" aria-hidden="true"></i>
                <Link to={ROUTES.schools.update}>Delete School</Link>
              </li>
              <li>
                <i className="fa-li fa fa-calendar" aria-hidden="true"></i>
                <Link to={ROUTES.addevent}>Events</Link>
              </li>
              <li>
                <i className="fa-li fa fa-envelope" aria-hidden="true"></i>
                <Link to={ROUTES.addupdate}>Updates</Link>
              </li>
              <li>
                <i className="fa-li fa fa-users" aria-hidden="true"></i>
                <Link to={ROUTES.adduniforms}>Uniforms</Link>
              </li>
              <li>
                <i className="fa-li fa fa-bell" aria-hidden="true"></i>
                <a href="#">Notifications</a>
              </li>
              <li>
                <i className="fa-li fa fa-cog" aria-hidden="true"></i>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default SideNav;
