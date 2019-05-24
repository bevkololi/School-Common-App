import {
    SCHOOL_UPDATE,
    SCHOOL_UPDATE_FAILURE,
    SCHOOL_UPDATE_SUCCESS,
} from './types';

export const initialState = {
    isSaving: false,
    isSaved: true,
    errors: [],
    school: {},
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
            };
        case SCHOOL_UPDATE_FAILURE:
            return {
                ...state,
                isSaved: false,
                isSaving: false,
                errorFetching: true,
                errors: [action.payload.data.message],
            };
        default: return state;
    }
}