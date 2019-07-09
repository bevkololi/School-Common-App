import {
    EVENT_SAVE,
    EVENT_SAVE_SUCCESS,
    EVENT_SAVE_FAILURE,
  } from './types';
  import api from '../../../utils/api';
  import {
    pageLoadedAction,
    pageLoadingAction,
  } from '../../../containers/Navbar/state/actions';
  
  export const savingEvent = () => ({
    type: EVENT_SAVE,
  });
  
  export const eventSaveSuccess = payload => ({
    type: EVENT_SAVE_SUCCESS,
    payload,
  });
  
  export const eventSaveFailure = payload => ({
    type: EVENT_SAVE_FAILURE,
    payload,
  });
  
  export const saveEventAction = (slug, data) => (dispatch) => {
    // const axios = school.slug ? api.put(`schools/${school.slug}/`, { school })
    //   : api.post('schools/', { school });
    dispatch(savingEvent());
    dispatch(pageLoadingAction());
    return api.post(`schools/${slug}/events/`, data)
      .then((data) => {
        dispatch(eventSaveSuccess(data.data.data.event));
        dispatch(pageLoadedAction());
      }).catch((errors) => {
        dispatch(eventSaveFailure(errors.response));
        dispatch(pageLoadedAction());
      });
  };