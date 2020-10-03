import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//СТИЛИ
const useStyles = makeStyles((theme) => ({
  cardList: {
    position: "absolute",
    top: "60%",
    overflowX: "auto",
    background: "transparent",
    flexDirection: "column",

    "&::-webkit-scrollbar ": {
      height: "10px"
    },
    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#888"
    },
    /* Handle on hover */
    " &::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    },
    [theme.breakpoints.up("sm")]: {
      top: "53%",
      flexDirection: "row",
      transform: "translateY(-50%)"
    }
  }
}));

function CardsList(props) {
  const classes = useStyles();

  const {data, setCardDescription} = props;
  let cards = null;
  if (data) {
    cards = data.weatherData.map((item, index) => {
      return (
        <Card
          key={index}
          handleCardDescr={() => setCardDescription(item.curentWeather)}
          tempDay={item.tempDay}
          tempNight={item.tempNight}
          humidity={item.humidity}
          windSpeed={item.windSpeed}
          cloud={item.cloud}
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
