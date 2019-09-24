import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { fetchUniformsAction, deleteUniformAction } from '../../containers/ListUniforms/state/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import EditUniform from '../../containers/EditUniform';


class Uniforms extends Component {
  state = {
    uniforms: {
      results: []
    },
    total_pages: null,
    next_page: null,
    previous_page: null,
  };

  componentDidMount() {
    const { fetchUniforms, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;
    fetchUniforms(slug);
  };

  handleDelete(event_id) {
    const { deleteUniform, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;

    swal({
      title: "Are you sure?",
      text: "Once deleted, item cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteUniform(slug, event_id);
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
    const { uniforms } = this.props;
    const uniformsList = uniforms.length ? (
      uniforms.map(uniform => {
        return (
          <div className="card col-md-4 uniform-card" key={uniform.uniform_id}>
          <EditUniform title={uniform.title} />
            <div className="view overlay">
              <img className="card-img-top" src={uniform.image} alt="Card image cap" />
            </div>

            <div className="card-body">


              <h4 className="card-title">{uniform.title}</h4>

              <p className="card-text">{uniform.description}</p>
              <div>

                <a href="#" className="btn btn-primary purchase">Purchase</a>

                <a>
                  <div className="edit-uniform modal-trigger" href="#edit-uniform-modal">
                    <i className="fa fa-pencil"></i>
                  </div>
                </a>
                {/* <button type="button" className="main-button icon-button edit-event modal-trigger" href="#edit-uniform-modal">
                      Edit
                    </button> */}
                <a>
                  <div className="delete-uniform" >
                    <i className="fa fa-trash-o" onClick={() => this.handleDelete(uniform.uniform_id)}></i>
                  </div>
                </a>
              </div>


            </div>

          </div>
        )
      })
    ) : (
        <div className="col-md-12" style={{ textAlign: "center", paddingTop: "30px" }}>
          <h3 className="center">No uniforms added yet</h3>
        </div>
      );


    return (
      <>
        {uniformsList}
      </>
    );
  }
}

Uniforms.defaultProps = {
  uniforms: {
    results: {}
  },
};

Uniforms.propTypes = {
  errors: PropTypes.shape({}),
  fetchUniforms: PropTypes.func.isRequired,
  deleteUniform: PropTypes.func.isRequired,
  // editEvent: PropTypes.func.isRequired,
};

const mapStateToProps = ({ listuniforms }) => listuniforms;

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUniforms: fetchUniformsAction,
  deleteUniform: deleteUniformAction,
  // editEvent: editEventAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Uniforms);
