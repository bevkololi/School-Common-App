import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Album from '../../components/Album';



class AlbumPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Album />
            </>
        );
    }
}

export default AlbumPage;
