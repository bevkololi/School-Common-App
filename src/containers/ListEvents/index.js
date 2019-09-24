import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { fetchEventsAction } from '../../containers/ListEvents/state/actions';
import { deleteEventAction, editEventAction } from '../../containers/EditEvent/state/actions';
import EditEvent from '../../containers/EditEvent';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Modal from '../../components/Modal';
import Materialize from 'materialize-css';

class Events extends Component {
  state = {
    events: {
      results: []
    },
    total_pages: null,
    next_page: null,
    previous_page: null,
    edit_id : null,
  };

  componentDidMount() {
    const { fetchEvents, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;
    fetchEvents(slug);
    setInterval(this.editEvent, 1000);
  }

  editEvent = (event_id) => {
    this.setState({ edit_id: event_id});
  }

  handleDelete(event_id) {
    const { deleteEvent, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;

    swal({
      title: "Are you sure?",
      text: "Once deleted, event cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteEvent(slug, event_id);
          swal("Event successfully deleted!", {
            icon: "success",
          });
          window.location.reload();
        } else {
          swal("Your event is safe!");
        }
      });
  }


  render() {
    const { events, previous_page, next_page, isConfirm } = this.props;
    // const current_page = this.props.match.params.pageNumber;
    // const next_url = next_page ? next_page.split("=").slice(-1)[0] : null
    // const previous_url = previous_page == `http://127.0.0.1:8000/api/schools/events` ? 1
    //   : previous_page ? previous_page.split("=").slice(-1)[0] : null
    // const n = this.props.total_pages;


    const eventsList = events.length ? (
      events.map(event => {
        return (
          <div className="events" key={event.event_id}>
            <EditEvent {...this.props} edit_id={this.state.edit_id} />
            <table>
              <thead>
                <tr>
                  <th scope="row">{event.title}</th>
                  <td colSpan="2">{event.date}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <time dateTime="08:30:00">{event.time}</time>
                  </th>
                  <td colSpan="2">{event.body}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <p></p>
                  </th>
                  <td colSpan="2">
                    <button type="button" className="main-button icon-button edit-event modal-trigger" href={`#edit-event-modal_${event.event_id}`} >
                      Edit
                    </button>
                    <button type="button" className="main-button icon-button delete-event" onClick={() => this.handleDelete(event.event_id)} >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        )
      })
    ) : (
        <div className="col-md-12" style={{ textAlign: "center", paddingTop: "30px" }}>
          <h3 className="center">No events to show</h3>
        </div>
      );

    return (
      <>
        <div>
          {eventsList}


          {/* <div className="row">


            <div className="col-md-12">
              <div className="post-pagination">
                {previous_url
                  ? <a href={`/schools/all/${previous_url}`} className="pagination-back pull-left">Back</a>
                  : null
                }
                <ul className="pages">
                  {[...Array(n)].map((x, i) =>
                    <li key={i} className={`${(current_page == (i + 1)) ? 'active' : ''}`}><a href={`/schools/all/${i + 1}`}>{i + 1}</a></li>
                  )}
                </ul>
                {next_url
                  ? <a href={`/schools/all/${next_url}`} className="pagination-next pull-right">Next</a>
                  : null
                }
              </div>
            </div>


          </div> */}
        </div>
      </>
    );
  }
}

Events.defaultProps = {
  events: {
    results: {}
  },
};

Events.propTypes = {
  errors: PropTypes.shape({}),
  fetchEvents: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  editEvent: PropTypes.func.isRequired,
};

const mapStateToProps = ({ listevents }) => listevents;

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEvents: fetchEventsAction,
  deleteEvent: deleteEventAction,
  editEvent: editEventAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);
