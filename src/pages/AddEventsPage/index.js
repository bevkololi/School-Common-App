import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddEventForm from '../../components/AddEventForm';
import ProfileCard from '../../components/ProfileCard';



class AddEventsPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SideNav />
                <AddEventForm />
                <ProfileCard />
            </>
        );
    }
}

export default AddEventsPage;
