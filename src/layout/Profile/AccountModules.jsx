import React from "react";
import PersonalHeader from "./PersonalHeader";
import Footer from "./Footer";
import { Box, Grid, Paper, Typography, Link, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const accountSections = [
  {
    title: "Profile",
    subtitle: "Manage your personal information", // Add your subtitle here
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="512"
        height="512"
      >
        <path d="M9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm4.27,7.48c-.813,.813-1.27,1.915-1.27,3.065v1.455h1.455c1.15,0,2.252-.457,3.065-1.27l6.807-6.807c.897-.897,.897-2.353,0-3.25-.897-.897-2.353-.897-3.25,0l-6.807,6.807Zm-3.27,3.065c0-1.692,.659-3.283,1.855-4.479l2.376-2.376c-1.476-1.06-3.279-1.691-5.231-1.691C4.038,14,0,18.038,0,23c0,.552,.448,1,1,1H10v-1.455Z" />
      </svg>
    ),
    link: "/profile", // Update with your actual routing link
  },
  {
    title: "Favorites",
    subtitle: "View your favorite selections", // Add your subtitle here
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="512"
        height="512"
      >
        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
      </svg>
    ),
    link: "/favorites", // Update with your actual routing link
  },
  {
    title: "Orders",
    subtitle: "Check your order history", // Add your subtitle here
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512.029 512.029"
        style="enable-background:new 0 0 512.029 512.029;"
        xml:space="preserve"
        width="512"
        height="512"
      >
        <g>
          <path d="M85.342,0.029h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C0.009,38.234,38.214,0.029,85.342,0.029z" />
          <path d="M85.342,277.362h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C0.009,315.567,38.214,277.362,85.342,277.362z" />
          <path d="M475.593,408.05l-48.917,48.853V55.154l48.917,48.853c8.336,8.33,21.846,8.325,30.176-0.011s8.325-21.846-0.011-30.176   l-55.189-55.104c-24.987-24.956-65.466-24.956-90.453,0l-55.189,55.104c-8.336,8.33-8.341,21.84-0.011,30.176   c8.33,8.336,21.84,8.341,30.176,0.011l48.917-48.853v401.749l-48.917-48.853c-8.342-8.33-21.857-8.32-30.187,0.021   c-8.33,8.342-8.32,21.857,0.021,30.187l55.189,55.104c25.016,24.886,65.437,24.886,90.453,0l55.189-55.104   c8.342-8.33,8.351-21.845,0.021-30.187C497.449,399.73,483.934,399.72,475.593,408.05z" />
        </g>
      </svg>
    ),
    link: "/orders", // Update with your actual routing link
  },
  // ... add other sections as necessary
];

export default function AccountModules() {
  const theme = useTheme(); 
  return (
    <>
      <PersonalHeader />
      <Container>
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid container spacing={2}>
            {accountSections.map((section) => (
              <Grid item xs={12} sm={6} md={4} key={section.title}>
                <Link href={section.link} style={{ textDecoration: "none" }}>
                  <Paper
                    sx={{
                      p: 2,
                      minHeight: 170,
                      borderRadius: 2,
                    }}
                    elevation={3}
                  >
                    {React.cloneElement(section.icon, {
                      style: { width: 30, height: 30, marginBottom: 1,fill:theme.palette.primary.main  },
                    })}

                    <Typography
                      variant="subtitle1"
                      component="h3"
                      sx={{ marginTop: "40px" }}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: "5px" }}
                    >
                      {section.subtitle}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer bottom={"0"} />
    </>
  );
}
