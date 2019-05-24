import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';

class AddUpdateForm extends Component {
    render() {
        return (
            <>
                <div className="col-md-6 col-sm-12">
                    <div className="crud-form">
                        <div className="container-contact100">
                            <div className="wrap-contact100">
                                <form className="contact100-form validate-form">
                                    <span className="contact100-form-title">
                                        Add Update
				                </span>
                                    <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                                        <span className="label-input100">Title</span>
                                        <input className="input100" type="text" name="name" placeholder="Enter School Name" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                                        <span className="label-input100">Date</span>
                                        <input type="date" name="bday" max="3000-12-31"
                                            min="1000-01-01" className="form-control" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                                        <span className="label-input100">Time</span>
                                        <input type="time" name="time" className="form-control" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                                        <span className="label-input100">Details</span>
                                        <textarea className="input100" type="text" name="name" placeholder="Write details on the update" />
                                    </div>

                                    <div className="main-button icon-button" href="#">
                                        Add Update
                                </div>
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

export default AddUpdateForm;
