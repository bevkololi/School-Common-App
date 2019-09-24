import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddUniformsForm from '../../containers/AddUniformsForm';
import ProfileCard from '../../containers/ProfileCard';



const AddUniformsPage = props => {
    return (
        <>
            <Navbar />
            <SideNav />
            <AddUniformsForm {...props}/>
            <ProfileCard />
        </>
    );
}

export default AddUniformsPage;
