import { makeStyles } from "@material-ui/core/styles";

//СТИЛИ

export const style = makeStyles((theme) => ({
  header: {
    flexDirection: "column",
    alignItems: "center",
    // background: "rgba(36, 36, 36, 0.7)",
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  logoWrapper: {
    marginBottom: theme.spacing(2),
  },
  form: {
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      flexDirection: "row",
    },
  },
  checkboxesWrapper: {
    width: "218px",
    [theme.breakpoints.up("sm")]: {
      width: "initial",
    },
  },
  inputsContainer: {
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  checkboxLabel: {
    fontSize: "0.8rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
  errorsWrapper: {
    textAlign: "center",
    order: 5,
    [theme.breakpoints.up("sm")]: {
      textAlign: "initial",
      order: "initial",
    },
  },
  submitBtn: {
    background: theme.palette.primary.main,
  },
}));
