import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  container: {
    minWidth: "350px",
    padding: theme.spacing(2)
  },
  flexOne: {
    flex: 1
  },
  comtainer: {
    dislpay: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  temp: {
    marginBottom: theme.spacing(1)
  }
}));
