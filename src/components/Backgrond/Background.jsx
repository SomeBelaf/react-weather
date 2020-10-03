import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
const useStyles = makeStyles((theme) => ({
  wrapper: {
    zIndex: -1,
    position: " fixed",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%"
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    minWidth: "50%",
    minHeight: "50%"
  }
}));

export default function Background (props) {
  const classes = useStyles();
  
  const {cardDescription} = props;

  // Массив с описаниями погоды
  const WeatherCondition = [
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ];
  /**
   * НИ В КОЕМ СЛУЧАЕ НЕ МЕНЯТЬ ПОСЛЕДОВАТЕЛЬНОСТЬ В МАССИВЕ
   */
  const arrOfImage = [
    "https://i.ibb.co/18dttN0/thunderstorm.jpg", //thunderstorm
    "https://i.ibb.co/qgWNwKp/drizzle.jpg", // drizzle
    "https://i.ibb.co/0mgjL6w/rain.jpg", // rain
    "https://i.ibb.co/PYXPySp/snow.jpg", // snow
    "https://i.ibb.co/P6hDWBJ/mist.jpg", //mist
    "https://i.ibb.co/P6hDWBJ/mist.jpg", //mist
    "https://i.ibb.co/P6hDWBJ/mist.jpg", //mist
    "https://i.ibb.co/rMf24q3/dust.jpg", //dust
    "https://i.ibb.co/P6hDWBJ/mist.jpg", //mist
    "https://i.ibb.co/rMf24q3/dust.jpg", //dust
    "https://i.ibb.co/rMf24q3/dust.jpg", //dust
    "https://i.ibb.co/BKpRgMd/squall.jpg", // squall
    "https://i.ibb.co/PtmKL0T/tornado.jpg", //tornado
    "https://i.ibb.co/1qgB3Vt/clear.jpg", //clear
    "https://i.ibb.co/pzFpgTv/clouds.jpg" //cloud
  ];
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.bgImage}
        alt={cardDescription}
        src={
          arrOfImage[WeatherCondition.indexOf(cardDescription)] ||
          "https://i.ibb.co/BKpRgMd/squall.jpg"
        }
      />
    </div>
  );
};



Background.propTypes = {
  cardDescription: PropTypes.string,
};
