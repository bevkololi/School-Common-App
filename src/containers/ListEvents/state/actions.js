import {
    FETCH_EVENTS,
    FETCH_EVENTS_FAILURE,
    FETCH_EVENTS_SUCCESS,
    EDIT_EVENTS_FAILURE,
    EDIT_EVENTS_SUCCESS,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_SUCCESS,
} from './types';
import api from '../../../utils/api';


export const fetchingEvents = () => ({
    type: FETCH_EVENTS,
});

export const fetchEventsSuccess = event => ({
    type: FETCH_EVENTS_SUCCESS,
    payload: event,
});

export const fetchEventsFailure = errors => ({
    type: FETCH_EVENTS_FAILURE,
    errors,
});

export const fetchEventsAction = slug => (dispatch) => {
    dispatch(fetchingEvents());
    return api.get(`schools/${slug}/events/`)
        .then((response) => {
            dispatch(fetchEventsSuccess(response.data.data.event));
        }).catch((error) => {
            dispatch(fetchEventsFailure(error.response));
        });
};

