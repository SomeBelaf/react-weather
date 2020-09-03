import React from "react";
import PropTypes from "prop-types";
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
}));

function Header(props) {
  const classes = useStyles();
  // запрос на сервер
  const handleSubmit = (e) => {
    e.preventDefault();
    props.weatherRequest();
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
          <Grid container className={classes.form} spacing={2}>
            <Grid item>
              <TextField
                label="City"
                id="city"
                defaultValue=""
                size="small"
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item>
              <TextField
                label="Country"
                id="country"
                defaultValue=""
                size="small"
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                Get weather
              </Button>
            </Grid>
          </Grid>
          <Box className={classes.loadingErrorWrapper}>
            {props.isLoading ? (
              <Grid container alignItems="baseline" spacing={1}>
                <Grid item>
                  <Typography align="left">Loading</Typography>
                </Grid>
                <Grid item>
                  <LoadingDots />
                </Grid>
              </Grid>
            ) : null}
            {props.geoError !== "" || props.fetchError !== "" ? (
              <>
                <Typography className={classes.geoError}>
                  {props.geoError}
                </Typography>
                <Typography className={classes.fetchError}>
                  {props.fetchError}
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
  fetchError: PropTypes.string.isRequired,
  geoError: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Header;
