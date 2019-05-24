import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ROUTES from '../../utils/routes';
import shule6 from '../../assets/images/shule6.jpg';
import loginAction from "./state/actions";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        const data = { ...this.state };
        this.props.loginAction({ user: data }, () => {
            history.push("/");
        });
    };

    render() {
        const { email, password } = this.state;
        const { isLogingIn, errors } = this.props;


        return (
            <>
                <div className="row pad-me">
                    <div className="col-md-7 signupform" style={{ backgroundImage: "url(" + shule6 + ")" }}>
                    </div>
                    <div className="col-md-5 signup-form">
                        <h2>Login</h2>
                        <p>Login to get the full experience.</p>
                        <hr />
                        {errors.length > 0 ? (
                            <div className="text-danger">
                                <p>The credentials do not match. Please try again</p>
                            </div>
                        ) : null}
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                                    <input type="email" className="form-control" name="email" placeholder="Email Adress"
                                        required="required" value={email} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" className="form-control" name="password" placeholder="Password"
                                        required="required" value={password} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="checkbox-inline"><input type="checkbox" required="required" />Keep me logged in</label>
                            </div>
                            <div className="form-group wrapper">
                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="text-center">Forgot password? <a href="#">Click here</a></div>
                    <div className="text-center">Don't have an account? <Link to={ROUTES.auth.register}>Signup</Link></div>
                </div>

            </>
        );
    }
}

LoginForm.defaultProps = {
    isLogingIn: false,
    errors: {},
};

LoginForm.propTypes = {
    loginAction: PropTypes.func.isRequired,
    errors: PropTypes.shape({}),
    isLogingIn: PropTypes.bool,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = ({ login }) => login;

export default connect(
    mapStateToProps,
    { loginAction },
)(LoginForm);
