import { Avatar, Box, Stack } from "@mui/material";
import Logo from "../../components/Logo";
import Input from "./Input";
import { faker } from "@faker-js/faker";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Stack spacing={2}>
      <Box sx={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 3, py: 2 }}
        >
          <Logo />
          <Input />
          <RouterLink to="/auth/login">
            <Avatar alt={faker.person.fullName()} src={faker.image.avatar()} />
          </RouterLink>
        </Stack>
      </Box>
    </Stack>
  );
}
