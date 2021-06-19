import { Box, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useSpring, animated } from "react-spring";
import TypeWriterEffect from "react-typewriter-effect";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Particles from "react-particles-js";
import mifoto from "../img/mifoto.png";

const useStyles = makeStyles(() => ({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    height: "auto",
  },
  button: {
    backgroundColor: "#73CCA8",
    "&:hover": {
      backgroundColor: "#39755d",
    },
  },
}));

const MainSection = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      style={{
        backgroundColor: "#222733",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {matches ? <Particles style={{ position: "absolute" }}></Particles> : ""}
      <Container fixed>
        <Grid container spacing={2}>
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid
              item
              xs={12}
              md={6}
              alignContent="center"
              justify="center"
              container
            >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="h4"
                    style={{ color: "#fff", marginBottom: "35px" }}
                  >
                    <TypeWriterEffect
                      textStyle={{
                        fontSize: matches ? "1em" : "0.6em",
                      }}
                      startDelay={100}
                      cursorColor="#fff"
                      text="Hey, I'm Carlos Torres"
                      typeSpeed={100}
                    />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ color: "#fff", marginBottom: "20px" }}
                  >
                    Welcome to my portfolio
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    color="textSecondary"
                    style={{
                      color: "#fff",
                      fontWeight: 100,
                      marginBottom: "40px",
                    }}
                  >
                    I’m a software engineering student web developer - C# -
                    Javascript - Java Passionate for Open Source Technology and
                    javascript
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Projects
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, md: 2 }}>
            <Grid
              item
              xs={12}
              md={6}
              alignContent="center"
              justify="center"
              container
            >
              <Box py={3} my={3}>
                <ButtonBase
                  style={{
                    position: "relative",
                    width: "100%",
                    background: "white",
                    borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
                    color: "white",
                    boxShadow: "0px -29px 0px 13px #7380A3",
                    transition: "all .4s ease",
                  }}
                >
                  <animated.div style={props}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={mifoto}
                      style={{ zIndex: 2 }}
                    />
                  </animated.div>
                </ButtonBase>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default MainSection;
