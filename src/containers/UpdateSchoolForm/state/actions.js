import {
    SCHOOL_UPDATE,
    SCHOOL_UPDATE_SUCCESS,
    SCHOOL_UPDATE_FAILURE,
    SCHOOL_FETCH_SUCCESS,
    SCHOOL_FETCH_FAILURE,
    SCHOOL_FETCH,
} from './types';
import api from '../../../utils/api';
import {
    pageLoadedAction,
    pageLoadingAction,
} from '../../../containers/Navbar/state/actions';


export const updatingSchool = () => ({
    type: SCHOOL_UPDATE,
});

export const schoolUpdateSuccess = payload => ({
    type: SCHOOL_UPDATE_SUCCESS,
    payload,
});

export const schoolUpdateFailure = payload => ({
    type: SCHOOL_UPDATE_FAILURE,
    payload,
});

export const fetchingSchool = () => ({
    type: SCHOOL_FETCH,
});

export const schoolFetchSuccess = article => ({
    type: SCHOOL_FETCH_SUCCESS,
    payload: article,
});

export const schoolFetchFailure = errors => ({
    type: SCHOOL_FETCH_FAILURE,
    errors,
});

export const getSchoolAction = slug => (dispatch) => {
    dispatch(fetchingSchool());
    dispatch(pageLoadingAction());
    return api.get(`schools/${slug}/`).then((data) => {
        dispatch(schoolFetchSuccess(data.data.data.school));
        dispatch(pageLoadedAction());
    }).catch((errors) => {
        dispatch(pageLoadedAction());
        dispatch(schoolFetchFailure(errors.response));
    });
};

export const updateSchoolAction = (slug, data) => (dispatch) => {
    dispatch(pageLoadingAction());
    return api.put(`schools/${slug}/`, data)
        .then((data) => {
            dispatch(schoolUpdateSuccess(data.data));
            dispatch(pageLoadedAction());
        }).catch((errors) => {
            dispatch(schoolUpdateFailure(errors.response));
            dispatch(pageLoadedAction());
        });
};