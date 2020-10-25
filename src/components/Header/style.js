import { makeStyles } from "@material-ui/core/styles";

//СТИЛИ

export const style = makeStyles((theme) => ({
  header: {
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(36, 36, 36, 0.7)",
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
  loadingErrorWrapper: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  geoError: {
    color: theme.palette.warning.light,
  },
  fetchError: {
    color: theme.palette.error.light,
  },
  inputWrapper: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  checkBoxWrapper: {
    padding: theme.spacing(1),
    order: 3,
    [theme.breakpoints.up("sm")]: {
      order: "unset",
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  submitBtnWrapper: {
    order: 4,
    padding: "8px 0 16px 0",
    [theme.breakpoints.up("sm")]: {
      order: "unset",
    },
  },
  submitBtn: {
    background: theme.palette.primary.dark,
  },
}));
