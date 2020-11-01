import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  cardList: {
    background: "rgba(36, 36, 36, 0.7)",
    position: "absolute",
    top: "65%",
    left: 0,
    [theme.breakpoints.up("sm")]: {
      top: "initial",
      bottom: 0,
    },
  },
  cardListTrack: {
    overflowX: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    "&::-webkit-scrollbar ": {
      height: "10px",
    },
    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    /* Handle on hover */
    " &::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
      justifyContent: "initial"

    },
  },
}));
