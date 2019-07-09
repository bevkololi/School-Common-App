import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { saveSchoolAction } from './state/actions';
import swal from 'sweetalert';


class AddSchoolForm extends Component {
  state = {
    school: {
      name: '',
      about: '',
      history: '',
    },
    errors: [],
  };

  onChange = (e) => {
    const { school } = { ...this.state };
    const currentState = school;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ school: currentState });
  };

  // componentWillReceiveProps = (nextProps) => {
  //   const { errors } = nextProps;
  //   if (errors.length > 0) {
  //     this.setState({ errors });
  //   }
  //   else {
  //     this.clearState();
  //     swal("School added successfully!", "Viewers can now see your school.", "success")
  //   }
  // };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = nextProps;
    this.setState({ errors });
  };


  componentDidUpdate = (prevProps) => {
    const { success } = this.props;
    if (!prevProps.success && success) {
      setTimeout(this.clearState, 1000);
      swal("School added successfully!", "Viewers can now see your school.", "success");
    }
  };

  // renderSaving = () => {
  //   const { isSaving, isSaved, match: { params: { slug } } } = this.props;
  //   if (slug === 'new' && isSaved) {
  //     return null;
  //   }
  //   const savedText = isSaved ? 'All changes saved...' : 'Changes not saved';
  //   return (
  //     <span className={`${isSaved || isSaving
  //       ? 'grey-text' : 'red-text'} text-darken-3`}
  //     >
  //       {isSaving ? 'Saving...' : savedText}
  //     </span>
  //   );
  // };

  renderErrors = errors => (
    <div className="text-danger">
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );

  handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...this.state };
    const { saveSchool } = this.props;
    saveSchool(data);
  };

  clearState = () => {
    this.setState({
      school: {
        name: '',
        about: '',
        history: '',
      },
      errors: [],
    });
  };

  render() {
    const { isSaving, errors } = this.props;
    return (
      <>
        <div className="col-md-6 col-sm-12">
          <div className="crud-form">
            <div className="container-contact100">
              <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={this.handleSubmit}>
                  <span className="contact100-form-title">
                    Add School
				                </span>
                  <div style={{ fontSize: "20px" }}>
                    {errors.length > 0 ? (this.renderErrors(errors)) : null}
                  </div>
                  <div className="wrap-input100 validate-input bg1" data-validate="">
                    <span className="label-input100">FULL NAME *</span>
                    <input className="input100" type="text" name="name" placeholder="Enter School Name"
                      onChange={this.onChange} value={this.state.school.name} required="required" />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">About</span>
                    <textarea className="input100" type="text" name="about" placeholder="Write something about the school"
                      value={this.state.school.about} onChange={this.onChange} required="required" />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <textarea className="input100" type="text" name="history" placeholder="School history"
                      value={this.state.school.history} onChange={this.onChange} required="required" />
                  </div>

                  {/* <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Fee structure</span>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"
                       onChange={this.onChange} name="feeStructure" />
                  </div>

                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Results</span>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"
                      onChange={this.onChange} name="results" />
                  </div> */}
                  <button type="submit" className="main-button icon-button" disabled={isSaving}>
                    Add School
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

AddSchoolForm.defaultProps = {
  school: {},
};

AddSchoolForm.propTypes = {
  errors: PropTypes.shape({}),
  saveSchool: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ schoolcreate }) => schoolcreate;

// const mapStateToProps = (state) => ({
//   school: state.schoolcreate.school,
//   errors: state.schoolcreate.errors
// });

const mapDispatchToProps = dispatch => bindActionCreators({
  saveSchool: saveSchoolAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddSchoolForm);
