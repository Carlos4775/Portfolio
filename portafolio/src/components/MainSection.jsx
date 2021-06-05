import { Box, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

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
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#222733",
        paddingTop: "100px",
        paddingBottom: "100px",
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
                    Hey, I'm Carlos Torres
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
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg"
                    style={{ zIndex: 2 }}
                  />
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
