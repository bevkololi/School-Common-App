import {
    FETCH_EVENT,
    EDIT_EVENT_FAILURE,
    EDIT_EVENT_SUCCESS,
    DELETE_EVENT_FAILURE,
    DELETE_EVENT_SUCCESS,
} from './types';

export const initialState = {
    isSaving: false,
    isSaved: true,
    errors: [],
    event: {
        event: {}
    },
    isFetched: false,
    isFetching: true,
    isPageLoading: true,
    errorFetching: false,
    success: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENT:
            return {
                ...state,
                isFetching: true,
            };
        case EDIT_EVENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchSuccess: true,
                event: action.payload,
                isSaving: false,
                isSaved: true,
                success: true,
            };
        case EDIT_EVENT_FAILURE:
            return {
                ...state,
                isSaved: false,
                isSaving: false,
                errorFetching: true,
                errors: [action.payload.data.message],
            };
        case DELETE_EVENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchSuccess: true,
                event: action.payload,
                isSaving: false,
                isSaved: true,
                success: true,
            };
        case DELETE_EVENT_FAILURE:
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

