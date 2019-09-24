import {
  SCHOOL_SAVE,
  SCHOOL_SAVE_SUCCESS,
  SCHOOL_SAVE_FAILURE,
} from './types';
import api from '../../../utils/api';
import {
  pageLoadedAction,
  pageLoadingAction,
} from '../../../containers/Navbar/state/actions';

export const savingSchool = () => ({
  type: SCHOOL_SAVE,
});

export const schoolSaveSuccess = payload => ({
  type: SCHOOL_SAVE_SUCCESS,
  payload,
});

export const schoolSaveFailure = payload => ({
  type: SCHOOL_SAVE_FAILURE,
  payload,
});

export const saveSchoolAction = (school) => (dispatch) => {
  // const axios = school.slug ? api.put(`schools/${school.slug}/`, { school })
  //   : api.post('schools/', { school });
  dispatch(savingSchool());
  dispatch(pageLoadingAction());
  return api.post('schools/', school)
    .then((data) => {
      dispatch(schoolSaveSuccess(data.data.data.school));
      // localStorage.setItem('slug', JSON.stringify(data.data.data.school.slug));
      dispatch(pageLoadedAction());
    }).catch((errors) => {
      dispatch(schoolSaveFailure(errors.response));
      dispatch(pageLoadedAction());
    });
};