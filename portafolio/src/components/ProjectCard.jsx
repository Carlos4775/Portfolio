import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const ProjectCard = ({ title, description, image, altImage, status }) => {
  const classes = useStyles();

  return (
    <div>
      <Card
        className={classes.root}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >
        <CardHeader avatar={status} />
        <CardMedia className={classes.media} component="img" alt={altImage} />
        <CardContent></CardContent>
      </Card>
      <Typography
        variant="h6"
        color="textPrimary"
        component="p"
        style={{ marginTop: "20px", fontWeight: "bold" }}
      >
        {title}
      </Typography>

      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </div>
  );
};

export default ProjectCard;
