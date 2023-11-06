import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
    <div itemScope itemType="http://schema.org/SoftwareApplication">
      <Card
        className={classes.root}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >
        <CardHeader avatar={status} />
        <CardMedia
          className={classes.media}
          component="img"
          alt={altImage}
          itemProp="image"
        />
        <CardContent></CardContent>
      </Card>
      <Typography
        variant="h6"
        color="textPrimary"
        component="p"
        itemProp="name"
        style={{ marginTop: "20px", fontWeight: "bold" }}
      >
        {title}
      </Typography>

      <Typography variant="body2" color="textSecondary" itemProp="description">
        {description}
      </Typography>
    </div>
  );
};

export default ProjectCard;
