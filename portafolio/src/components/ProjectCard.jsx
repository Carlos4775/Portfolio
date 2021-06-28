import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "#181A1B",
    opacity: "0.7",
  },
}));

const ProjectCard = ({ projectTitle, projectDescription, projectImage }) => {
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
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" alt="Share" className={classes.avatar}>
              <IconButton aria-label="share">
                <ShareIcon style={{ color: "white" }} />
              </IconButton>
            </Avatar>
          }
        />
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
