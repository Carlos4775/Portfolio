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

const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectImage,
  projectStatus,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card
        className={classes.root}
        style={{
          backgroundImage: `url(${projectImage})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >
        <CardHeader avatar={projectStatus} />
        <CardMedia className={classes.media} />
        <CardContent></CardContent>
      </Card>
      <Typography
        variant="h6"
        color="textPrimary"
        component="p"
        style={{ marginTop: "20px", fontWeight: "bold" }}
      >
        {projectTitle}
      </Typography>

      <Typography variant="body2" color="textSecondary">
        {projectDescription}
      </Typography>
    </div>
  );
};

export default ProjectCard;
