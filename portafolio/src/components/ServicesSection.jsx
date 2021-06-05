import { Box, Container, Grid, Typography } from "@material-ui/core";
import SimpleCard from "../components/SimpleCard";
import tag from "../icons/code_black_24dp.svg";
import person from "../icons/manage_accounts_black_24dp.svg";
import speed from "../icons/speed_black_24dp.svg";
import Divider from "@material-ui/core/Divider";

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
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <SimpleCard
                title="HTML/CSS"
                icon={<img src={tag} alt="tag" />}
                subtitle="User Focused"
                text="A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SimpleCard
                title="Application UI"
                icon={<img src={person} alt="person" />}
                subtitle="Responsive and Fast"
                text="Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SimpleCard
                title="Performance"
                icon={<img src={speed} alt="speed" />}
                subtitle="Effective Process"
                text="Having a fast website is key to keeping people around converts them into customers. There are a myriad of techniques involved in making a fast."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
