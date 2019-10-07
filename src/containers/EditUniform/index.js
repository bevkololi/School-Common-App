import React, { Component } from 'react';
import { connect } from 'react-redux';
import Materialize from 'materialize-css';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { editUniformAction } from './state/actions';
import { fetchUniformsAction } from '../ListUniforms/state/actions'
import Modal from '../../components/Modal';
import { getSlug } from '../../utils/auth';
import swal from 'sweetalert';


class EditUniform extends Component {
  state = {
    title: '',
    image: '',
    description: '',
    images: [],
    errors: [],
    edit_id: null,
  };


  componentDidMount = () => {
    this.updateModals();
  };

  componentWillReceiveProps(nextProps) {
    this.updateModals();
    // console.log('VVVVVVV', nextProps);
    // this.setState({ title: nextProps.event.title, image: nextProps.event.body });
  }

  updateModals = () => {
    const { uniforms, edit_id } = this.props;
    uniforms.forEach(uniform => {
      const modal = document.querySelector(`#edit-uniform-modal_${uniform.uniform_id}`);
      Materialize.Modal.init(modal, {});
      const the_id = JSON.stringify(modal.id);
      const edit_id_test = the_id.match(/\d+/g).pop();
      if (edit_id_test == edit_id) {
        this.setState({
            title: uniform.title, image: uniform.image,
            description: uniform.description
        });
      }
    });
  };

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

  handleSubmit(uniform_id) {
    const { title, description, images } = this.state;
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    if (images.length === 1) {
      data.append('image', images[0]);
    }
    const { editUniform, match = {} } = this.props;
    const { params = {} } = match;
    const { slug } = params;
    editUniform(slug, uniform_id, data);
  };

  componentDidUpdate = (prevProps) => {
    const { success, fetchUniforms } = this.props;
    if (!prevProps.success && success) {
      setTimeout(this.clearState, 1000);
      swal("Uniform updated successfully!", "Viewers can now see school uniforms.", "success");
      const slug = getSlug();
      fetchUniforms(slug);
    }
  };


  clearState = () => {
    this.setState({
      title: '',
      image: '',
      description: '',
      errors: [],
    });
  };


  render() {
    const { uniforms } = this.props;
    const editUniform = uniforms.length ? (
      uniforms.map(uniform => {
        return (
          <Modal title={uniform.title} id={`edit-uniform-modal_${uniform.uniform_id}`} key={uniform.uniform_id}>
            <form onSubmit={this.handleSubmit}>

              <div className="wrap-input100 validate-input bg1">
                <span className="label-input100">Name</span>
                <input className="input100" type="text" name="title" placeholder="Uniform name"
                  onChange={this.onChange} value={this.state.title} required="required" />
              </div>

              <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
                <span className="label-input100">Description</span>
                <textarea className="input100" maxLength="80" type="text" name="description" placeholder="Short description (max 60 charcaters)"
                  onChange={this.onChange} value={this.state.description} />
              </div>

              <div className="wrap-input100 validate-input bg1" >
                <span className="label-input100">Image</span>
                <input type="file" className="form-control-file" name="images"
                  onChange={this.onChange} />
              </div>

              <div className="modal-footer">
                <a href="#!" className="modal-close btn btn-secondary">Cancel</a>
                <button type="button" className="modal-close btn btn-primary" onClick={() => this.handleSubmit(uniform.uniform_id)}>Save changes</button>
              </div>
            </form>
          </Modal>
        )
      })
    ) : (
        <div className="col-md-12" style={{ textAlign: "center", paddingTop: "30px" }}>
          <h3 className="center">No uniforms to show</h3>
        </div>
      );
    return (
      <div>
        {editUniform}
      </div>
    );
  }
//   render() {
//     const { uniforms } = this.props;
//     return (
//       <Modal title={this.props.title} id="edit-uniform-modal">
//             <form onSubmit={this.handleSubmit}>

//               <div className="wrap-input100 validate-input bg1">
//                 <span className="label-input100">Name</span>
//                 <input className="input100" type="text" name="title" placeholder="Uniform name"
//                   onChange={this.onChange} value={this.state.title} required="required" />
//               </div>

//               <div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="">
//                 <span className="label-input100">Description</span>
//                 <textarea className="input100" maxlength="70" type="text" name="description" placeholder="Short description (max 60 charcaters)"
//                   onChange={this.onChange} value={this.state.description} />
//               </div>

//               <div className="wrap-input100 validate-input bg1" >
//                 <span className="label-input100">Image</span>
//                 <input type="file" className="form-control-file" name="images"
//                   onChange={this.onChange} />
//               </div>

//               <div className="modal-footer">
//                 <a href="#!" className="modal-close btn btn-secondary">Cancel</a>
//                 <button type="button" className="modal-close btn btn-primary" onClick={() => this.handleSubmit()}>Save changes</button>
//               </div>
//             </form>
//           </Modal>
//     )
//   }
}

EditUniform.defaultProps = {
  uniform: {},
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editUniform: editUniformAction,
    fetchUniforms: fetchUniformsAction,
  },
  dispatch,
);

const mapStateToProps = ({ edituniform }) => edituniform;

EditUniform.propTypes = {
  editUniform: PropTypes.func.isRequired,
  fetchUniforms: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUniform);
