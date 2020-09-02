import { useState } from "react";

function WeatherApi() {
  const [weatherData, getWeatherData] = useState(null);
  const [fetchError, handleFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  /*
   * функция определяющая какой день у пользователя,
   * возвращает массив с днями недели
   */
  const getDays = (daysToAdd) => {
    let arrOfDays = [];
    let startDate = new Date();
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    for (let i = 0; i < daysToAdd; i++) {
      let currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      arrOfDays.push(weekdays[currentDate.getDay()]);
    }

    return arrOfDays;
  };
  /*
   * перевод полученных данных в нужный формат
   */
  const convertData = (data, arr) => {
    const convertedData = data.map((item) => {
      return {
        curentWeather: item.weather[0].main,
        tempDay: Math.round(item.feels_like.day),
        tempNight: Math.round(item.feels_like.night),
        windSpeed: Math.round(item.wind_speed * 3.6), // convert from m/s to km/h
        clouds: item.clouds,
        humidity: item.humidity,
        rain: item.rain,
        snow: item.snow,
        icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        day: "",
      };
    });

    arr.map((item, index) => {
      return (convertedData[index].day = item);
    });

    getWeatherData({ weatherData: convertedData });
  };
  /*
   * функция делающая запрос на сервер
   */
  const weatherRequest = async (lat, lon) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        ` https:///api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly&appid=116d6fc2fb80fd747f9da1487879c958`
      );
      const data = await response.json();

      convertData(data.daily, getDays(8));
    } catch (error) {
      handleFetchError(error.message);
    }
    setIsLoading(false);
  };
  /*
   * получение геолокации с localStorage,
   * и отправка запроса с данными пользователя
   */
  const getDataFromLocStorage = () => {
    if (localStorage.getItem("userLocation") !== null) {
      const gettingUserLocation = JSON.parse(
        localStorage.getItem("userLocation")
      );
      weatherRequest(
        window.atob(gettingUserLocation.lat),
        window.atob(gettingUserLocation.lon)
      );
    } else {
      handleFetchError("Something went wrong, reload page.");
    }
  };

  return {
    getDataFromLocStorage,
    fetchError,
    isLoading,
    weatherData,
  };
}

export default WeatherApi;
