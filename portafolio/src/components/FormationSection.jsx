import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import htmlicon from "../icons/integration_instructions_black_24dp.svg";
import cssicon from "../icons/style_black_24dp.svg";
import javascripticon from "../icons/smart_button_black_24dp.svg";
import wordpressicon from "../icons/web_black_24dp.svg";
import sqlicon from "../icons/dns_black_24dp.svg";
import figmaicon from "../icons/account_tree_black_24dp.svg";
import dotneticon from "../icons/application-cog.svg";
import javaicon from "../icons/application-braces.svg";
import "../figure.css";

const useStyles = makeStyles({
  titleAbilities: {
    fontSize: 24,
    padding: "10px 0px",
    color: "#000",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  titleEducation: {
    fontSize: 24,
    padding: "10px 0px",
    color: "#000",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    padding: "10px 0px",
  },
});

const FormationSection = ({ titleAbilities, text }) => {
  const classes = useStyles();
  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} my={3}>
          <Box my={3} color="#939393">
            <Typography variant="h5" gutterBottom>
              FORMATION
            </Typography>
          </Box>
          <Divider variant="fullWidth" component="div" />
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
                  <Grid item xs={12} sm={6} style={{ padding: "30px 0px" }}>
                    <Grid container direction="column">
                      <Grid item xs={12} sm={6}>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={htmlicon} alt="Html" />
                          </ListItemIcon>
                          <ListItemText primary="HTML" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={cssicon} alt="CSS" />
                          </ListItemIcon>
                          <ListItemText primary="CSS" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={javascripticon} alt="JavaScript" />
                          </ListItemIcon>
                          <ListItemText primary="JavaScript" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={dotneticon} alt="Dotnet" />
                          </ListItemIcon>
                          <ListItemText primary=".NET Framework / Core" />
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} style={{ padding: "30px 0px" }}>
                    <Grid container direction="column">
                      <Grid item>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={wordpressicon} alt="Wordpress" />
                          </ListItemIcon>
                          <ListItemText primary="WordPress" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={sqlicon} alt="SQL Server" />
                          </ListItemIcon>
                          <ListItemText primary="SQL Server" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={javaicon} alt="Java web / JSF" />
                          </ListItemIcon>
                          <ListItemText primary="Java web / JSF" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <img src={figmaicon} alt="Figma" />
                          </ListItemIcon>
                          <ListItemText primary="Web Design" />
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
                      <Box fontWeight="fontWeightBold">IT Technician</Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightLight" fontSize={18}>
                        María Inmaculada School
                      </Box>
                    </Typography>
                  </Box>
                  <Box mt={13}>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold">
                        Software Engineering
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightLight" fontSize={18}>
                        APEC University
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
