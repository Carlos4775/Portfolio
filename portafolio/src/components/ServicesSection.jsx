import { Box, Container, Grid, Typography, Divider } from "@material-ui/core";
import SimpleCard from "../components/SimpleCard";
import { services } from "../data/data.js";

const ServicesSection = () => {
  return (
    <Box py={4}>
      <Container fixed>
        <Box py={3} my={3}>
          <Box my={3} color="#939393">
            <Typography variant="h5" component="h5" gutterBottom>
              SERVICES
            </Typography>
          </Box>
          <Divider variant="fullWidth" component="div" />
        </Box>
        <Box>
          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <SimpleCard
                  title={service.title}
                  subtitle={service.subtitle}
                  text={service.text}
                  icon={service.icon}
                  alt={service.iconAltText}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
