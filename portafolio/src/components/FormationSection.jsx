import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import htmlicon from "../icons/integration_instructions_black_24dp.svg";
import cssicon from "../icons/style_black_24dp.svg";
import javascripticon from "../icons/smart_button_black_24dp.svg";
import reactjsicon from "../icons/wysiwyg_black_24dp.svg";
import wordpressicon from "../icons/web_black_24dp.svg";
import sqlicon from "../icons/dns_black_24dp.svg";
import bemicon from "../icons/text_format_black_24dp.svg";
import figmaicon from "../icons/account_tree_black_24dp.svg";
import "../figure.css";

const useStyles = makeStyles({
  titleAbilities: {
    fontSize: 24,
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#000",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  titleEducation: {
    fontSize: 24,
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#000",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
});

const FormationSection = ({ titleAbilities, titleEducation, text, list }) => {
  const classes = useStyles();
  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} my={3}>
          <Typography variant="h5" gutterBottom>
            <Box my={3} color="#939393">
              FORMATION
            </Box>
            <Divider variant="fullWidth" component="div" />
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography
                color="textSecondary"
                gutterBottom
                className={classes.titleAbilities}
              >
                {titleAbilities}
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                className={classes.text}
              >
                {text}
              </Typography>
              <List component="nav">
                <Grid container direction="row">
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ paddingTop: "30px", paddingBottom: "30px" }}
                  >
                    <Grid container direction="column">
                      <Grid item xs={12} sm={6}>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={htmlicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="HTML" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={cssicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="CSS" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={javascripticon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="JavaScript" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={reactjsicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="ReactJS" />
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ paddingTop: "30px", paddingBottom: "30px" }}
                  >
                    <Grid container direction="column">
                      <Grid item>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={wordpressicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="WordPress" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={sqlicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="SQL Server" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={bemicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="BEM" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={figmaicon} alt="" />
                          </ListItemIcon>
                          <ListItemText primary="Figma Prototype" />
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                color="textSecondary"
                gutterBottom
                className={classes.titleEducation}
              >
                Education
              </Typography>
              <Grid container spacing={3}>
                <Grid xs={4} item className="figure">
                  <Box my={4}>
                    <div className="ribbon"></div>
                  </Box>
                </Grid>
                <Grid xs={8} item>
                  <Box mt={3}>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold">
                        Técnico en informática
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightLight" fontSize={18}>
                        Colegio María Inmaculada
                      </Box>
                    </Typography>
                  </Box>
                  <Box mt={13}>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold">
                        Ingeniería de software
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightLight" fontSize={18}>
                        Universidad APEC
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FormationSection;
