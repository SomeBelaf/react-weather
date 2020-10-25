import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  cardList: {
    position: "absolute",
    top: "65%",
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
