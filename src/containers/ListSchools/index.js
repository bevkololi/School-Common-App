import React, { Component } from 'react';
import avatar from '../../assets/images/group-avatar.png';
import { fetchSchoolsAction } from '../../containers/ListSchools/state/actions';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListSchools extends Component {
  state = {
    schools: {
      results: []
    }
  };

  componentDidMount = () => {
    const {
      fetchSchools} = this.props;
    fetchSchools(1);
  };


  render() {
    const { schools } = this.props;
    const schoolList = schools.length ? (
      schools.map(school => {
        return (
          <div id="schools-wrapper" key={school.slug}>
            <div className="col-md-3 col-sm-6 col-xs-6" >
              <div className="school">
                <Link to={`/schools/view/`} className="school-img">
                  <img src={school.school.image || avatar} alt="school" />
                  <i className="school-link-icon fa fa-link"></i>
                </Link>
                <a className="school-title" href="#">{school.name}</a>
                <div className="school-details">
                  <span className="school-category">{school.school.level}</span>
                  <span className="school-price school-free">{school.school.ownership}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <h3 className="center">No schools to show</h3>
      );

    return (
      <div id="schools" className="section">

        <div className="container">

          <div className="row">
            <div className="section-header text-center">
              <h2>Explore Schools</h2>
              <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
            </div>

            {schoolList}

          </div>
          <div className="row">
            <div className="center-btn">
              <Link to="schools/all/1" className="main-button icon-button">
                More Schools
              </Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

ListSchools.defaultProps = {
  schools: {
    results: {}
  },
};

ListSchools.propTypes = {
  errors: PropTypes.shape({}),
  fetchSchools: PropTypes.func.isRequired,
};

const mapStateToProps = ({ listschools }) => listschools;

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSchools: fetchSchoolsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListSchools);

