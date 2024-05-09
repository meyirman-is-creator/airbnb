import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import Header from "./Main/Header";
import Footer from "./Profile/Footer";
import {
  DateRangePicker,
  SingleInputDateRangeField,
} from "@mui/x-date-pickers-pro";
import { Event } from "@mui/icons-material";

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
  const oldPrice = "100";
  const newPrice = "80";
  return (
    <>
      <Header />
      <Container sx={{paddingY:4}}>
        <Typography variant="h4" gutterBottom>
          Toronto, Canada
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          New York, USA
        </Typography>
        <Box my={2} sx={{ overflow: "hidden", borderRadius: "8px", borderColor:"primary.main"}}>
          <img
            src="https://i.pinimg.com/originals/6d/89/87/6d89870c4ed04149f409698b1dfe5a60.jpg"
            alt="Main"
            style={imageStyle}
          />
        </Box>
        <Typography variant="body1" my={2}>
          Discover the vibrant cities of Toronto and New York! From the iconic
          skyline of Toronto's CN Tower to the bustling streets of New York
          City, explore the unique cultures and experiences each city has to
          offer.
        </Typography>
        <Typography variant="h6">PRICE</Typography>
        <Typography variant="body1" gutterBottom>
          Old Price: <del>${oldPrice}</del>
        </Typography>
        <Typography variant="h5" color="secondary">
          ${newPrice}
        </Typography>
        <Typography variant="body1" my={2}>
          Book your trip now and save ${oldPrice - newPrice}! This special price
          includes accommodation and a guided city tour. Don't miss this chance
          to experience two of North America's most famous cities at an
          unbeatable price.
        </Typography>

        <Stack spacing={2} sx={{ my: 4, mx: 2, width: "100%", maxWidth: 360 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "text.secondary" }}
          >
            Check in-out
          </Typography>

          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            slots={{
              field: SingleInputDateRangeField, // Ensure this component is correctly defined or imported
              textField: TextField,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                variant: "outlined", // Changed from 'standard' to 'outlined' for better visibility
                InputProps: {
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Event />
                    </InputAdornment>
                  ), // Visual cue for date input
                },
              },
            }}
            sx={{ width: "100%" }} // Adjusted width for better form alignment
            disablePast
            name="allowedRange"
          />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            maxWidth: 360,
            height: 56,
            fontSize: "1rem",
            fontWeight: "medium",
            boxShadow: "none", // Reducing button shadow for a flatter design
            "&:hover": {
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding hover effect for better interaction feedback
            },
          }}
        >
          RESERVE
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default DetailsPage;
