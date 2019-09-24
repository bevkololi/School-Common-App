import {
    UNIFORM_SAVE,
    UNIFORM_SAVE_SUCCESS,
    UNIFORM_SAVE_FAILURE,
  } from './types';
  
  export const initialState = {
    isSaving: false,
    isSaved: true,
    success: false,
    errors: [],
    uniform: {
    },
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case UNIFORM_SAVE:
        return { ...state, isSaving: true };
      case UNIFORM_SAVE_SUCCESS:
        return {
          ...state,
          uniform: action.payload,
          isSaving: false,
          isSaved: true,
          success: true,
        };
      case UNIFORM_SAVE_FAILURE:
        return {
          ...state,
          isSaved: false,
          isSaving: false,
          errorFetching: true,
          errors: [action.payload.data.data.errors],
        };
      default: return state;
    }
  }