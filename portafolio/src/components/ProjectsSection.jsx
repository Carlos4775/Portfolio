import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import onepiece from "../img/One_Piece.png";
import progress from "../icons/workprogress.svg";

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
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://compras-aca62.web.app"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Sistema de Compras"
                    projectDescription="ASP.NET Core, ReactJS"
                    projectImage="https://static.vecteezy.com/system/resources/thumbnails/001/624/159/original/online-shopping-animation-free-video.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://bsite.net/carlos4775/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Cuentas por Cobrar"
                    projectDescription="ASP.NET Framework MVC"
                    projectImage="https://images2.listindiario.com/imagen/2020/09/30/637/637330/680x460/202009301254001/manejo-optimo-de-las-cuentas-por-cobrar.jpeg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://admin-page-ae63f.web.app/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Administrator Page"
                    projectDescription="ReactJS, Twin macro, SC"
                    projectImage="https://ps.w.org/customizer-login-page/assets/icon-256x256.png?rev=1910305"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://addresses-e3ee7.web.app/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Cliente domicilio"
                    projectDescription="ReactJS, JSON Server"
                    projectImage="https://images.indianexpress.com/2018/08/how-to-download-google-maps-areas-offline.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                py={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="HBO-Redesign"
                  projectDescription="ASP.NET Core, ReactJS, JWT"
                  projectImage="https://media.gettyimages.com/photos/in-this-photo-illustration-the-home-box-office-logo-is-seen-displayed-picture-id1146342175?s=612x612"
                  projectStatus={
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        backgroundColor: "#ffffff",
                        borderRadius: "50%",
                        padding: "3px",
                      }}
                    >
                      <img src={progress} />
                    </div>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box py={3} style={{ display: "flex", justifyContent: "center" }}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="Lito-Multitask"
                  projectDescription="NODE JS, React JS, MongoDB"
                  projectImage="https://thetodo.net/_nuxt/img/undraw_Note_list_re_r4u9.f982e8c.svg"
                  projectStatus={
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        backgroundColor: "#ffffff",
                        borderRadius: "50%",
                        padding: "3px",
                      }}
                    >
                      <img src={progress} />
                    </div>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://postalvida.wordpress.com/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Blog de autoyuda"
                    projectDescription="Wordpress"
                    projectImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1159404116.jpg?resize=480:*"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box py={3} style={{ display: "flex", justifyContent: "center" }}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="Ruleta Bay"
                  projectDescription="React Native, Firebase Cloud"
                  projectImage="https://app-sorteos.com/img/svg/undraw_taken.svg"
                  projectStatus={
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        backgroundColor: "#ffffff",
                        borderRadius: "50%",
                        padding: "3px",
                      }}
                    >
                      <img src={progress} />
                    </div>
                  }
                />
              </Box>
            </Grid>
            {/*<Grid item xs={12} sm={6} md={4} lg={3}>
              <Box py={3} style={{ display: "flex", justifyContent: "center" }}>
                <ProjectCard
                  projectHead="Headline"
                  projectTitle="Caja UNAPEC"
                  projectDescription="Ten-Golf   13 noviembre, 2020"
                  projectImage="https://images.unsplash.com/photo-1607609972246-a14762f20d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                />
              </Box>
            </Grid>
            {moreProjects ? (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box
                    py={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ProjectCard
                      projectHead="Headline"
                      projectTitle="Email notification"
                      projectDescription="Ten-Golf   13 noviembre, 2020"
                      projectImage="https://image.freepik.com/free-vector/email-notification-smartphone-hand_102902-434.jpg"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box
                    py={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ProjectCard
                      projectHead="Headline"
                      projectTitle="Memory game"
                      projectDescription="Ten-Golf   13 noviembre, 2020"
                      projectImage="https://images.unsplash.com/photo-1585236902765-7fd9afa67781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box
                    py={3}
                    style={{ display: "flex", justifyContent: "center " }}
                  >
                    <ProjectCard
                      projectHead="Headline"
                      projectTitle="One Piece Trivia"
                      projectDescription="Ten-Golf   13 noviembre, 2020"
                      projectImage={onepiece}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box
                    py={3}
                    style={{ display: "flex", justifyContent: "center " }}
                  >
                    <ProjectCard
                      projectHead="Headline"
                      projectTitle="Survey Project"
                      projectDescription="Ten-Golf   13 noviembre, 2020"
                      projectImage="https://i.pinimg.com/originals/43/a9/37/43a9375e913e66b030ecc8dfe1214fc0.jpg"
                    />
                  </Box>
                </Grid>
              </>
            ) : (
              ""
            )}*/}
          </Grid>
        </Box>
        {/* <Box
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
        </Box>*/}
      </Container>
    </Box>
  );
};

export default ProjectsSection;
