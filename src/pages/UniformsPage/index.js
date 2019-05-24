import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Uniforms from '../../components/Uniforms';



class UniformsPage extends Component {
    render() {
        return (
            <><Navbar />
                <div className="row">
                    <div className="container">
                    <h2>Uniforms</h2>

                        <Uniforms />
                        <Uniforms />
                        <Uniforms />
                        <Uniforms />
                    </div>
                </div>
            </>
        );
    }
}

export default UniformsPage;
