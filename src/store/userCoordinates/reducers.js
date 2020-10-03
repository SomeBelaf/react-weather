import { CHANGE_USER_LAT } from "./actions";
import { CHANGE_USER_LON } from "./actions";
import { SET_USER_COORDINATES_ERROR } from "./actions";

const defaultState = {
  lon: "",
  lat: "",
  coordinatesErr: ""
};

export const userCoordinatesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USER_LAT:
      return {
        ...state,
        lat: action.payload.toString()
      };
    case CHANGE_USER_LON:
      return {
        ...state,
        lon: action.payload.toString()
      };
    case SET_USER_COORDINATES_ERROR:
      return {
        ...state,
        coordinatesErr: action.payload
      };
    default:
      return state;
  }
};
