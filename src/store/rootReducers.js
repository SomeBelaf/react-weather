import { combineReducers } from "redux";
import { userCoordinatesReducer } from "./userCoordinates/reducers";
import { userCityAndCountryReducer } from "./userCityAndCountry/reducers";
import { backgroundReducer } from "./background/reducers";

export default combineReducers({
  userCoordinates: userCoordinatesReducer,
  userCityAndCountry: userCityAndCountryReducer,
  backgroundReducer: backgroundReducer,
});
