import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddEventForm from '../../containers/AddEventForm';
import ProfileCard from '../../containers/ProfileCard';



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
