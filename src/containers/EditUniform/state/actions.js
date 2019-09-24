import {
    FETCH_UNIFORMS,
    EDIT_UNIFORM_FAILURE,
    EDIT_UNIFORM_SUCCESS,
} from '../../ListUniforms/state/types';
import api from '../../../utils/api';


export const fetchingUniform = () => ({
    type: FETCH_UNIFORMS,
});

export const editUniformSuccess = uniform => ({
    type: EDIT_UNIFORM_SUCCESS,
    payload: uniform,
});

export const editUniformFailure = errors => ({
    type: EDIT_UNIFORM_FAILURE,
    errors,
});


export const editUniformAction = (slug, id, data) => (dispatch) => {
    dispatch(fetchingUniform());
    return api.put(`schools/${slug}/uniforms/${id}`, data)
        .then((res) => {
            dispatch(editUniformSuccess(res.data));
        }).catch((error) => {
            dispatch(editUniformFailure(error.response));
        });
};
