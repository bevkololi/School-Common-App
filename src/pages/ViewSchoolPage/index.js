import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import ViewSchool from '../../containers/ViewSchool';
// import Teaser from '../../components/Teaser';

const ViewSchoolPage = props => {
  return (
    <>
      <Navbar />
      {/* <Teaser /> */}
      <ViewSchool {...props} />
    </>
  );
};

export default ViewSchoolPage;
