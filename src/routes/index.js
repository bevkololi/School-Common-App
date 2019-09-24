import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ROUTES from '../utils/routes';
import { getCurrentUser } from '../utils/auth';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';
import SchoolsPage from '../pages/SchoolsPage';
import ViewSchoolPage from '../pages/ViewSchoolPage';
import AlbumPage from '../pages/AlbumPage';
import EventsPage from '../pages/EventsPage';
import UpdatesPage from '../pages/UpdatesPage';
import UniformsPage from '../pages/UniformsPage';
import ContactPage from '../pages/ContactPage';
import AddSchoolsPage from '../pages/AddSchoolsPage';
import EditSchoolsPage from '../pages/EditSchoolsPage';
import AddEventsPage from '../pages/AddEventsPage';
import AddUpdatesPage from '../pages/AddUpdatesPage';
import AddUniformsPage from '../pages/AddUniformsPage';
import EditProfilePage from '../pages/EditProfilePage';

class AuthenticatedRoute extends Component {
  constructor(props) {
    super(props);
    this.user = getCurrentUser();
    this.isAuthenticated = this.user != null;
  }

  renderIfNotAuthenticated(component) {
    const { path } = this.props;
    return (
      path === ROUTES.auth.login || path === ROUTES.auth.register
        ? (component)
        : (<Redirect to={{ pathname: ROUTES.auth.login }} />)
    );
  }

  renderIfAuthenticated(component) {
    const { path, location } = this.props;
    return (
      path === ROUTES.auth.login || path === ROUTES.auth.register ? (
        <Redirect
          to={{ pathname: ROUTES.index, state: { from: location } }}
        />
      ) : (
        component
      )
    );
  }

  render() {
    const { component: Comp, ...otherProps } = this.props;
    return (
      <Route
        {...otherProps}
        render={props => (
          this.isAuthenticated
            ? this.renderIfAuthenticated(<Comp {...props} user={this.user} />)
            : this.renderIfNotAuthenticated(<Comp {...props} user={this.user} />)
        )}
      />
    );
  }
}

export default () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.index} component={HomePage} />
      <Route exact path={ROUTES.schools.all} component={SchoolsPage} />
      <Route exact path={ROUTES.schools.view} component={ViewSchoolPage} />
      <Route exact path={ROUTES.album} component={AlbumPage} />
      <Route exact path={ROUTES.events} component={EventsPage} />
      <Route exact path={ROUTES.addupdate} component={UpdatesPage} />
      <Route exact path={ROUTES.uniforms} component={UniformsPage} />
      <Route exact path={ROUTES.contact} component={ContactPage} />
      <AuthenticatedRoute exact path={ROUTES.schools.create} component={AddSchoolsPage} />
      <AuthenticatedRoute exact path={ROUTES.schools.update} component={EditSchoolsPage} />
      <Route exact path={ROUTES.addevent} component={AddEventsPage} />
      <Route exact path={ROUTES.addupdate} component={AddUpdatesPage} />
      <Route exact path={ROUTES.adduniforms} component={AddUniformsPage} />
      <AuthenticatedRoute exact path={ROUTES.auth.register} component={SignUpPage} />
      <AuthenticatedRoute exact path={ROUTES.auth.login} component={LoginPage} />
      <AuthenticatedRoute exact path={ROUTES.profile} component={EditProfilePage} />
    </Switch>
  </Router>
);

AuthenticatedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
