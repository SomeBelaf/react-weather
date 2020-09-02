import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { DescrContext } from "../Context";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//СТИЛИ
const useStyles = makeStyles(theme => ({
  cardList: {
    position: "absolute",
    top: "50%",
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
      flexDirection: "row",
      transform: "translateY(-50%)"
    }
  }
}));

function CardsList({ data }) {
  const classes = useStyles();

  const { handleCardDescr } = useContext(DescrContext);
  let cards = null;
  if (data) {
    cards = data.weatherData.map((item, index) => {
      return (
        <Card
          key={index}
          handleCardDescr={() => handleCardDescr(item.curentWeather)}
          tempDay={item.tempDay}
          tempNight={item.tempNight}
          humidit={item.humidity}
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
  data: PropTypes.object
};

export default CardsList;
