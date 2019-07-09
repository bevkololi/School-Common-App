import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Events from '../../containers/ListEvents';



const EventsPage = props => {
    return (
        <>
            <Navbar />
            <Events {...props} />
        </>
    );
}

export default EventsPage;
