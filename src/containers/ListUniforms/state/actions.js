import {
    FETCH_UNIFORMS,
    FETCH_UNIFORMS_FAILURE,
    FETCH_UNIFORMS_SUCCESS,
    EDIT_UNIFORM_FAILURE,
    EDIT_UNIFORM_SUCCESS,
    DELETE_UNIFORM_FAILURE,
    DELETE_UNIFORM_SUCCESS,
} from './types';
import api from '../../../utils/api';


export const fetchingUniforms = () => ({
    type: FETCH_UNIFORMS,
});

export const fetchUniformsSuccess = uniform => ({
    type: FETCH_UNIFORMS_SUCCESS,
    payload: uniform,
});

export const fetchUniformsFailure = errors => ({
    type: FETCH_UNIFORMS_FAILURE,
    errors,
});

export const deleteUniformSuccess = () => ({
    type: DELETE_UNIFORM_SUCCESS,
});

export const deleteUniformFailure = () => ({
    type: DELETE_UNIFORM_FAILURE,
});

export const fetchUniformsAction = slug => (dispatch) => {
    dispatch(fetchingUniforms());
    return api.get(`schools/${slug}/uniforms/`)
        .then((response) => {
            dispatch(fetchUniformsSuccess(response.data.data.uniform));
        }).catch((error) => {
            dispatch(fetchUniformsFailure(error.response));
        });
};

export const deleteUniformAction = (slug, id) => (dispatch) => {
    dispatch(fetchingUniforms());
    return api.delete(`schools/${slug}/uniforms/${id}`)
        .then(() => {
            dispatch(deleteUniformSuccess());
        }).catch((error) => {
            dispatch(deleteUniformFailure(error.response));
        });
};

