import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";
import { style } from "./style";

function ActiveCard(props) {
  const {
    type,
    hours,
    tempDay,
    tempNight,
    humidity,
    windSpeed,
    weatherDesc,
    day,
    icon,
    setCardDescription,
  } = props;
  const classes = style();

  useEffect(() => {
    setCardDescription(weatherDesc);
  }, [setCardDescription, weatherDesc]);

  const sectionDaily =
    type === "daily" ? (
      <Grid container item justify="center" alignItems="center">
        <Brightness5TwoToneIcon />
        <Typography variant="h5">{tempDay}°C</Typography>
      </Grid>
    ) : null;
  const sectionHourly =
    type === "hourly" ? (
      <Grid container item justify="center" alignItems="center">
        {+hours.match(/^(\d)+/g).join("") >= 6 &&
        +hours.match(/^(\d)+/g).join("") <= 18 ? (
          <>
            <Brightness5TwoToneIcon />
            <Typography variant="h5">{tempDay}°C</Typography>
          </>
        ) : (
          <>
            <Brightness2TwoToneIcon />
            <Typography variant="h5">{tempNight}°C</Typography>
          </>
        )}
      </Grid>
    ) : null;

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      lg={4}
      xl={3}
      className={classes.container}
    >
      <Card>
        <CardContent>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid container item alignItems="flex-start" justif="space-between">
              <Grid item className={classes.flexOne}>
                <Typography variant="h5">{day}</Typography>
                {type === "hourly" ? (
                  <Typography variant="subtitle1">{hours}</Typography>
                ) : null}
              </Grid>
              <img src={icon} alt={weatherDesc} className={classes.icon} />
            </Grid>
            {sectionDaily}
            {sectionHourly}
            <Grid container item justify="space-evenly">
              <Grid item xs="auto">
                <Typography variant="subtitle1">
                  <span className={classes.weatherInfo}>Humidity</span>
                  {humidity}%
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="subtitle1">
                  <span className={classes.weatherInfo}>Wind speed</span>
                  {windSpeed} km/h
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

ActiveCard.propTypes = {
  type: PropTypes.string,
  hours: PropTypes.string,
  tempDay: PropTypes.number,
  tempNight: PropTypes.number,
  humidity: PropTypes.number,
  windSpeed: PropTypes.number,
  weatherDesc: PropTypes.string,
  day: PropTypes.string,
  icon: PropTypes.string,
  handleCardDescr: PropTypes.func,
};

export default ActiveCard;
