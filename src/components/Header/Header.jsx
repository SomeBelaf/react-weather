import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useUserCootdinatesRequest } from "../useUserCootdinatesRequest";
import { useDebounce } from "./useDebounce";
import LoadingDots from "../LoadingDots/LoadingDots";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
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
    errCountry
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
  const buttonContent = true ? (
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
        <Typography variant="h4">LOGO</Typography>
      </Grid>

      <Grid item sm={10}>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="center" className={classes.form}>
            <Grid item sm={4} md="auto" className={classes.inputWrapper}>
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
            <Grid item sm={4} md="auto" className={classes.inputWrapper}>
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
            <Grid item className={classes.submitBtnWrapper}>
              <Button variant="contained" type="submit" className={classes.submitBtn}>
                {buttonContent}
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm="auto"
              className={classes.checkBoxWrapper}
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
                  label="Daily"
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
                  label="Hourly"
                />
              </Grid>
            </Grid>
          </Grid>

          <Box className={classes.loadingErrorWrapper}>
            {coordinatesErr || requestError ? (
              <>
                <Typography className={classes.geoError} variant="subtitle2">
                  {coordinatesErr}
                </Typography>
                <Typography className={classes.fetchError} variant="subtitle2">
                  {requestError}
                </Typography>
              </>
            ) : null}
          </Box>
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
  errCountry: PropTypes.string.isRequired
};

export default Header;
