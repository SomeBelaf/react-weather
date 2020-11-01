import React, { useEffect } from "react";
import { useUserCoordinates } from "./components/useUserCoordinates";
import { useWeatherApi } from "./components/useWeatherApi";
import HeaderCointainer from "./components/Header/HeaderContainer";
import CadsListContainer from "./components/CardList/CardListContainer";
import BackgroundContainer from "./components/Backgrond/BackgrondContainer";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

//СТИЛИ
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  const userCoordinates = useUserCoordinates();
  const { isLoading, weatherData, weatherRequest } = useWeatherApi();

  useEffect(() => {
    userCoordinates();
  }, [userCoordinates]);
  console.log("render");
  return (
    <Container maxWidth="xs" disableGutters className={classes.root}>
      <HeaderCointainer weatherRequest={weatherRequest} isLoading={isLoading} />
      {weatherData ? <CadsListContainer data={weatherData} /> : null}
      <BackgroundContainer />
    </Container>
  );
}

export default App;
