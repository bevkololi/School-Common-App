import {
    UNIFORM_SAVE,
    UNIFORM_SAVE_SUCCESS,
    UNIFORM_SAVE_FAILURE,
  } from './types';
  import api from '../../../utils/api';
  import {
    pageLoadedAction,
    pageLoadingAction,
  } from '../../../containers/Navbar/state/actions';
  
  export const savingUniform = () => ({
    type: UNIFORM_SAVE,
  });
  
  export const uniformSaveSuccess = payload => ({
    type: UNIFORM_SAVE_SUCCESS,
    payload,
  });
  
  export const uniformSaveFailure = payload => ({
    type: UNIFORM_SAVE_FAILURE,
    payload,
  });
  
  export const saveUniformAction = (slug, data) => (dispatch) => {
    // const axios = school.slug ? api.put(`schools/${school.slug}/`, { school })
    //   : api.post('schools/', { school });
    dispatch(savingUniform());
    dispatch(pageLoadingAction());
    return api.post(`schools/${slug}/uniforms/`, data)
      .then((data) => {
        dispatch(uniformSaveSuccess(data.data));
        dispatch(pageLoadedAction());
      }).catch((errors) => {
        dispatch(uniformSaveFailure(errors.response));
        dispatch(pageLoadedAction());
      });
  };