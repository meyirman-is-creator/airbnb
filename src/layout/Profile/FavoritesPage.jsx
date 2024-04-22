import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Container, Link, Typography } from "@mui/material";
import PersonalHeader from "./PersonalHeader";
import Footer from "./Footer";

export default function FavoritesPage() {
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
            <Typography>Favorites</Typography>
          </Breadcrumbs>
          <h1>Favorites</h1>
          {/* Ваш контент страницы */}
        </div>
      </Container>

      <Footer bottom={'0'} />
    </>
  );
}
