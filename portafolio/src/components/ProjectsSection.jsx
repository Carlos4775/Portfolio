import {
  Box,
  Container,
  Divider,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data.js";

const ProjectsSection = () => {
  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} mb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            <Box mb={3} color="#939393">
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
            itemScope
            itemType="http://schema.org/ItemList"
          >
            {projects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/CreativeWork"
              >
                <Link
                  href={project.url}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Box
                    py={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      altImage={project.altImage}
                    />
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
