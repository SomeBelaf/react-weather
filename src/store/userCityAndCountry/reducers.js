import { CHANGE_USER_CITY } from "./actions";
import { CHANGE_USER_COUNRTY } from "./actions";
import { SET_USER_CITY_ERROR } from "./actions";
import { SET_USER_COUNTRY_ERROR } from "./actions";

const defaultState = {
  userCity: "",
  userCountry: "",
  errCity: "",
  errCountry: ""
};

export const userCityAndCountryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USER_CITY:
      return {
        ...state,
        userCity: action.payload
      };
    case CHANGE_USER_COUNRTY:
      return {
        ...state,
        userCountry: action.payload
      };
    case SET_USER_CITY_ERROR:
      return {
        ...state,
        errCity: action.payload
      };
    case SET_USER_COUNTRY_ERROR:
      return {
        ...state,
        errCountry: action.payload
      };
    default:
      return state;
  }
};
