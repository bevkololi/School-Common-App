import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideNav from '../../components/SideNav';
import AddUniformsForm from '../../components/AddUniformsForm';
import ProfileCard from '../../components/ProfileCard';



class AddUniformsPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SideNav />
                <AddUniformsForm />
                <ProfileCard />
            </>
        );
    }
}

export default AddUniformsPage;
