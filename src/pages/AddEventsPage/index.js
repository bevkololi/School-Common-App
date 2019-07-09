import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddEventForm from '../../containers/AddEventForm';
import ProfileCard from '../../components/ProfileCard';



const AddEventsPage = props => {
    return (
        <>
            <Navbar />
            <SideNav />
            <AddEventForm {...props}/>
            <ProfileCard />
        </>
    );
}

export default AddEventsPage;
