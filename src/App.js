import React ,{useEffect} from "react";
import { useUserCoordinates, useUserCootdinatesRequest } from "./components/useUserCoordinates";
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
    height: "100vh"
  }
}));

function App() {
  const classes = useStyles();

  const userCoordinates = useUserCoordinates();
  const { isLoading, weatherData, weatherRequest } = useWeatherApi();

  useEffect(()=>{
    userCoordinates()
  })
  console.log("render");
  return (
    <Container maxWidth="xl" disableGutters className={classes.root}>
      <HeaderCointainer
        useUserCootdinatesRequest={useUserCootdinatesRequest}
        weatherRequest={weatherRequest}
        isLoading={isLoading}
      />
      <CadsListContainer data={weatherData} />
      <BackgroundContainer />
    </Container>
  );
}

export default App;
