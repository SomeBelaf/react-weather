import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "280px"
  },
  canvas: {
    position: "absolute",
  },
  clouds: {
    width: "100%",
    height: "180px",
  },
  cloud_light: {
    fill: "#dbdbdb", //efefef
  },
  cloud_dark: {
    fill: "#c9c9c9", //E6E6E6
  },
  cloud_darker: {
    fill: "#b8b8ba", //D5D5D5
  },
  cloud_darkest: {
    fill: "#b0b0b0",
  },
  canvasWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    width: "100%",
    height: "100%",
    backgroundColor: "#222",
    
  },
}));