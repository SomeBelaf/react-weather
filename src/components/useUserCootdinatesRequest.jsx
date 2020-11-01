import { useDispatch } from "react-redux";
import {
  setUserCityError,
  setUserCountryError,
  setUserCity,
  setUserCountry,
} from "../store/userCityAndCountry/actions";
import { setRequestError } from "../store/apiRequest/actions";
import { setUserLat, setUserLon } from "../store/userCoordinates/actions";

export const useUserCootdinatesRequest = () => {
  const SERVER_URL = "http://localhost:8000";
  const dispatch = useDispatch();
  return async function (enteredCity, enteredCountry) {
    try {
      const response = await fetch(
        `${SERVER_URL}/?city=${enteredCity}&country=${enteredCountry}`
      );
      const data = await response.json();
      if (data.error || data.error) {
        dispatch(setUserCityError(data.error.errCity));
        dispatch(setUserCountryError(data.error.errCountry));
      } else {
        dispatch(setUserCity(data.data[0].name));
        dispatch(setUserCountry(data.data[0].country));
        dispatch(setUserLat(data.data[0].lat));
        dispatch(setUserLon(data.data[0].lon));

        dispatch(setUserCityError(""));
        dispatch(setUserCountryError(""));
      }
    } catch (error) {
      dispatch(setRequestError(error.message)); //error.message
    }
  };
};
