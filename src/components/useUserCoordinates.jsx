import { useDispatch } from "react-redux";
import {
  setUserCityError,
  setUserCountryError,
  setUserCity,
  setUserCountry,
} from "../store/userCityAndCountry/actions";
import { setRequestError } from "../store/apiRequest/actions";
import {
  setUserCoordinatesError,
  setUserLat,
  setUserLon,
} from "../store/userCoordinates/actions";

export const useUserCoordinates = () => {
  const dispatch = useDispatch();
  return function () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(setUserLat(position.coords.latitude));
        dispatch(setUserLon(position.coords.longitude));
      },
      // если пользователь не включил геолокацию, вывести ошибку
      (error) => {
        if (error.code === 1) {
          dispatch(
            setUserCoordinatesError(
              "Turn on geolocation or enter your city and country."
            )
          );
        }
      }
    );
  };
};

export const useUserCootdinatesRequest = () => {
  const dispatch = useDispatch();
  return async function (enteredCity, enteredCountry) {
    try {
      const response = await fetch(
        `http://localhost:8000/?city=${enteredCity}&country=${enteredCountry}`
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
