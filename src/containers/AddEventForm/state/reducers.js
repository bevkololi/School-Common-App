import {
    EVENT_SAVE,
    EVENT_SAVE_SUCCESS,
    EVENT_SAVE_FAILURE,
  } from './types';
  
  export const initialState = {
    isSaving: false,
    isSaved: true,
    success: false,
    errors: [],
    event: {
    },
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case EVENT_SAVE:
        return { ...state, isSaving: true };
      case EVENT_SAVE_SUCCESS:
        return {
          ...state,
          event: action.payload,
          isSaving: false,
          isSaved: true,
          success: true,
        };
      case EVENT_SAVE_FAILURE:
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