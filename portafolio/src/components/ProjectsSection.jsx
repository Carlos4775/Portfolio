import {
  Box,
  Container,
  Divider,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import shoppingSystem from "../img/shopping-system.jpg";
import accountsReceivable from "../img/cuentas-cobrar.webp";
import adminPage from "../img/admin-page.png";
import homeCustomer from "../img/home-customer.jpg";
import hboRedesign from "../img/hbo-redesign.jpg";
import selfHelpBlog from "../img/self-help-blog.jpg";
import cajaUnapec from "../img/caja-unapec.jpg";
import crudAsService from "../img/crud-as-service.jpg";
import mibancoPresta from "../img/mibanco-presta.jpg";
import xmlReading from "../img/xml-reading.jpg";
import xmlWriting from "../img/xml-writing.jpg";
import olapCubes from "../img/olap-cubes.jpg";

const ProjectsSection = () => {
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
                    projectImage={shoppingSystem}
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
                    projectImage={accountsReceivable}
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
                    projectImage={adminPage}
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
                    projectImage={homeCustomer}
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
                    projectImage={hboRedesign}
                  />
                </Box>
              </Link>
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
                    projectTitle="Self help blog"
                    projectDescription="Wordpress"
                    projectImage={selfHelpBlog}
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
                    projectImage={cajaUnapec}
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
                    projectImage={crudAsService}
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
                    projectImage={mibancoPresta}
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
                    projectImage={xmlReading}
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
                    projectImage={xmlWriting}
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
                    projectImage={olapCubes}
                  />
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
