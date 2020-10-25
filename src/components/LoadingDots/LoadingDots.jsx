import React from "react";
import Box from "@material-ui/core/Box";
import { style } from "./style";

function LoadingDots(props) {
  const classes = style();
  let firstDot = [classes.dots, classes.firstDot].join(" ");
  let secondDot = [classes.dots, classes.secondDot].join(" ");

  return (
    <Box className={classes.wrapper}>
        <span className={firstDot} />
        <span className={secondDot} />
        <span className={classes.dots} />
    </Box>
  );
}

export default LoadingDots;
