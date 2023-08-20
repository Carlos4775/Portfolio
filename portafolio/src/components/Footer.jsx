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
import linkedinicon from "../icons/iconmonstr-linkedin-3.svg";
import githubicon from "../icons/iconmonstr-github-1.svg";

const useStyles = makeStyles(() => ({
  custom: {
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#73CCA8",
    "&:hover": {
      backgroundColor: "#39755d",
    },
  },
  list: {
    color: "#ffffff",
    "@media screen and (max-width: 768px)": {
      fontSize: "15px",
    },
  },
  footer: {
    backgroundColor: "#2E3445",
    position: "relative",
    bottom: "0px",
    width: "100%",
    minHeight: "10vh",
    paddingBottom: "10px",
  },
  copyright: {
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",
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
      id="contact"
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
                  href="mailto:carlos.torres.graciano@outlook.com"
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
                <a
                  href="https://www.instagram.com/carlost_06/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <img
                        src={instagramicon}
                        alt="instagram"
                        height={24}
                        width={24}
                      />
                    </ListItemIcon>
                    <ListItemText primary="carlost_06" />
                  </ListItem>
                </a>
                <a
                  href="mailto:carlos.torres.graciano@outlook.com"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <img src={emailicon} alt="email" height={24} width={24} />
                    </ListItemIcon>
                    <p style={{ display: "inline-block" }}>
                      carlos.torres.graciano
                      <br />
                      @outlook.com
                    </p>
                  </ListItem>
                </a>
                <a
                  href="https://www.linkedin.com/in/carlosmtorresg/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <img
                        src={linkedinicon}
                        alt="linkedin"
                        height={24}
                        width={24}
                      />
                    </ListItemIcon>
                    <ListItemText primary="carlosmtorresg" />
                  </ListItem>
                </a>
                <a
                  href="https://github.com/Carlos4775"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <img
                        src={githubicon}
                        alt="github"
                        height={24}
                        width={24}
                      />
                    </ListItemIcon>
                    <ListItemText primary="@Carlos4775" />
                  </ListItem>
                </a>
              </List>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footer}>
        <span className={classes.copyright}>
          2021 Carlos Torres. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
