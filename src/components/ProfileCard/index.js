import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import shule5 from '../../assets/images/shule5.jpg';


class ProfileCard extends Component {
    render() {
        return (
            <>
                <div className="col-md-3 col-sm-6">
                    <figure className="snip1515">
                        <div className="profile-image"><img src="http://trendinginkenya.com/wp-content/uploads/2018/11/Moi-High-School-Kabarak-1.jpg" alt="sample47" /></div>
                        <figcaption>
                            <h3>Moi High School</h3>
                            <h4>High School</h4>
                            <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                            <div className="icons"><a href="#"><i className="ion-social-reddit"></i></a>
                                <a href="#"> <i className="ion-social-twitter"></i></a>
                                <a href="#"> <i className="ion-social-vimeo"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </>
        );
    }
}

export default ProfileCard;
