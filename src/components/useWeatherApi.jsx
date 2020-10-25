import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRequestError } from "../store/apiRequest/actions";

const API_KEY = "116d6fc2fb80fd747f9da1487879c958";

export const useWeatherApi = () => {
  const dispatch = useDispatch();
  const [weatherData, getWeatherData] = useState(null);
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
      "Saturday"
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
  const convertData = (data, arrOfDays, period) => {
    const convertedData = data.map((item, index) => {
      return {
        type: period === "daily" ? "daily" : "hourly",
        hours: `${new Date(item.dt * 1000).getHours()}:00`,
        curentWeather: item.weather[0].main,
        tempDay: Math.round(item.feels_like.day || item.feels_like), //первое значение подставляется  если передан data.daily, иначе с data.hourly
        tempNight: Math.round(item.feels_like.night) || "", //первое значение подставляется  если передан data.daily, иначе с data.hourly
        windSpeed: Math.round(item.wind_speed * 3.6), // перевести с  m/s в km/h
        humidity: item.humidity,
        rain: item.rain,
        snow: item.snow,
        icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        day: arrOfDays[index]
      };
    });
    if (arrOfDays.length === 2) {
      convertedData.forEach((item, index) =>
        index <= 23 ? (item.day = arrOfDays[0]) : (item.day = arrOfDays[1])
      );
    }
    return getWeatherData({
      weatherData: convertedData
    });
  };
  /*
   * функция делающая запрос на сервер
   */
  const weatherRequest = async (lat, lon, period) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        ` https:///api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${period}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.daily) {
        convertData(data.daily, getDays(8), "daily");
      } else if (data.hourly) {
        convertData(data.hourly, getDays(2), "hourly");
      }
      dispatch(setRequestError(""));
    } catch (error) {
      dispatch(setRequestError("Something went wrong, reload page.")); //error.message
    }
    setIsLoading(false);
  };

  return {
    weatherRequest,
    isLoading,
    weatherData
  };
};
