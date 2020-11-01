import { makeStyles } from "@material-ui/core/styles";
//СТИЛИ
export const style = makeStyles((theme) => ({
  container:{
    alignSelf: "center"
  },
  flexOne: {
    flex: 1,
  },
  icon: {
    maxWidth: "150px",
  },
  weatherInfo: {
    position: "relative",
    marginRight: "11px",
    "&:after": {
      content: '"|"',
      position: "absolute",
      fontSize: theme.typography.subtitle1.fontSize,
      right: "-8px",
    },
  },
  temp: {
    marginBottom: theme.spacing(1),
  },
}));
