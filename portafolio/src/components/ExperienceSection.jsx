import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import "../figure.css";
import { experiences } from "../data/data.js";

const ExperienceSection = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const customChipStyle = {
    backgroundColor: "#FFFFFF",
    color: "#73CCA8",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const customHrStyle = {
    margin: "0px",
    height: "3px",
    backgroundColor: "#73CCA8",
    border: "none",
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
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
            <Typography variant="h5" component="h5" gutterBottom>
              EXPERIENCE
            </Typography>
          </Box>
          <Divider variant="fullWidth" component="div" />
        </Box>
        <Box>
          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={3}>
                  {!isMobileView ? (
                    <>
                      <Grid xs={2} item style={{ padding: "0 10px" }}>
                        <Box
                          height="100%"
                          borderLeft={index < experiences.length - 1 ? 10 : 0}
                          borderColor="#73CCA8"
                          mt={1}
                        >
                          <div className="ribbon">
                            <hr style={customHrStyle} />
                          </div>
                        </Box>
                      </Grid>
                      <Grid xs={2} item style={{ padding: "0 10px" }}>
                        <Box fontWeight="fontWeightLight" fontSize={16}>
                          {exp.yearFrom} - {exp.yearTo}
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}

                  <Grid
                    xs={isMobileView ? 12 : 8}
                    item
                    style={{ padding: "0 10px" }}
                  >
                    <Box fontWeight="fontWeightBold" fontSize={20}>
                      {exp.position}
                    </Box>
                    <Box fontWeight="fontWeightRegular" fontSize={16}>
                      {exp.companyName}
                    </Box>
                    <Box>
                      <ul>
                        {exp.roles.map((role, index) => (
                          <li key={index} style={{ marginBottom: 20 }}>
                            {role}
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Grid
                      container
                      spacing={1}
                      style={{ marginBottom: "40px" }}
                    >
                      {exp.tecnologies.map((tecnology, index) => (
                        <Grid item key={index}>
                          <Box mt={2}>
                            <Chip
                              label={tecnology}
                              key={index}
                              style={customChipStyle}
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
