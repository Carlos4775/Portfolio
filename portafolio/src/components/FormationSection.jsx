import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import "../figure.css";
import { abilities, academicHistory } from "../data/data.js";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  titleAbilities: {
    fontSize: 24,
    padding: "10px 0px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    color: "#000000",
  },
  titleEducation: {
    fontSize: 24,
    padding: "10px 0px",
    color: "#000000",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    padding: "10px 0px",
  },
  boldText: {
    fontWeight: "bold",
  },
});

const customHrStyle = {
  margin: "0px",
  height: "3px",
  backgroundColor: "#73cca8",
  border: "none",
};

const FormationSection = ({ titleAbilities, text }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setIsMobileView(true)
        : setIsMobileView(false);
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} mb={3}>
          <Box mb={3} color="#939393">
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
                <Grid container direction="column">
                  {!isMobileView
                    ? Array.from({
                        length: Math.ceil(abilities.length / 2),
                      }).map((_, rowIndex) => (
                        <Grid container item key={rowIndex} xs={12} spacing={1}>
                          {abilities
                            .slice(rowIndex * 2, rowIndex * 2 + 2)
                            .map((ability, colIndex) => (
                              <Grid item xs={6} key={colIndex}>
                                <ListItem>
                                  <ListItemIcon>
                                    <img
                                      src={ability.icon}
                                      alt={ability.iconAltText}
                                      height={24}
                                      width={24}
                                    />
                                  </ListItemIcon>
                                  <ListItemText primary={ability.ability} />
                                </ListItem>
                              </Grid>
                            ))}
                        </Grid>
                      ))
                    : abilities.map((ability, colIndex) => (
                        <Grid item xs={6} key={colIndex}>
                          <ListItem>
                            <ListItemIcon>
                              <img
                                src={ability.icon}
                                alt={ability.iconAltText}
                                height={24}
                                width={24}
                              />
                            </ListItemIcon>
                            <ListItemText primary={ability.ability} />
                          </ListItem>
                        </Grid>
                      ))}
                </Grid>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mb={3}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  className={classes.titleEducation}
                >
                  Education
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {academicHistory.map((education, index) => (
                  <React.Fragment key={index}>
                    <Grid xs={12} sm={8} item style={{ padding: "0 30px" }}>
                      <Box mb={isMobileView ? 3 : 0}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          className={classes.boldText}
                          align={isMobileView ? "left" : "right"}
                        >
                          {education.academicDegree}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          align={isMobileView ? "left" : "right"}
                        >
                          {education.institute}
                        </Typography>
                      </Box>
                    </Grid>
                    {!isMobileView ? (
                      <Grid xs={4} item style={{ padding: "0 10px" }}>
                        <Box
                          height="100%"
                          borderRight={
                            index < academicHistory.length - 1 ? 10 : 0
                          }
                          borderColor="#73cca8 !important"
                          mt={1}
                        >
                          <div
                            className="ribbon2"
                            style={{ borderColor: "#73cca8" }}
                          >
                            <hr style={customHrStyle} />
                          </div>
                        </Box>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FormationSection;
