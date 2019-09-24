import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import SideNav from '../../components/SideNav';
import AddUpdateForm from '../../components/AddUpdateForm';
import ProfileCard from '../../containers/ProfileCard';



class AddUpdatesPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SideNav />
                <AddUpdateForm />
                <ProfileCard />
            </>
        );
    }
}

export default AddUpdatesPage;
