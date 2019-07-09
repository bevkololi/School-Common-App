import {
  FETCH_EVENTS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_SUCCESS,
} from './types';

export const initialState = {
  isFetching: true,
  fetchSuccess: false,
  fetchFailure: false,
  isConfirm: false,
  errors: null,
  events: {
    results: []
  },
  total_pages: null,
  previous_page: null,
  next_page: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        events: action.payload.results,
        total_pages: action.payload.total_pages,
        previous_page: action.payload.links.previous,
        next_page: action.payload.links.next,
      };
    case FETCH_EVENTS_FAILURE:
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

