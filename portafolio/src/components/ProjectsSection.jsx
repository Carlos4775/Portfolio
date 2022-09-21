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
                    projectTitle="Shopping system"
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
                    projectTitle="Accounts receivable"
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
                    projectTitle="Administrator page"
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
                    projectTitle="Home customer"
                    projectDescription="ReactJS, JSON Server"
                    projectImage="https://images.indianexpress.com/2018/08/how-to-download-google-maps-areas-offline.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://hbo-redesign.web.app/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="HBO redesign"
                    projectDescription="ASP.NET Core, ReactJS, JWT"
                    projectImage="https://larepublica.pe/resizer/QiEGSkOo5LjiEulnOGDlP3WVQN0=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/RIQSOZF3CRDOXJ4VGZ7HHY57ZY.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            {/*<Grid item xs={12} sm={6} md={4} lg={3}>
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
                </Grid>*/}
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
                    projectTitle="Self help blog"
                    projectDescription="Wordpress"
                    projectImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1159404116.jpg?resize=480:*"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://github.com/Carlos4775/caja-unapec"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Caja UNAPEC"
                    projectDescription=".NET Framework"
                    projectImage="https://unapec.edu.do/media/1521/img-startups-2.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://github.com/Carlos4775/servicio-crud-java"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="CRUD as a service"
                    projectDescription="Java Web"
                    projectImage="https://www.educative.io/v2api/editorpage/6598730818519040/image/6322773582938112"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://github.com/Carlos4775/mi-banco-presta"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="Mibanco Presta"
                    projectDescription="Java Web"
                    projectImage="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_45/3090011/191107-money-savings-stock-ew-800p.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://github.com/Carlos4775/lectura-xml-java"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="XML Reading"
                    projectDescription="Java web"
                    projectImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/XML.svg/1200px-XML.svg.png"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://github.com/Carlos4775/escritura-xml-java"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="XML Writing"
                    projectDescription="Java web"
                    projectImage="https://internetpasoapaso.com/wp-content/uploads/aplicaciones-de-android-para-leer-archivos-XML.jpg"
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link
                href="https://github.com/Carlos4775/Practice6Cubes"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box
                  py={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProjectCard
                    projectHead="Headline"
                    projectTitle="OLAP cubes"
                    projectDescription=".NET SSAS"
                    projectImage="https://cdn4.iconfinder.com/data/icons/coding-6/100/programming-module-coding-programming-rubik-cube-algorithm-puzzle-challenge-problem-solving-512.png"
                  />
                </Box>
              </Link>
            </Grid>
            {/*<Grid item xs={12} sm={6} md={4} lg={3}>
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
                </Grid>*/}
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
