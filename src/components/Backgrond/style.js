import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  wrapper: {
    zIndex: -1,
    position: " fixed",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%"
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    minWidth: "50%",
    minHeight: "50%"
  }
}));
