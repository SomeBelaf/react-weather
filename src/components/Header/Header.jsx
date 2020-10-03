import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDebounce } from "./useDebounce";
import LoadingDots from "../LoadingDots";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FilterDramaTwoToneIcon from "@material-ui/icons/FilterDramaTwoTone";
import { makeStyles } from "@material-ui/core/styles";

//СТИЛИ

const useStyles = makeStyles((theme) => ({
  header: {
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  },
  logoWrapper: {
    marginBottom: theme.spacing(2),
  },
  form: {
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      flexDirection: "row",
    },
  },
  loadingErrorWrapper: {
    marginTop: theme.spacing(2),
  },
  geoError: {
    color: theme.palette.warning.light,
  },
  fetchError: {
    color: theme.palette.error.light,
  },
  successButton: {
    color: theme.palette.success.main,
  },
}));

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
    useUserCootdinatesRequest,
  } = props;

  const classes = useStyles();

  const makeRequest = useUserCootdinatesRequest();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const debounceCity = useDebounce(city, 2000);
  const debounceCountry = useDebounce(country, 2000);

  useEffect(() => {
    if (debounceCity && debounceCountry)
      makeRequest(debounceCity, debounceCountry);
  }, [debounceCity, debounceCountry, makeRequest]);

  // запрос на сервер
  const handleSubmit = (e) => {
    e.preventDefault();
    weatherRequest(userLat, userLon);
  };

  return (
    <Grid container justify="flex-start" className={classes.header}>
      <Grid
        item
        container
        xs={6}
        sm={2}
        lg={1}
        direction="column"
        alignItems="center"
        className={classes.logoWrapper}
      >
        <FilterDramaTwoToneIcon style={{ fontSize: "4.1875rem" }} />
        <Typography variant="h4">LOGO</Typography>
      </Grid>

      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="center" className={classes.form} spacing={3}>
            <Grid item>
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
                helperText={userCity || ''}
              />
            </Grid>
            <Grid item>
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
                helperText={userCountry || ''}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                className={userLat && userLon ? classes.successButton : ""}
              >
                Get weather
              </Button>
            </Grid>
          </Grid>
          <Box className={classes.loadingErrorWrapper}>
            {isLoading ? (
              <Grid container alignItems="baseline" spacing={1}>
                <Grid item>
                  <Typography align="left">Loading</Typography>
                </Grid>
                <Grid item>
                  <LoadingDots />
                </Grid>
              </Grid>
            ) : null}
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
  errCountry: PropTypes.string.isRequired,
};

export default Header;
