import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import Header from "./Main/Header";
import Footer from "./Profile/Footer";
import { DateRangePicker,SingleInputDateRangeField } from "@mui/x-date-pickers-pro";

function DetailsPage() {
  // Define the image style with a border
  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    border: "3px solid #ffffff", // White border for the images
    borderRadius: "8px", // Rounded corners for the images
    overflow: "hidden", // Ensures the border contains the image
  };

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Title
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Subtitle
        </Typography>
        <Box my={2} sx={{ overflow: "hidden", borderRadius: "8px" }}>
          <img
            src="https://movia.media/wp-content/uploads/2020/04/billboard-2-768x432.jpg"
            alt="Main"
            style={imageStyle}
          />
        </Box>
        <Grid container spacing={2}>
          {["IMG2", "IMG3", "IMG4", "IMG5"].map((img, index) => (
            <Grid item xs={12} sm={6} lg={3} key={img}>
              <img
                src={`https://source.unsplash.com/random?sig=${index}`} // Replace with your actual image URLs
                alt={img}
                style={imageStyle}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" my={2}>
          Description Lorem ipsum...
        </Typography>
        <Typography variant="h6">PRICE</Typography>
        <Typography variant="body1" gutterBottom>
          Old Price: <del>$oldPrice</del>
        </Typography>
        <Typography variant="h5" color="secondary">
          $newPrice
        </Typography>
       
        <Stack spacing={{ xs: 1, md: 0 }}>
          <Typography variant="subtitle2">Check in-out</Typography>

          <DateRangePicker
            slots={{
              field: SingleInputDateRangeField,
              textField: TextField,
            }}
            slotProps={{
              
              textField: {
                fullWidth: true,
                variant: "standard",
                InputProps: {
                  disableUnderline: true,
                },
              },
            }}
            sx={{ width: 220 }}
            disablePast
            name="allowedRange"
          />
        </Stack>
        <Button variant="contained" color="primary">
          RESERVE
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default DetailsPage;
