import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { styled } from "@mui/material/styles";
import LocationSearch from "./LocationSearch";

const StyledIconButton = styled(IconButton)(({ theme }) => {
  return {
    background: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  };
});

export default function Input() {
  const isMobile = useResponsive("down", "md");
  return (
    <Box sx={{ px: { xs: 2, md: 0 } }}>
      <Card sx={{ borderRadius: isMobile ? 2 : 10, py: 2, px: 4 }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Grid container sx={{ width: isMobile ? "80vw" : 720 }} spacing={2}>
              <Grid item md={4} xs={12}>
                <Stack spacing={{ xs: 1, md: 0 }}>
                  <Typography variant="subtitle2">Destiny</Typography>
                  <LocationSearch/>
                </Stack>
              </Grid>
              <Grid item md={5} xs={12}>
                <Stack direction="row">

                </Stack>
              </Grid>
            </Grid>
          </Box>
          {isMobile ? (
            <Button
              fullWidth
              variant="contained"
              startIcon={<MagnifyingGlass />}
            >
              Search
            </Button>
          ) : (
            <StyledIconButton>
              <MagnifyingGlass style={{ color: "white" }} />
            </StyledIconButton>
          )}
        </Stack>
      </Card>
    </Box>
  );
}
