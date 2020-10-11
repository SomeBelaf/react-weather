import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";
import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
const useStyles = makeStyles((theme) => ({
  contaner: {
    minWidth: "350px",
    padding: theme.spacing(2)
  },
  flexOne: {
    flex: 1
  },
  comtainer: {
    dislpay: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  temp: {
    marginBottom: theme.spacing(1)
  }
}));

function WetherCard(props) {
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
    handleCardDescr
  } = props;
  const classes = useStyles();

  return (
    <Grid item className={classes.contaner} onMouseEnter={handleCardDescr}>
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
              <img src={icon} alt={weatherDesc} />
            </Grid>
            {type === "daily" ? (
              <Grid container item justify="space-evenly" alignItems="center">
                <Grid container item xs={3} alignItems="center">
                  <Brightness5TwoToneIcon className={classes.flexOne} />
                  <Typography variant="h5">{tempDay}°C</Typography>
                </Grid>
                <Grid container item xs={3} alignItems="center">
                  <Brightness2TwoToneIcon className={classes.flexOne} />
                  <Typography variant="h5">{tempNight}°C</Typography>
                </Grid>
              </Grid>
            ) : null}
            {type === "hourly" ? (
              <Grid container item justify="space-evenly" alignItems="center">
                <Grid container item xs={3} alignItems="center">
                  {+hours.match(/^(\d)+/g).join("") >= 8 &&
                  +hours.match(/^(\d)+/g).join("") <= 20 ? (
                    <Brightness5TwoToneIcon className={classes.flexOne} />
                  ) : (
                    <Brightness2TwoToneIcon className={classes.flexOne} />
                  )}

                  <Typography variant="h5">{tempDay}°C</Typography>
                </Grid>
              </Grid>
            ) : null}
            <Grid container item justify="space-around">
              <Grid item>
                <Typography variant="subtitle1">
                  Humidity {humidity}%
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Wind speed {windSpeed} km/h
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

Card.propTypes = {
  tempDay: PropTypes.number,
  tempNight: PropTypes.number,
  humidity: PropTypes.number,
  windSpeed: PropTypes.number,
  cloud: PropTypes.number,
  weatherDesc: PropTypes.string,
  day: PropTypes.string
};

export default WetherCard;
