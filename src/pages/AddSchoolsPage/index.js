import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddSchoolForm from '../../containers/AddSchoolForm';
import ProfileCard from '../../containers/ProfileCard';



const AddSchoolsPage = props => {
    return (
        <>
            <Navbar />
            <SideNav />
            <AddSchoolForm {...props} />
            <ProfileCard {...props}/>
        </>
    );
}

export default AddSchoolsPage;
