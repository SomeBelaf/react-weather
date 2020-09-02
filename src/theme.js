import { createMuiTheme } from "@material-ui/core/styles";
// изменённые стили
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#dcdfe3"
    },
    info: {
      main: "#c2c2c2",
    },
    background:{
      paper: '#242424'
    },
  },
  // убрать скролл по горизонтали
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          overflow: "scroll",
          overflowX: "hidden",
          "& ::-webkit-scrollbar": {
            width: "0px",
            background: "transparent"
          }
        }
      }
    }
  }
});

export default theme;
