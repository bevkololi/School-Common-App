import React, { Component } from 'react';
import { connect } from 'react-redux';
import Materialize from 'materialize-css';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { editEventAction } from './state/actions';
import Modal from '../../components/Modal';
import swal from 'sweetalert';


class EditEvent extends Component {
  state = {
    event: {
      title: '',
      date: '',
      time: '',
      body: '',
    },
    errors: [],
  };


  componentDidMount = () => {
    const modal = document.querySelector('#edit-event-modal');
    Materialize.Modal.init(modal, {});
  };

  onChange = (e) => {
    const { event } = { ...this.state };
    const currentState = event;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ event: currentState });
  };

  handleSubmit(event_id) {
    const data = { ...this.state };
    const { editEvent, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;
    editEvent(slug, event_id, data);
  };

  componentDidUpdate = (prevProps) => {
    const { success } = this.props;
    if (!prevProps.success && success) {
      setTimeout(this.clearState, 1000);
      // swal("Event updated successfully!", "Viewers can now see school events.", "success");
      swal({title: "Event updated successfully!", text: "Viewers can now see school events.", type: 
"success"}).then(function(){ 
   window.location.reload();
   }

);
    }
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

  // componentWillReceiveProps(nextProps) {
  //   console.log('VVVVVVV', nextProps);
  //   this.setState({ title: nextProps.event.title, image: nextProps.event.body });
  // }

  render() {
    const { events } = this.props;
    const editEvent = events.length ? (
      events.map(event => {
        return (
          <Modal title={event.title} id="edit-event-modal" key={event.event_id}>
            <form onSubmit={this.handleSubmit}>
              <div className="wrap-input100 validate-input bg1">
                <span className="label-input100">Title</span>
                <input className="input100" type="text" name="title" placeholder="Enter Event Title"
                  onChange={this.onChange} value={this.state.event.title} />
              </div>

              <div className="wrap-input100 validate-input bg1">
                <span className="label-input100">Date</span>
                <input type="date" name="date" onChange={this.onChange} value={this.state.event.date}
                  className="form-control" />
              </div>

              <div className="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
                <span className="label-input100">Time</span>
                <input type="time" name="time" className="form-control" onChange={this.onChange} value={this.state.event.time} />
              </div>

              <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                <span className="label-input100">Details</span>
                <textarea className="input100" type="text" name="body" placeholder="Write details on the event"
                  onChange={this.onChange} value={this.state.event.body} />
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close btn btn-secondary">Cancel</a>
                <button type="button" className="modal-close btn btn-primary" onClick={() => this.handleSubmit(event.event_id)}>Save changes</button>
              </div>
            </form>
          </Modal>
        )
      })
    ) : (
        <div className="col-md-12" style={{ textAlign: "center", paddingTop: "30px" }}>
          <h3 className="center">No events to show</h3>
        </div>
      );
    return (
      <div>
        {editEvent}
      </div>
    );
  }
}

EditEvent.defaultProps = {
  event: {},
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editEvent: editEventAction,
  },
  dispatch,
);

const mapStateToProps = ({ editevent }) => editevent;

EditEvent.propTypes = {
  editEvent: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
