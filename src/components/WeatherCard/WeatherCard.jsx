import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { style } from "./style";

function WeatherCard(props) {
  const {
    type,
    hours,
    tempDay,
    tempNight,
    weatherDesc,
    day,
    icon,
    setModifiedProps,
  } = props;
  const classes = style();

  return (
    <Grid
      item
      xs={5}
      sm="auto"
      className={classes.container}
      onClick={() => setModifiedProps(props)}
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid container item xs="auto" direction="column">
              <Typography variant="body1">{day}</Typography>
              {type === "hourly" ? (
                <Typography variant="body2">{hours}</Typography>
              ) : null}
            </Grid>
            <Grid item xs="auto">
              <img src={icon} alt={weatherDesc} className={classes.icon} />
            </Grid>
            <Grid item xs="auto">
              {+hours.match(/^(\d)+/g).join("") >= 6 &&
              +hours.match(/^(\d)+/g).join("") <= 18 ? (
                <Typography variant="h5">{tempDay}°C</Typography>
              ) : (
                <Typography variant="h5">{tempNight}°C</Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

WeatherCard.propTypes = {
  tempDay: PropTypes.number,
  tempNight: PropTypes.number,
  type: PropTypes.string,
  icon: PropTypes.string,
  hours: PropTypes.string,
  weatherDesc: PropTypes.string,
  day: PropTypes.string,
};

export default WeatherCard;
