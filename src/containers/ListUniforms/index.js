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
    edit_id: null,
  };

  componentDidMount() {
    const { fetchUniforms, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;
    fetchUniforms(slug);
  };

  editUniform = (edit_id) => {
    // console.log(e.target.name);
    // alert('I was clicked');
    // this.setState({ edit_id: edit_id}, () => console.log(this.state));
    this.setState(prevState => ({ edit_id }));
  }

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
          swal("Uniform successfully deleted!", {
            icon: "success",
          });
          window.location.reload();
        } else {
          swal("Your item is safe!");
        }
      });
  }


  render() {
    const { uniforms } = this.props;
    const uniformsList = uniforms.length ? (
      uniforms.map(uniform => {
        return (
          <div className="card col-md-4 uniform-card h-100" key={uniform.uniform_id}>
            <EditUniform {...this.props} edit_id={this.state.edit_id} />
            <div className="view overlay">
              <img className="card-img-top" src={uniform.image} alt="Card image cap" />
            </div>

            <div className="card-body">

            <div className="card-body-stuff">
              <h4 className="card-title">{uniform.title}</h4>

              <p className="card-text">{uniform.description}</p>
              </div>
              <div className="card-footer">

                <a href="#" className="btn purchase">Purchase</a>

                <a>
                  <div className="edit-uniform modal-trigger" href={`#edit-uniform-modal_${uniform.uniform_id}`}>
                    <i className="fa fa-pencil"
                      onClick={() => this.setState({ edit_id: uniform.uniform_id })}></i>
                  </div>
                </a>
                {/* <button type="button" className="main-button icon-button edit-event modal-trigger" href={`#edit-uniform-modal_${uniform.uniform_id}`}
                        onClick={() => this.setState({ edit_id: uniform.uniform_id })}>
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
          // <div class="card col-md-4 uniform-card">
          //   <img class="card-img-top" src={uniform.image} alt="Card image cap" />
          //   <div class="card-block">
          //     <h4 class="card-title">{uniform.title}</h4>
          //     <p class="card-text">{uniform.description}</p>
          //   </div>
          //   <div class="card-footer">
          //     <small class="text-muted">Last updated 3 mins ago</small>
          //   </div>
          // </div>
        )
      })
    ) : (
        <div className="col-md-12" style={{ textAlign: "center", paddingTop: "30px" }}>
          <h3 className="center">No uniforms added yet</h3>
        </div>
      );


    return (
      <>
        <div className="align-button">
          <h2 className="text-center">School Uniforms</h2>
          <Link to={ROUTES.adduniforms} type="button" className="add-button icon-button add-event">Add Uniform</Link>
        </div>
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
