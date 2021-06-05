import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 24,
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "center",
    color: "#000",
  },
  subtitle: {
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
  },
  icon: {
    height: "80px",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default function SimpleCard({ title, icon, subtitle, text }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{
        borderTop: "9px solid #73CCA8",
        borderRadius: "6px",
        backgroundColor: "#F6F6F6",
        minHeight: "350px",
      }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <div className={classes.icon}>{icon}</div>
        <Typography className={classes.subtitle} color="textSecondary">
          {subtitle}
        </Typography>
        <Typography variant="body2" component="p" className={classes.text}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
