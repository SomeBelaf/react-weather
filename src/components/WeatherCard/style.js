import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      minWidth: "170px",
    },
  },
  card: {
    "&:hover": {
      background: "rgba(36, 36, 36, 0.2)",
      transition: "cubic-bezier(0.4, 0, 1, 1) 500ms",
    },
  },
  flexOne: {
    flex: 1,
  },
  icon: {
    width: "150px",
  },
  temp: {
    marginBottom: theme.spacing(1),
  },
  day: {
    padding: "8px 0",
    borderRadius: "10em",
    textAlign: "center",
    background: "rgba(36, 36, 36, 0.5)",
  },
}));
