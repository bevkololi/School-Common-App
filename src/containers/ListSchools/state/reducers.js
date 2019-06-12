import {
    FETCH_MORE_SCHOOLS_SUCCESS,
    FETCH_SCHOOLS,
    FETCH_SCHOOLS_FAILURE,
    FETCH_SCHOOLS_SUCCESS,
} from './types';

export const initialState = {
    isFetching: true,
    fetchSuccess: false,
    fetchFailure: false,
    errors: null,
    schools: {
        results: []
    },
    total_pages: null,
    previous_page: null,
    next_page: null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_SCHOOLS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        schools: action.payload.results,
        total_pages: action.payload.total_pages,
        previous_page: action.payload.links.previous,
        next_page: action.payload.links.next,
      };
    case FETCH_SCHOOLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchFailure: true,
        ERRORS: action.errors,
      };
    default:
      return state;
    }
  };


export default reducer;

