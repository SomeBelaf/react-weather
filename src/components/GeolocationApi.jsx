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



  return { geoError };
}
export default GeolocationApi;
