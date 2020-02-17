import * as types from "../actions/types";

export const initialState = {
  loading: false,
  characters: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SEARCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case types.SEARCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload
      };
    case types.SEARCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
