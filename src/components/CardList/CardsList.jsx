import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import { style } from "./style";

function CardsList(props) {
  const classes = style();

  const { data, setCardDescription } = props;

  let cards = null;
  if (data) {
    cards = data.weatherData.map((item, index) => {
      return (
        <Card
          key={index}
          type={item.type}
          hours={item.hours}
          handleCardDescr={() => setCardDescription(item.curentWeather)}
          tempDay={item.tempDay}
          tempNight={item.tempNight}
          humidity={item.humidity}
          windSpeed={item.windSpeed}
          weatherDesc={item.curentWeather}
          day={item.day}
          icon={item.icon}
        />
      );
    });
  }

  return (
    <Grid
      item
      container
      xs={12}
      alignItems="center"
      wrap="nowrap"
      className={classes.cardList}
    >
      {cards}
    </Grid>
  );
}

CardsList.propTypes = {
  data: PropTypes.object,
  setCardDescription: PropTypes.func
};

export default CardsList;
