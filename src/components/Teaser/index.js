import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import shule5 from '../../assets/images/shule5.jpg';



class Teaser extends Component {
    render() {
        return (
            <>
                <div className="hero-area section">
                    <div className="bg-image bg-parallax overlay" style={{ backgroundImage: "url(" + shule5 + ")" }}></div>


                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 text-center">
                                <h1 className="white-text">Limuru Girls School</h1>
                                <h4 className="white-text">In Fide Vade, in Faith we Go</h4>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Teaser;
