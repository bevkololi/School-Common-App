import {
    FETCH_MORE_SCHOOLS_SUCCESS,
    FETCH_SCHOOLS,
    FETCH_SCHOOLS_FAILURE,
    FETCH_SCHOOLS_SUCCESS,
} from './types';
import api from '../../../utils/api';


export const fetchingSchools = () => ({
    type: FETCH_SCHOOLS,
});

export const fetchSchoolsSuccess = school => ({
    type: FETCH_SCHOOLS_SUCCESS,
    payload: school,
});

export const fetchSchoolsFailure = errors => ({
    type: FETCH_SCHOOLS_FAILURE,
    errors,
});

export const fetchSchoolsAction = pageNumber => (dispatch) => {
    dispatch(fetchingSchools());
    return api.get(`schools/?page=${pageNumber}`)
      .then((response) => {
        dispatch(fetchSchoolsSuccess(response.data.data.school));
      }).catch((error) => {
        dispatch(fetchSchoolsFailure(error.response));
      });
  };
