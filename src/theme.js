import { createMuiTheme } from "@material-ui/core/styles";
// изменённые стили
const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  palette: {
    type: "dark",
    primary: {
      light: "#f2f3f4",
      main: "#dcdfe3",
      dark: "#c6cbd2"
    },
    info: {
      light: "#d6d6d6",
      main: "#c2c2c2",
      dark: "#aeaeae"
    },
    error: {
      light: "#eb143f",
      main: "#ff0033",
      dark: "#d8002b"
    },
    success: {
      light: "#41af66",
      main: "#379356",
      dark: "#2c7645"
    },
    warning: {
      main: "#ffb03b"
    },
    background: {
      paper: "#242424"
    }
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
    },
    MuiOutlinedInput: {
      root: {
        background: "#242424",
        borderRadius: "4px"
      },
      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px #242424 inset"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "14px"
      }
    }
  }
});

export default theme;
