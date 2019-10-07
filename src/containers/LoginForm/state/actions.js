import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_START } from './types';
import api from '../../../utils/api';

export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    data
})

export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logingIn = () => ({
    type: LOGIN_START,
});


const loginAction = (data, successCallback) => (dispatch) => {
    dispatch(logingIn());
    return api.post('users/login/', data)
        .then((res) => {
            successCallback();
            localStorage.setItem('image', JSON.stringify(res.data.user.image));
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', JSON.stringify(res.data.user.token));
            localStorage.setItem('slug', JSON.stringify(res.data.user.slug));
            dispatch(loginSuccess(res.data.user));
        })
        .catch((err) => {
            dispatch(loginFailure(err.response ? err.response.data.errors.error : []));
        });
};


export default loginAction;