import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSchoolAction, getSchoolAction } from './state/actions';
import { getSlug } from '../../utils/auth';
import swal from 'sweetalert';

class UpdateSchoolForm extends Component {
  state = {
    school: {
      name: '',
      about: '',
      history: '',
    },
    errors: [],
    success: false,
  };

  componentDidMount(){
    const { getSchool } = this.props;
    const slug = getSlug();
    getSchool(slug);
  }

  // onChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  onChange = (e) => {
    const { school } = { ...this.state };
    const currentState = school;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ school: currentState });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const slug = getSlug();
    const data = { ...this.state };
    const { updateSchool, match = {} } = this.props;
    // const { params = {} } = match;
    // const { slug } = params;
    updateSchool(slug, data);
  };

  componentDidUpdate = (prevProps) => {
    const { success, isSaved, school } = this.props;
    if (!prevProps.isSaved && isSaved) {
      localStorage.setItem('slug', JSON.stringify(this.props.school.data.school.slug));
      // setTimeout(this.clearState, 1000);
      swal("School Updated Successfully!",
           "View school to double check and make any more changes!",
           "success").then(function () {
             window.location.reload();
           });
      // const slug = getSlug()
      // history.push(`/schools/view/${slug}`);
    }
  };

  componentWillReceiveProps(nextProps) {
    // const { school } = this.state;
    // const newSchool = nextProps.school;
    // const { history, readOnly, update } = this.props;;
    // if (readOnly) {
    //   this.setState({ school: newSchool });
    // } else {
    //   if (school.slug !== newSchool.slug && newSchool.slug) {
    //     history.push(`/schools/${update ? 'edit/' : ''}${newSchool.slug}`);
    //   }
    //   this.setState({
    //     school: Object.assign(school,
    //       { slug: newSchool.slug })
    //   });
    // }
    // if (nextProps.errors.length === 0) {
    //   swal("School Updated Successfully!", "View school to double check and make any more changes!", "success")
    //   this.clearState();
    // };
    console.log('HHHHH', nextProps);
    this.setState({
      school: {
        name: nextProps.school.name, about: nextProps.school.about,
        history: nextProps.school.history
      }
    });
  }

  clearState = () => {
    this.setState({
      school: {
        name: '',
        about: '',
        history: '',
      },
      errors: [],
      success: false,
    });
  };

  renderErrors = errors => (
    <div className="text-danger">
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );


  render() {
    const { isSaving, errors } = this.props;
    console.log('GGGGGG', this.state);
    return (
      <>
        <div className="col-md-6 col-sm-12">
          <div className="crud-form">
            <div className="container-contact100">
              <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={this.handleSubmit}>
                  <span className="contact100-form-title">Edit School</span>
                  <div style={{ fontSize: "20px" }}>
                    {errors.length > 0 ? (this.renderErrors(errors)) : null}
                  </div>
                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">FULL NAME *</span>
                    <input className="input100" type="text" name="name" placeholder="Enter School Name"
                      onChange={this.onChange} value={this.state.school.name} required="required" />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">About</span>
                    <textarea className="input100" type="text" name="about" placeholder="Write something about the school"
                      value={this.state.school.about} onChange={this.onChange} />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">History</span>
                    <textarea className="input100" type="text" name="history" placeholder="School history"
                      value={this.state.school.history} onChange={this.onChange} />
                  </div>

                  {/* <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Fee structure</span>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"
                      value={this.state.feeStructure} onChange={this.onChange} name="feeStructure" />
                  </div>

                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Results</span>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"
                      value={this.state.results} onChange={this.onChange} name="results" />
                  </div> */}
                  <button type="submit" className="main-button icon-button" disabled={isSaving}>
                    Update School
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

UpdateSchoolForm.defaultProps = {
  school: {},
};

UpdateSchoolForm.propTypes = {
  // errors: PropTypes.shape({}),
  updateSchool: PropTypes.func.isRequired,
  getSchool: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  school: PropTypes.shape({}).isRequired,
  // slug: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  school: state.schoolupdate.school,
  errors: state.schoolupdate.errors,
  success: state.schoolupdate.success,
  isSaved: state.schoolupdate.isSaved,
});

// const mapStateToProps = ({ schoolupdate }) => schoolupdate;

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSchool: updateSchoolAction,
  getSchool: getSchoolAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSchoolForm);
