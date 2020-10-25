import { useDispatch } from "react-redux";
import {
  setUserCoordinatesError,
  setUserLat,
  setUserLon
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
