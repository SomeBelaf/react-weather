export const CHANGE_USER_LAT = "CHANGE_USER_LAT";
export const CHANGE_USER_LON = "CHANGE_USER_LON";
export const SET_USER_COORDINATES_ERROR = "SET_USER_COORDINATES_ERROR";

export const setUserLat = (coordinates) => ({
  type: CHANGE_USER_LAT,
  payload: coordinates
});

export const setUserLon = (coordinates) => ({
  type: CHANGE_USER_LON,
  payload: coordinates
});
export const setUserCoordinatesError = (err) => ({
  type: SET_USER_COORDINATES_ERROR,
  payload: err
});
