import { useState } from "react";

function GeolocationApi() {
  const [geoError, handleGeoError] = useState("");
  // получение геолокации пользователя, и запись её в localStorage
  navigator.geolocation.getCurrentPosition(
    (position) => {
      localStorage.setItem(
        "userLocation",
        JSON.stringify({
          lat: window.btoa(position.coords.latitude),
          lon: window.btoa(position.coords.longitude)
        })
      );
    },
    // если пользователь не включил геолокацию, вывести ошибку
    (error) => {
      if (error.code === 1) {
        handleGeoError("Turn on geolocation");
      }
    }
  );

/**
 * Work In progress!!!!!
 */
  const setUserCityAndCountry = async (city, country, id) => {
    // console.log(lable);
    // console.log(city);
    // console.log(country);

    const response = await fetch("../test.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const data = await response.json();

    let userCity = [];
    let userCountry = [];
    debugger;
    // ввод города
    if (id === "city") {
      if (!city.toLowerCase().length) {
        userCity = "";
      } else {
        userCity = await data
          .filter(function (place) {
            //поиск необходимого объекта с нужным городом
            // console.log(place)
            return place.name.toLowerCase().indexOf(city.toLowerCase()) !== -1;
          })
          .map(function (place) {
            //  получение искомого города с найденного объекта
            // console.log(place.coord.lon);
            // console.log(place.coord.lat);
            return [place.name, place.country];
          });
      }
    }

    // ввод страны
    if (id === "country") {
      if (!country.toLowerCase().length) {
        userCountry = "";
      } else {
        userCountry = await data
          .filter(function (place) {
            //поиск необходимого объекта с нужной страной
            return (
              place.country.toLowerCase().indexOf(country.toLowerCase()) !== -1
            );
          })
          .map(function (place) {
            // a получение искомой страны с найденного объекта
            // console.log(place.coord.lon);
            // console.log(place.coord.lat);
            return [place.country, place.name];
          });

        // if(userCity.includes(country.toLowerCase())){
        //   console.log('ok')
        // }
      }
    }

    console.log(userCity);
    console.log(userCountry);
  };


  return { geoError, setUserCityAndCountry };
}
export default GeolocationApi;
