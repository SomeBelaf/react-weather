import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./Header";

function HeaderContainer(props) {
  return (
    <Header
      {...props}
      coordinatesErr={props.coordinatesErr}

      userCity={props.userCity}
      userCountry={props.userCountry}
      errCity={props.errCity}
      errCountry={props.errCountry}
      requestError={props.requestError}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    userLon: state.userCoordinates.lon, 
    userLat: state.userCoordinates.lat, 
    coordinatesErr: state.userCoordinates.coordinatesErr, //вывести Turn on Geolocation на страницу
    userCity: state.userCityAndCountry.userCity, //вывестив в инпут найденый город
    userCountry: state.userCityAndCountry.userCountry, //вывестив в инпут найденую страну
    errCity: state.userCityAndCountry.errCity, //вывести ошибки  с сервера
    errCountry: state.userCityAndCountry.errCountry, //вывести ошибки  с сервера
    requestError: state.userCityAndCountry.requestError //вывести ошибки  с сервера
  };
};
const mapDispatchToProps = {};

HeaderContainer.propTypes = {
  weatherRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
