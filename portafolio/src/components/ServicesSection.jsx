import { Box, Container, Grid, Typography, Divider } from "@material-ui/core";
import SimpleCard from "../components/SimpleCard";
import tag from "../icons/code_black_24dp.svg";
import person from "../icons/manage_accounts_black_24dp.svg";
import speed from "../icons/speed_black_24dp.svg";

const ServicesSection = () => {
  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} my={3}>
          <Typography variant="h5" gutterBottom>
            <Box my={3} color="#939393">
              SERVICES
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
            <Grid item xs={12} md={4}>
              <SimpleCard
                title="HTML/CSS"
                icon={<img src={tag} alt="tag" />}
                subtitle="User focused"
                text={<p>A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.</p>}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SimpleCard
                title="Application UI"
                icon={<img src={person} alt="person" />}
                subtitle="Responsive and fast"
                text={<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SimpleCard
                title="Performance"
                icon={<img src={speed} alt="speed" />}
                subtitle="Effective process"
                text={<p>Having a fast website is key to keeping people around converts them into customers. There are a myriad of techniques involved in making a fast.</p>}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
