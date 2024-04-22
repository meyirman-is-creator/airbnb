import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = ({bottom}) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
        position: "absolute",
        bottom: bottom,
        width: "100%", // Автоматический отступ сверху
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              Support
            </Typography>
            <Link href="#" color="inherit">
              Help Center
            </Link>
            <br />
            <Link href="#" color="inherit">
              Cancellation Options
            </Link>
            <br />
            {/* Add more links as needed */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              Hosting
            </Typography>
            {/* Repeat the pattern for links */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              Company
            </Typography>
            {/* Repeat the pattern for links */}
          </Grid>
        </Grid>
        <Box textAlign="center" mt={3}>
          <Typography variant="caption" color="inherit">
            © {new Date().getFullYear()} Billboard Marketplace
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer ;
