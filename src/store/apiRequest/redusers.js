import { SET_REQUEST_ERROR } from "./actions";

const defaultState = {
  requestError: ""
};

export const apiRequestReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_REQUEST_ERROR:
      return {
        ...state,
        requestError: action.payload
      };
    default:
      return state;
  }
};
