export const SET_REQUEST_ERROR = "SET_REQUEST_ERROR";

export const setRequestError = (err) => ({
  type: SET_REQUEST_ERROR,
  payload: err
});
