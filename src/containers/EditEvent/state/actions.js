import {
    FETCH_EVENT,
    EDIT_EVENT_FAILURE,
    EDIT_EVENT_SUCCESS,
    DELETE_EVENT_FAILURE,
    DELETE_EVENT_SUCCESS,
} from './types';
import api from '../../../utils/api';


export const fetchingEvent = () => ({
    type: FETCH_EVENT,
});

export const editEventSuccess = event => ({
    type: EDIT_EVENT_SUCCESS,
    payload: event,
});

export const editEventFailure = errors => ({
    type: EDIT_EVENT_FAILURE,
    errors,
});

export const deleteEventSuccess = () => ({
    type: DELETE_EVENT_SUCCESS,
});

export const deleteEventFailure = () => ({
    type: DELETE_EVENT_FAILURE,
});

export const editEventAction = (slug, id, data) => (dispatch) => {
    dispatch(fetchingEvent());
    return api.put(`schools/${slug}/events/${id}`, data)
        .then((res) => {
            dispatch(editEventSuccess(res.data));
        }).catch((error) => {
            dispatch(editEventFailure(error.response));
        });
};

export const deleteEventAction = (slug, id) => (dispatch) => {
    dispatch(fetchingEvent());
    return api.delete(`schools/${slug}/events/${id}`)
        .then(() => {
            dispatch(deleteEventSuccess());
        }).catch((error) => {
            dispatch(deleteEventFailure(error.response));
        });
};