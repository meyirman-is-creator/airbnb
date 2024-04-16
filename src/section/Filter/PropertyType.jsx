import { Stack, InputLabel, Box, Grid, Typography, Checkbox } from "@mui/material";
import { Buildings, House, Lamp, Lighthouse } from "@phosphor-icons/react";
export default function PropertyType() {
  return (
    <Stack spacing={1}>
      <InputLabel sx={{ fontSize: 14, fontWeight: 600 }}>
        Property Type
      </InputLabel>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={1} direction="row" alignItems="center">
                <House size={20} weight="bold" />
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  House
                </Typography>
              </Stack>
              <Checkbox size="small"/>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={1} direction="row" alignItems="center">
                <Lamp size={20} weight="bold" />
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Hotel
                </Typography>
              </Stack>
              <Checkbox size="small"/>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={1} direction="row" alignItems="center">
                <Lighthouse size={20} weight="bold" />
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Guesthouse
                </Typography>
              </Stack>
              <Checkbox size="small"/>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack spacing={1} direction="row" alignItems="center">
                <Buildings size={20} weight="bold" />
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Apartament
                </Typography>
              </Stack>
              <Checkbox size="small"/>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
