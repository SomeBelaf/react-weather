import { makeStyles } from "@material-ui/core/styles";

// анимация загрузки

export const style = makeStyles((theme) => ({
  wrapper: {
    marginLeft: "10px",
    marginTop: "5px",
    display: "inline-flex",
  },
  dots: {
    display: "block",
    margin: "0 1px",
    backgroundColor: theme.palette.background.paper,
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "transparent",
    animation: `$animate 0.8s ${theme.transitions.easing.easeInOut} infinite  alternate`,
  },
  firstDot: {
    animationDelay: "0.4s",
  },
  secondDot: {
    animationDelay: "0.2s",
  },
  "@keyframes animate": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));
