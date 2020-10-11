export const CHANGE_USER_CITY = "CHANGE_USER_CITY";
export const CHANGE_USER_COUNRTY = "CHANGE_USER_COUNRTY";
export const SET_USER_CITY_ERROR = "SET_USER_CITY_ERROR";
export const SET_USER_COUNTRY_ERROR = "SET_USER_COUNTRY_ERROR";



export const setUserCity = (city) => ({
  type: CHANGE_USER_CITY,
  payload: city
});

export const setUserCountry = (country) => ({
  type: CHANGE_USER_COUNRTY,
  payload: country
});

export const setUserCityError = (err) => ({
  type: SET_USER_CITY_ERROR,
  payload: err
});

export const setUserCountryError = (err) => ({
  type: SET_USER_COUNTRY_ERROR,
  payload: err
});

