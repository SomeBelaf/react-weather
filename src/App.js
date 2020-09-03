import React from "react";
import GeolocationApi from "./components/GeolocationApi";
import WeatherApi from "./components/WeatherApi";
import Header from "./components/Header/Header";
import CadsList from "./components/CardList/CardsList";
import { DescrProvider } from "./components/Context";
import Background from "./components/Background";

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

  const { setUserCityAndCountry, geoError } = GeolocationApi();
  const {
    fetchError,
    isLoading,
    weatherData,
    getDataFromLocStorage
  } = WeatherApi();
  
  return (
    <Container maxWidth="xl" disableGutters className={classes.root}>
      <Header
        weatherRequest={getDataFromLocStorage}
        setUserCityAndCountry={setUserCityAndCountry}
        fetchError={fetchError}
        geoError={geoError}
        isLoading={isLoading}
      />
      <DescrProvider>
        <CadsList data={weatherData} />
        <Background />
      </DescrProvider>
    </Container>
  );
}

export default App;
