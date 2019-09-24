import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUniformAction } from './state/actions';
import { getSlug } from '../../utils/auth';
import swal from 'sweetalert';


class AddUniformForm extends Component {
  state = {
    title: '',
    description: '',
    images: [],
    image: '',
    errors: []
  };

  // onChange = (e) => {
  //   const { uniform } = { ...this.state };
  //   const currentState = uniform;
  //   const { name, value } = e.target;
  //   currentState[name] = value;
  //   this.setState({ uniform: currentState });
  // };

  onChange = (e) => {
    const { name } = e.target;
    this.setState({ [name]: name === 'images' ? e.target.files : e.target.value });
    /* istanbul ignore next */
    if (name === 'images') {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        this.setState({ image: event.target.result });
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = nextProps;
    this.setState({ errors });
  };

  componentDidUpdate = (prevProps) => {
    const { success, history } = this.props;
    const slug = getSlug();
    if (!prevProps.success && success) {
      setTimeout(this.clearState, 1000);
      swal("Uniform added successfully!",
        "Viewers can now see school uniforms.",
        "success").then(function () {
          history.push(`/uniforms/${slug}`);
        })
    }
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, images } = this.state;
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    if (images.length === 1) {
      data.append('image', images[0]);
    }
    const { saveUniform, match = {} } = this.props;
    // const { params = {} } = match;
    // const { slug } = params;
    const slug = getSlug();
    saveUniform(slug, data);
  };

  clearState = () => {
    this.setState({
      image: '',
      description: '',
      title: '',
      errors: [],
      images: [],
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
                    Add School Uniforms
				                </span>
                  <div style={{ fontSize: "20px" }}>
                    {errors.length > 0 ? (this.renderErrors(errors)) : null}
                  </div>
                  <div className="wrap-input100 validate-input bg1">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text" name="title" placeholder="Uniform name"
                      onChange={this.onChange} value={this.state.title} required="required" />
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">Description</span>
                    <textarea className="input100" maxLength="70" type="text" name="description" placeholder="Short description (max 60 charcaters)"
                      onChange={this.onChange} value={this.state.description} />
                  </div>

                  <div className="wrap-input100 validate-input bg1" >
                    <span className="label-input100">Image</span>
                    <input type="file" className="form-control-file" name="images"
                      onChange={this.onChange} />
                  </div>

                  <button type="submit" className="main-button icon-button" disabled={isSaving}>
                    Add Uniform
                   </button>
                  <a>
                    <div className="edit-button">
                      <i className="fa fa-pencil"></i>
                    </div>
                  </a>
                  <a>
                    <div className="delete-button">
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </a>

                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

AddUniformForm.defaultProps = {
  uniform: {},
};

AddUniformForm.propTypes = {
  errors: PropTypes.array,
  saveUniform: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  uniform: PropTypes.shape({
    // image: PropTypes.shape([]).isRequired,
    // title: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ uniformCreate }) => uniformCreate;

const mapDispatchToProps = dispatch => bindActionCreators({
  saveUniform: saveUniformAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUniformForm);