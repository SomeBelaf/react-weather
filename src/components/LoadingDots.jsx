import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// анимация загрузки

const useStyles = makeStyles((theme) => ({
  root: {
    width: "13px",
    height: "13px"
  },
  dots: {
    display: "block",
    backgroundColor: "#fff",
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    background: "transparent",
    animation: `$animate 0.8s ${theme.transitions.easing.easeInOut} infinite  alternate`
  },
  firstDot: {
    animationDelay: "0.4s"
  },
  secondDot: {
    animationDelay: "0.2s"
  },
  "@keyframes animate": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
}));

function LoadingDots(props) {
  const classes = useStyles();
  let firstDot = [classes.dots, classes.firstDot].join(" ");
  let secondDot = [classes.dots, classes.secondDot].join(" ");

  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item>
        <span className={firstDot} />
      </Grid>
      <Grid item>
        <span className={secondDot} />
      </Grid>
      <Grid item>
        <span className={classes.dots} />
      </Grid>
    </Grid>
  );
}

export default LoadingDots;
