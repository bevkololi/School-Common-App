import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ROUTES from '../../utils/routes';
import register from './state/actions';
import { bindActionCreators } from 'redux';
import shule17 from '../../assets/images/shule17.jpg';
import PropTypes from 'prop-types';
import swal from 'sweetalert';


class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    errors: {},
    messageShown: false,
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = nextProps;
    this.setState({ errors });
  };

  componentDidUpdate = (prevProps) => {
    const { success } = this.props;
    if (!prevProps.success && success) {
      setTimeout(this.clearState, 1000);
      setTimeout(() => this.setState({ messageShown: true }), 0);
    }

    if (prevProps.success && success) {
      setTimeout(() => this.setState({ messageShown: false }), 4000);
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    const {
      password, confirmPassword,
    } = this.state;
    if (password !== confirmPassword) {
      const { errors } = this.state;
      errors.password = ['Passwords do not match'];
      this.setState({ errors });
      return false;
    }
    this.setState({ errors: {} });
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: {} });
    if (this.validate()) {
      const data = {
        ...this.state,
      };
      const { registerUser } = this.props;
      registerUser({ user: data });
    }
    this.clearState();
    swal("Registration Succesful!", "You will receive an email to activate your account!", "success")
  };

  clearState = () => {
    this.setState({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      errors: {},
    });
  };


  render() {
    const {
      username, password, email, confirmPassword, errors, messageShown,
    } = this.state;
    const { isRegistering } = this.props;



    return (
      <>
        <div className="row pad-me">
          <div className="col-md-7 signupform" style={{ backgroundImage: "url(" + shule17 + ")" }}>
          </div>
          <div className="col-md-5 signup-form">
            <h2>Sign Up</h2>
            <p>Kindly fill in to create an account.</p>
            <hr />
            <form name="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user"></i></span>
                  <input type="text" className="form-control" name="username" placeholder='Username'
                    required="required" value={username} onChange={this.onChange} errors={errors.username} />
                </div>
                <span style={{ color: "red", fontSize: "11px" }}>{errors.username}</span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                  <input type="email" className="form-control" name="email" placeholder="Email Adress"
                    required="required" value={email} errors={errors.email} onChange={this.onChange} />
                </div>
                <span style={{ color: "red", fontSize: "11px" }}>{errors.email}</span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                  <input type="text" className="form-control" name="password" placeholder="Password"
                    required="required" value={password} errors={errors.password} onChange={this.onChange} />
                </div>
                <span style={{ color: "red", fontSize: "11px" }}>{errors.password}</span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock"></i>
                    <i className="fa fa-check"></i>
                  </span>
                  <input type="text" className="form-control" name="confirmPassword" placeholder="Confirm Password"
                    required="required" value={confirmPassword} errors={errors.password} onChange={this.onChange} />
                </div>
                <span style={{ color: "red", fontSize: "11px" }}>{errors.password}</span>
              </div>

              <div className="form-group">
                <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
              </div>
              <div className="form-group wrapper">
                <button type="submit" className="btn btn-primary btn-lg" disabled={isRegistering}>Sign Up</button>
              </div>
            </form>
          </div>

          <div className="text-center">Already have an account? <Link to={ROUTES.auth.login}>Login here</Link></div>
        </div>


      </>
    );
  }
}

SignUpForm.defaultProps = {
  errors: {
    username: [],
    email: [],
    password: [],
  },
};

SignUpForm.propTypes = {
  errors: PropTypes.shape({
    username: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
    password: PropTypes.arrayOf(PropTypes.string),
    user: PropTypes.object,
  }),
  registerUser: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  isRegistering: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ signUp }) => signUp;

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser: register,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
