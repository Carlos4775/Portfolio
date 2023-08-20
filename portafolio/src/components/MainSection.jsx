import { Box, Button, Container, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useSpring, animated } from "react-spring";
import TypeWriterEffect from "react-typewriter-effect";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import oneLineDrawingProgrammer from "../img/single-one-line-drawing-programmer.svg";
import { School } from "@material-ui/icons";

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
        padding: "80px 0px",
      }}
    >
      <Container fixed>
        <Grid container spacing={2}>
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid
              item
              xs={12}
              md={6}
              alignContent="center"
              justifyContent="center"
              container
            >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <TypeWriterEffect
                    textStyle={{
                      fontSize: matches ? "2.3em" : "1.5em",
                      color: "#fff",
                      marginBottom: "30px",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    }}
                    startDelay={100}
                    cursorColor="#fff"
                    text="Hey, I'm Carlos Torres"
                    typeSpeed={100}
                  />
                  <div id="particles-js"></div>
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
                    I’m a software engineering student web developer who uses
                    C#, Java and JavaScript. Passionate for Open Source
                    Technology and web design.
                  </Typography>
                </Grid>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      href="#projects"
                    >
                      Projects
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      href="https://drive.google.com/file/d/1fwmqAYe9yzncbyEB-lzNob-7FkVfLxHP/view?usp=sharing"
                      target="_blank"
                    >
                      <School />
                    </Button>
                  </Grid>
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
              justifyContent="center"
              container
            >
              <Box py={3} my={3}>
                <ButtonBase
                  style={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
                    color: "white",
                    transition: "all .4s ease",
                  }}
                >
                  <animated.div style={props}>
                    <img
                      className={classes.img}
                      alt="Profile"
                      src={oneLineDrawingProgrammer}
                      style={{ zIndex: 2 }}
                      fetchpriority="high"
                      height={250}
                      width={250}
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
