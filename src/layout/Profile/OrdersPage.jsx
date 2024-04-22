import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PersonalHeader from "./PersonalHeader";
import Footer from "./Footer";

export default function OrdersPage() {
  return (
    <>
      <PersonalHeader />
      <Container>
        <div style={{ padding: "16px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} to="/">
              Home
            </Link>
            <Link component={RouterLink} to="/personal">
              Personal
            </Link>
            <Typography>Orders</Typography>
          </Breadcrumbs>
          <h1>Orders</h1>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              
              <Tab label="Active" />
              <Tab label="Pending" />
              <Tab label="Passed" />
            </Tabs>
          </Box>
        </div>
      </Container>

      <Footer bottom={"0"} />
    </>
  );
}
