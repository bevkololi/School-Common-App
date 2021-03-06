import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import UpdateSchoolForm from '../../containers/UpdateSchoolForm';
import ProfileCard from '../../containers/ProfileCard';



const EditSchoolsPage = props => {
    return (
        <>
            <Navbar />
            <SideNav />
            <UpdateSchoolForm {...props}/>
            <ProfileCard {...props}/>
        </>
    );
};

export default EditSchoolsPage;
