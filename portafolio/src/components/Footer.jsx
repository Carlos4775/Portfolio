import {
  ListItem,
  Button,
  Container,
  Grid,
  List,
  ListItemIcon,
  Typography,
  ListItemText,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import instagramicon from "../icons/iconmonstr-instagram-11.svg";
import emailicon from "../icons/email_black_24dp.svg";
import twittericon from "../icons/iconmonstr-twitter-1.svg";
import githubicon from "../icons/iconmonstr-github-1.svg";

const useStyles = makeStyles(() => ({
  custom: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#73CCA8",
    "&:hover": {
      backgroundColor: "#39755d",
    },
  },
  list: {
    color: "#fff",
    "@media screen and (max-width: 768px)": {
      fontSize: "15px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingTop: "50px",
        backgroundColor: "#222733",
        display: "flex",
        flexDirection: "column",
        marginTop: "60px",
        position: "relative",
      }}
    >
      <div style={{ paddingBottom: "50px" }}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box py={2}>
                <Typography variant="h5" className={classes.custom}>
                  Let's Work Together
                </Typography>
              </Box>
              <div>
                <Typography variant="subtitle1" className={classes.custom}>
                  Have a project you’d like to discuss?
                </Typography>
              </div>
              <Box py={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Get in Touch
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List
                component="nav"
                aria-label="main mailbox folders"
                className={classes.list}
              >
                <ListItem button>
                  <ListItemIcon>
                    <img src={instagramicon} alt="instagram" />
                  </ListItemIcon>
                  <ListItemText primary="carlost_06" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <img src={emailicon} alt="email" />
                  </ListItemIcon>
                  <p style={{ display: "inline-block" }}>
                    carlos.torres.graciano
                    <br />
                    @outlook.com
                  </p>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <img src={twittericon} alt="twitter" />
                  </ListItemIcon>
                  <ListItemText primary="@Carlos4775" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <img src={githubicon} alt="github" />
                  </ListItemIcon>
                  <ListItemText primary="@Carlos4775" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#2E3445",
          position: "relative",
          bottom: "0px",
          width: "100%",
          minHeight: "10vh",
        }}
      >
        <span
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          2021 Carlos Torres. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
