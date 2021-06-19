import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectHead,
  projectImage,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card
        className={classes.root}
        style={{
          background: "#000",
          backgroundImage: `url(${projectImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
        <CardMedia className={classes.media} image="/" title="Paella dish" />
        <CardContent>
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            style={{
              fontWeight: "bold",
              color: "#fff",
              textShadow: "2px 2px 3px #000",
            }}
          >
            {projectHead}
          </Typography>
        </CardContent>
      </Card>

      <Typography
        variant="h6"
        color="textSecondary"
        component="p"
        style={{ marginTop: "20px" }}
      >
        <Box fontWeight="fontWeightBold" style={{ color: "#000" }}>
          {projectTitle}
        </Box>
      </Typography>
      <Typography variant="p" color="textSecondary" component="p">
        {projectDescription}
      </Typography>
    </div>
  );
};

export default ProjectCard;
