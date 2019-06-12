import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import shule6 from '../../assets/images/shule6.jpg';
import Schools from '../../containers/AllSchools';

const SchoolsPage = props => {
  return (
    <>
      <Navbar />
      <Schools {...props} />
    </>
  );
};

export default SchoolsPage;
