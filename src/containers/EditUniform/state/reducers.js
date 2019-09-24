import {
    FETCH_UNIFORMS,
    EDIT_UNIFORM_FAILURE,
    EDIT_UNIFORM_SUCCESS,
} from '../../ListUniforms/state/types';

export const initialState = {
    isSaving: false,
    isSaved: true,
    errors: [],
    uniform: {
        uniform: {}
    },
    isFetched: false,
    isFetching: true,
    isPageLoading: true,
    errorFetching: false,
    success: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UNIFORMS:
            return {
                ...state,
                isFetching: true,
            };
        case EDIT_UNIFORM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchSuccess: true,
                uniform: action.payload,
                isSaving: false,
                isSaved: true,
                success: true,
            };
        case EDIT_UNIFORM_FAILURE:
            return {
                ...state,
                isSaved: false,
                isSaving: false,
                errorFetching: true,
                errors: [action.payload.data.message],
            };
        default:
            return state;
    }
};


export default reducer;

