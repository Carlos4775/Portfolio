import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import onepiece from "../img/One_Piece.png";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#73CCA8",
    "&:hover": {
      backgroundColor: "#39755d",
    },
  },
}));

const ProjectsSection = () => {
  const classes = useStyles();
  const [moreProjects, setMoreProjects] = useState(false);
  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} my={3}>
          <Typography variant="h5" gutterBottom>
            <Box my={3} color="#939393">
              PROJECTS
            </Box>
            <Divider variant="fullWidth" component="div" />
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={3}
            style={{ display: "flex", justifyContent: "center " }}
          >
            <Grid item md={3}>
              <Box pt={3} pb={3}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="Torres Housell"
                  projectDescription="Ten-Golf   13 noviembre, 2020"
                  projectImage="https://image.freepik.com/vector-gratis/casa-venta_23-2147512912.jpg"
                />
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box pt={3} pb={3}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="HBO-Redesign"
                  projectDescription="Ten-Golf   13 noviembre, 2020"
                  projectImage="https://media.gettyimages.com/photos/in-this-photo-illustration-the-home-box-office-logo-is-seen-displayed-picture-id1146342175?s=612x612"
                />
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box pt={3} pb={3}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="Compras"
                  projectDescription="Ten-Golf   13 noviembre, 2020"
                  projectImage="https://st4.depositphotos.com/7239616/i/600/depositphotos_396555648-stock-photo-shopping-cart-school-supply-school.jpg"
                />
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box pt={3} pb={3}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="Lito-Multitask"
                  projectDescription="Ten-Golf   13 noviembre, 2020"
                  projectImage="https://thetodo.net/_nuxt/img/undraw_Note_list_re_r4u9.f982e8c.svg"
                />
              </Box>
            </Grid>
            <Grid item md={3}>
              <ProjectCard
                projectHead="Headline"
                projectTitle="Ruleta Bay"
                projectDescription="Ten-Golf   13 noviembre, 2020"
                projectImage="https://app-sorteos.com/img/svg/undraw_taken.svg"
              />
            </Grid>
            <Grid item md={3}>
              <ProjectCard
                projectHead="Headline"
                projectTitle="Cafeteria MARICAR"
                projectDescription="Ten-Golf   13 noviembre, 2020"
                projectImage="https://image.freepik.com/vector-gratis/ilustracion-bar-cocteles_53876-44057.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <ProjectCard
                projectHead="Headline"
                projectTitle="Cuentas por Cobrar"
                projectDescription="Ten-Golf   13 noviembre, 2020"
                projectImage="https://images2.listindiario.com/imagen/2020/09/30/637/637330/680x460/202009301254001/manejo-optimo-de-las-cuentas-por-cobrar.jpeg"
              />
            </Grid>
            <Grid item md={3}>
              <ProjectCard
                projectHead="Headline"
                projectTitle="Administrator Page"
                projectDescription="Ten-Golf   13 noviembre, 2020"
                projectImage="https://ps.w.org/customizer-login-page/assets/icon-256x256.png?rev=1910305"
              />
            </Grid>
            {moreProjects ? (
              <>
                <Grid item md={3}>
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Email notification"
                    projectDescription="Ten-Golf   13 noviembre, 2020"
                    projectImage="https://image.freepik.com/free-vector/email-notification-smartphone-hand_102902-434.jpg"
                  />
                </Grid>
                <Grid item md={3}>
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Memory game"
                    projectDescription="Ten-Golf   13 noviembre, 2020"
                    projectImage="https://images.unsplash.com/photo-1585236902765-7fd9afa67781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  />
                </Grid>
                <Grid item md={3}>
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="One Piece Trivia"
                    projectDescription="Ten-Golf   13 noviembre, 2020"
                    projectImage={onepiece}
                  />
                </Grid>
                <Grid item md={3}>
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Survey Project"
                    projectDescription="Ten-Golf   13 noviembre, 2020"
                    projectImage="https://i.pinimg.com/originals/43/a9/37/43a9375e913e66b030ecc8dfe1214fc0.jpg"
                  />
                </Grid>
              </>
            ) : (
              ""
            )}
          </Grid>
        </Box>
        <Box
          my={3}
          pt={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setMoreProjects(true)}
          >
            See more projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
