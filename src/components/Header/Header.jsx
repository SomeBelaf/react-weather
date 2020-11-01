import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useUserCootdinatesRequest } from "../useUserCootdinatesRequest";
import { useDebounce } from "./useDebounce";
import LoadingDots from "../LoadingDots/LoadingDots";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FilterDramaTwoToneIcon from "@material-ui/icons/FilterDramaTwoTone";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { style } from "./style";

function Header(props) {
  const {
    weatherRequest,
    isLoading,
    userLat,
    userLon,
    requestError,
    coordinatesErr,
    userCity,
    userCountry,
    errCity,
    errCountry,
  } = props;

  const classes = style();

  const makeRequest = useUserCootdinatesRequest();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [period, setPeriod] = useState("current,minutely,hourly");
  const [daily, setDaily] = useState(true);
  const [hourly, setHourly] = useState(false);

  const handlePeriodChange = (event) => {
    if (event.target.name === "checkboxDaily") {
      setDaily(true);
      setHourly(false);
      setPeriod("current,minutely,hourly");
    } else {
      setHourly(true);
      setDaily(false);
      setPeriod("current,minutely,daily");
    }
  };

  const debounceCity = useDebounce(city, 2000);
  const debounceCountry = useDebounce(country, 2000);

  useEffect(() => {
    if (debounceCity && debounceCountry)
      makeRequest(debounceCity, debounceCountry);
  }, [debounceCity, debounceCountry, makeRequest]);

  // запрос на сервер
  const handleSubmit = (e) => {
    e.preventDefault();
    weatherRequest(userLat, userLon, period);
  };
  const buttonContent = isLoading ? (
    <>
      <Typography>Loading</Typography> <LoadingDots />
    </>
  ) : (
    <Typography>Get weather</Typography>
  );

  return (
    <Grid container justify="flex-start" className={classes.header}>
      <Grid
        item
        container
        xs={6}
        sm={2}
        xl={1}
        direction="column"
        alignItems="center"
        className={classes.logoWrapper}
      >
        <FilterDramaTwoToneIcon style={{ fontSize: "4.1875rem" }} />
        <Typography variant="h4" align="center">
          LOGO
        </Typography>
      </Grid>

      <Grid item sm={10}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            spacing={1}
            className={classes.form}
          >
            <Grid
              item
              container
              xs={12}
              spacing={2}
              alignItems="center"
              className={classes.inputsContainer}
            >
              <Grid item sm={4} md="auto">
                <TextField
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  error={errCity ? true : false}
                  label={errCity}
                  id="city"
                  defaultValue=""
                  size="small"
                  variant="outlined"
                  placeholder={"City"}
                  helperText={userCity || ""}
                />
              </Grid>
              <Grid item sm={4} md="auto">
                <TextField
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  error={errCountry ? true : false}
                  label={errCountry}
                  id="country"
                  defaultValue=""
                  size="small"
                  variant="outlined"
                  placeholder={"Country"}
                  helperText={userCountry || ""}
                />
              </Grid>
              <Grid item sm={4} md="auto">
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.submitBtn}
                >
                  {buttonContent}
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={11}
              md="auto"
              className={classes.checkboxesWrapper}
            >
              <Grid item xs={6} sm="auto">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={daily}
                      onChange={handlePeriodChange}
                      name="checkboxDaily"
                      color="primary"
                    />
                  }
                  label={
                    <Typography
                      variant="subtitle2"
                      className={classes.checkboxLabel}
                    >
                      7 Days
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={6} sm="auto">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={hourly}
                      onChange={handlePeriodChange}
                      name="checkboxHourly"
                      color="primary"
                    />
                  }
                  label={
                    <Typography
                      variant="subtitle2"
                      className={classes.checkboxLabel}
                    >
                      48 Hours
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid item md={7} className={classes.errorsWrapper}>
              {coordinatesErr || requestError ? (
                <>
                  <Typography variant="body1">{coordinatesErr}</Typography>
                  <Typography variant="body1">{requestError}</Typography>
                </>
              ) : null}
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  weatherRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  userLat: PropTypes.string.isRequired,
  userLon: PropTypes.string.isRequired,
  requestError: PropTypes.string.isRequired,
  coordinatesErr: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
  userCountry: PropTypes.string.isRequired,
  errCity: PropTypes.string.isRequired,
  errCountry: PropTypes.string.isRequired,
};

export default Header;
