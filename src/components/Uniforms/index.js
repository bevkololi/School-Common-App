import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Uniforms extends Component {
    render() {
        return (
            <>

                <div className="card col-md-4 uniform-card">

                    <div className="view overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body">


                        <h4 className="card-title">Card title</h4>

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <a href="#" className="btn btn-primary">Purchase</a>

                    </div>

                </div>

            </>
        );
    }
}

export default Uniforms;
