import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveEventAction } from './state/actions';
import swal from 'sweetalert';

class AddEventForm extends Component {
  state = {
    event: {
      title: '',
      date: '',
      time: '',
      body: '',
    },
    errors: [],
  };


  // componentDidMount(){
  //   const { saveEvent, match = {} } = this.props;
  //   const { params = {} } = match;
  //   const { slug } = params;;
  //   saveEvent(slug);
  // }

  onChange = (e) => {
    const { event } = { ...this.state };
    const currentState = event;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ event: currentState });
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = nextProps;
    this.setState({ errors });
  };

  componentDidUpdate = (prevProps) => {
    const { success } = this.props;
    if (!prevProps.success && success) {
      setTimeout(this.clearState, 1000);
      swal("Event added successfully!", "Viewers can now see school events.", "success");
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

  handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...this.state };
    const { saveEvent, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;
    saveEvent(slug, data);
  };

  clearState = () => {
    this.setState({
      event: {
        title: '',
        date: '',
        time: '',
        body: '',
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
                    Add Event
				                </span>
                  <div style={{ fontSize: "20px" }}>
                    {errors.length > 0 ? (this.renderErrors(errors)) : null}
                  </div>
                  <div className="wrap-input100 validate-input bg1">
                    <span className="label-input100">Title</span>
                    <input className="input100" type="text" name="title" placeholder="Enter Event Title"
                      onChange={this.onChange} value={this.state.event.title} required="required" />
                  </div>

                  <div className="wrap-input100 validate-input bg1">
                    <span className="label-input100">Date</span>
                    <input type="date" name="date" onChange={this.onChange} value={this.state.event.date}
                      required="required" className="form-control" />
                  </div>

                  <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                    <span className="label-input100">Time</span>
                    <input type="time" name="time" className="form-control" onChange={this.onChange} value={this.state.event.time} required="true"/>
                  </div>

                  <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                    <span className="label-input100">Details</span>
                    <textarea className="input100" type="text" name="body" placeholder="Write details on the event" 
                    onChange={this.onChange} value={this.state.event.body} required="true"/>
                  </div>

                  <button type="submit" className="main-button icon-button" disabled={isSaving}>
                    Add Event
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

AddEventForm.defaultProps = {
  event: {},
};

AddEventForm.propTypes = {
  errors: PropTypes.shape({}),
  saveEvent: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ eventCreate }) => eventCreate;

const mapDispatchToProps = dispatch => bindActionCreators({
  saveEvent: saveEventAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddEventForm);
