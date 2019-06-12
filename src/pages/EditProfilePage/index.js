import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import EditProfileForm from '../../containers/EditProfileForm';
import ProfileCard from '../../containers/ProfileCard';



const EditProfilePage = props => {
    return (
        <>
            <Navbar />
            <SideNav />
            <EditProfileForm {...props}/>
            <ProfileCard {...props}/>
        </>
    );
};

export default EditProfilePage;
