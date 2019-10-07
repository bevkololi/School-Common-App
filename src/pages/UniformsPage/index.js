import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import Uniforms from '../../containers/ListUniforms';


const UniformsPage = props => {
    return (
        <><Navbar />
            <div className="row">
                <div className="container">
                    {/* <h2>Uniforms</h2> */}
                    <Uniforms {...props}/>
                </div>
            </div>
        </>
    );
}

export default UniformsPage;
