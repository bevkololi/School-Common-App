import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Update from '../../components/Updates';



class UpdatesPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Update />
                <Update />
            </>
        );
    }
}

export default UpdatesPage;
