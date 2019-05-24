import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddSchoolForm from '../../containers/AddSchoolForm';
import ProfileCard from '../../components/ProfileCard';



const AddSchoolsPage = props => {
    return (
        <>
            <Navbar />
            <SideNav />
            <AddSchoolForm {...props} />
            <ProfileCard />
        </>
    );
}

export default AddSchoolsPage;
