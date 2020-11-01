import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WeatherCard from "../WeatherCard/WeatherCard";
import ActiveCard from "../ActiveCard/ActiveCard";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { style } from "./style";

/**
 * для исправления проблемы можна установить в setModifiedProps
 *  type: data.weatherData[0].type ,
    hours: data.weatherData[0].hours ,
    tempDay: data.weatherData[0].tempDay ,
    tempNight: data.weatherData[0].tempNight ,
    humidity: data.weatherData[0].humidity ,
    windSpeed: data.weatherData[0].windSpeed ,
    weatherDesc: data.weatherData[0].weatherDesc ,
    day: data.weatherData[0].day ,
    icon: data.weatherData[0].icon ,
 */

function CardsList(props) {
  const { data, setCardDescription } = props;
  const classes = style();

  const [defaultProps, setDefaultProps] = useState(data.weatherData[0]);
  const [modifiedProps, setModifiedProps] = useState({
    type: null,
    hours: null,
    tempDay: null,
    tempNight: null,
    humidity: null,
    windSpeed: null,
    weatherDesc: null,
    day: null,
    icon: null,
  });
  useEffect(() => setDefaultProps(data.weatherData[0]), [
    setDefaultProps,
    data.weatherData,
  ]);
  const cards = data.weatherData.map((item, index) => {
    return (
      <WeatherCard
        key={index}
        type={item.type}
        hours={item.hours}
        tempDay={item.tempDay}
        tempNight={item.tempNight}
        humidity={item.humidity}
        windSpeed={item.windSpeed}
        weatherDesc={item.weatherDesc}
        day={item.day}
        icon={item.icon}
        setModifiedProps={setModifiedProps}
      />
    );
  });

  return (
    <Slide in={true} direction="up">
      <Grid
        container
        justify="center"
        alignItems="flex-end"
        className={classes.cardList}
      >
        <ActiveCard
          type={modifiedProps.type || defaultProps.type}
          hours={modifiedProps.hours || defaultProps.hours}
          tempDay={modifiedProps.tempDay || defaultProps.tempDay}
          tempNight={modifiedProps.tempNight || defaultProps.tempNight}
          humidity={modifiedProps.humidity || defaultProps.humidity}
          windSpeed={modifiedProps.windSpeed || defaultProps.windSpeed}
          weatherDesc={modifiedProps.weatherDesc || defaultProps.weatherDesc}
          day={modifiedProps.day || defaultProps.day}
          icon={modifiedProps.icon || defaultProps.icon}
          setCardDescription={setCardDescription}
        />

        <Grid
          item
          container
          xs={12}
          md={7}
          lg={8}
          xl={9}
          alignItems="center"
          className={classes.cardListTrack}
        >
          {cards}
        </Grid>
      </Grid>
    </Slide>
  );
}

CardsList.propTypes = {
  data: PropTypes.object,
  setCardDescription: PropTypes.func,
};

export default CardsList;
