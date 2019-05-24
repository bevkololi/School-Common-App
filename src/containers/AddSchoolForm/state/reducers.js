import {
  SCHOOL_SAVE,
  SCHOOL_SAVE_SUCCESS,
  SCHOOL_SAVE_FAILURE,
} from './types';

export const initialState = {
  isSaving: false,
  isSaved: true,
  errors: [],
  school: {
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCHOOL_SAVE:
      return { ...state, isSaving: true };
    case SCHOOL_SAVE_SUCCESS:
      return {
        ...state,
        school: action.payload,
        isSaving: false,
        isSaved: true,
      };
    case SCHOOL_SAVE_FAILURE:
      return {
        ...state,
        isSaved: false,
        isSaving: false,
        errorFetching: true,
        errors: [action.payload.data.data.name],
      };
    default: return state;
  }
}