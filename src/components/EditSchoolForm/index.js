import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';

class EditSchoolForm extends Component {
    render() {
        return (
            <>
                <div className="col-md-6 col-sm-12">
                    <div className="crud-form">
                        <div className="container-contact100">
                            <div className="wrap-contact100">
                                <form className="contact100-form validate-form">
                                    <span className="contact100-form-title">
                                        Edit School
				                </span>
                                    <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                                        <span className="label-input100">FULL NAME *</span>
                                        <input className="input100" type="text" name="name" placeholder="Enter School Name" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                                        <span className="label-input100">About</span>
                                        <textarea className="input100" type="text" name="name" placeholder="Write something about the school" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                                        <span className="label-input100">History</span>
                                        <textarea className="input100" type="text" name="name" placeholder="School history" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                                        <span className="label-input100">Fee structure</span>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>

                                    <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                                        <span className="label-input100">Results</span>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    <div className="main-button icon-button" href="#">
                                        Update School
                                </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EditSchoolForm;
