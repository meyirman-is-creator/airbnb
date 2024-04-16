import { Stack, InputLabel, Box, Grid, Typography, Checkbox } from "@mui/material";
export default function Amenities() {
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Wifi
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Kitchen
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Dryer
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Washer
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Parking
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Swimming Pool
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Gym
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
                <Typography variant="caption" sx={{ fontSize: 13 }}>
                  Playground
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
