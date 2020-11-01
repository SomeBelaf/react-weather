import { createMuiTheme } from "@material-ui/core/styles";
// изменённые стили
const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: "#c0c0c0",
      main: "#dedede",
      dark: "#c0c0c0",
    },
    info: {
      light: "#d1d1d1",
      main: "#bdbdbd",
      dark: "#a9a9a9",
    },
    error: {
      light: "#ff6f6f",
      main: "#ff4848",
      dark: "#ff2121",
    },
    success: {
      light: "#41af66",
      main: "#379356",
      dark: "#2c7645",
    },
    warning: {
      main: "#ff7315", //  ffb03b
    },
    background: {
      paper: "#52524e",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
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
            background: "transparent",
          },
        },
        body: {
          backgroundColor: "#52524e",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "4px",
        position: "relative",
      },
      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px #242424 inset",
        },
      },
      notchedOutline: {
        borderWidth: "2px",
        borderColor: "#d4d6c8",
      },
    },
    MuiButtonBase: {
      input: {
        fontWeight: 600,
      },
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        top: "36px",
        left: 0,
        fontSize: "14px",
        color: "#52524e",
        fontWeight: "600",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: "8px",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 0,
      },
      elevation1: {
        boxShadow: "none",
      },
    },
    MuiCard: {
      root: {
        background: "transparent",
      },
    },
  },
});

export default theme;
