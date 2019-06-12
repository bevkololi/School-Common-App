import {
    SCHOOL_UPDATE,
    SCHOOL_UPDATE_FAILURE,
    SCHOOL_UPDATE_SUCCESS,
    SCHOOL_FETCH_SUCCESS,
    SCHOOL_FETCH_FAILURE,
} from './types';

export const initialState = {
    isSaving: false,
    isSaved: true,
    errors: [],
    school: {
        school: {}
    },
    isFetched: false,
    isFetching: true,
    isPageLoading: true,
    errorFetching: false,
    success: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SCHOOL_UPDATE:
            return { ...state, isSaving: true };
        case SCHOOL_UPDATE_SUCCESS:
            return {
                ...state,
                school: action.payload,
                isSaving: false,
                isSaved: true,
                success: true,
            };
        case SCHOOL_UPDATE_FAILURE:
            return {
                ...state,
                isSaved: false,
                isSaving: false,
                errorFetching: true,
                errors: [action.payload.data.message],
            };
        case SCHOOL_FETCH_SUCCESS:
            return {
                ...state,
                isSaved: true,
                isFetching: false,
                isFetched: true,
                school: action.payload,
                success: true,
            };
        case SCHOOL_FETCH_FAILURE:
            return {
                ...state,
                isFetched: false,
                errorFetching: true,
                errors: action.errors,
            }
        default: return state;
    }
}