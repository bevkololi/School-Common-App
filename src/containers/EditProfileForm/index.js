import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { editUserProfileAction } from './state/actions';

class EditProfileForm extends Component {
  state = {
    bio: '',
    images: [],
    image: '',
    county: '',
    level: '',
    ownership: '',
  };


  onChange = (e) => {
    const { name } = e.target;
    this.setState({ [name]: name === 'images' ? e.target.files : e.target.value });
    if (name === 'images') {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        this.setState({ image: event.target.result });
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { bio, images, county, level, ownership } = this.state;
    const data = new FormData();
    data.append('bio', bio);
    data.append('county', county);
    data.append('level', level);
    data.append('ownership', ownership);
    if (images.length === 1) {
      data.append('image', images[0]);
    }
    const { editUserProfile, user } = this.props;
    editUserProfile(user.username, data);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      bio: nextProps.profile.bio, image: nextProps.profile.image,
      county: nextProps.profile.county, level: nextProps.profile.level, ownership: nextProps.profile.ownership
    });
  }

  render() {
    // const { profile } = this.props;
    return (
      <>
        <div className="col-md-6 col-sm-12">
          <div className="crud-form">
            <div className="container-contact100">
              <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={this.handleSubmit}>
                  <span className="contact100-form-title">
                    Edit Profile
				                </span>

                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Image</span>
                    <input className="input100" type="file" name="images" onChange={this.onChange} />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">Bio</span>
                    <textarea className="input100" type="text" name="bio" placeholder="" onChange={this.onChange} value={this.state.bio} />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">County</span>
                    <select className="form-control" id="sel1" onChange={this.onChange} value={this.state.county} name="county">
                      <option>County</option>
                      <option>Laikipia</option>
                      <option>Kiambu</option>
                      <option>Bungoma</option>
                      <option>Kisumu</option>
                    </select>
                  </div>

                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Level</span>
                    <select className="form-control" id="sel1" onChange={this.onChange} value={this.state.level} name="level">
                      <option>School Level</option>
                      <option>Primary School</option>
                      <option>High School</option>
                      <option>University</option>
                      <option>College</option>
                    </select>
                  </div>

                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Ownership</span>
                    <select className="form-control" id="sel1" onChange={this.onChange} value={this.state.ownership} name="ownership">
                      <option>Ownership</option>
                      <option>Private</option>
                      <option>Public</option>
                    </select>
                  </div>
                  <button type="submit" className="main-button icon-button">
                    Update Profile
                   </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editUserProfile: editUserProfileAction,
  },
  dispatch,
);

export const mapStateToProps = state => ({
  profile: state.userProfiles.profile,
});

EditProfileForm.propTypes = {
  editUserProfile: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  profile: PropTypes.shape({
    image: PropTypes.shape([]).isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);

