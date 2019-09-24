import {
  FETCH_UNIFORMS,
  FETCH_UNIFORMS_FAILURE,
  FETCH_UNIFORMS_SUCCESS,
  DELETE_UNIFORM_FAILURE,
  DELETE_UNIFORM_SUCCESS,
} from './types';

export const initialState = {
  isFetching: true,
  fetchSuccess: false,
  fetchFailure: false,
  isConfirm: false,
  errors: null,
  uniforms: {
    results: []
  },
  total_pages: null,
  previous_page: null,
  next_page: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNIFORMS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_UNIFORMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        uniforms: action.payload.results,
        total_pages: action.payload.total_pages,
        previous_page: action.payload.links.previous,
        next_page: action.payload.links.next,
      };
    case FETCH_UNIFORMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchFailure: true,
        errors: action.errors,
      };
      case DELETE_UNIFORM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        uniform: action.payload,
        success: true,
      };
    case DELETE_UNIFORM_FAILURE:
      return {
        ...state,
        errorFetching: true,
        errors: [action.payload.data.message],
      };
    default:
      return state;
  }
};


export default reducer;

