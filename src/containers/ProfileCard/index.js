import React, { Component } from 'react';
import { getUserProfileAction } from "../EditProfileForm/state/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { getCurrentUser } from "../../utils/auth";
import avatar from '../../assets/images/group-avatar.png';



class ProfileCard extends Component {
    componentDidMount = () => {
        const { getUserProfile, match = {} } = this.props;
        const user = getCurrentUser();
        getUserProfile(user.username);
    };

    render() {
        const { profile } = this.props;
        const user = getCurrentUser();
        return (
            <>
                <div className="col-md-3 col-sm-6">
                    <figure className="snip1515">
                        <div className="profile-image"><img src={profile.image || avatar} alt="sample47" /></div>
                        <figcaption>
                            <h3>{profile.username}</h3>
                            <h4>{profile.level}</h4>
                            <h6>{profile.county}</h6>
                            <p>{profile.bio}</p>
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

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getUserProfile: getUserProfileAction,
    },
    dispatch,
);

const mapStateToProps = state => ({
    profile: state.userProfiles.profile,
    // isPageLoading: state.pageProgress.isPageLoading,
});

ProfileCard.propTypes = {
    profile: PropTypes.shape({}).isRequired,
    getUserProfile: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileCard);
