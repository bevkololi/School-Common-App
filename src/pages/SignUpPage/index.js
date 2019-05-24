import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SignUpForm from '../../containers/SignUpForm';

class SignUpPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SignUpForm />
        <Navbar />
      </>
    );
  }
}

export default SignUpPage;
