import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  return (
    <Stack spacing={2}>
      <Header />
      <Box sx={{ overflowY: "scroll", height: "Calc(100vh - 150px)" }}>
        <Outlet />
      </Box>
    </Stack>
  );
}
