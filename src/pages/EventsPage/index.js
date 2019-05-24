import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Event from '../../components/Event';



class EventsPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Event />
                <Event />
            </>
        );
    }
}

export default EventsPage;
