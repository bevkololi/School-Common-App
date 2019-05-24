import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import LoginForm from '../../containers/LoginForm';


class LoginPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <LoginForm history={this.props.history}/>
        <Navbar />
      </>
    );
  }
}

export default LoginPage;
