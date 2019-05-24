import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import ViewSchool from '../../components/ViewSchool';
import Teaser from '../../components/Teaser';

class SignUpPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Teaser />
        <ViewSchool />
        


      </>
    );
  }
}

export default SignUpPage;
