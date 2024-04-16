import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { Columns, MapTrifold } from "@phosphor-icons/react";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import CardView from "../../section/Search/CardView";
import Map from "./Map";
import {countries as COUNTRIES} from "../../_mock/map/countries";
import { MAPBOX_API } from "../../config";

const baseSettings = {
  mapboxAccessToken:MAPBOX_API,
  width:'100%',
  height:'100%',
  minZoom:1,
}
const THEMES = {
  streets:'mapbox://styles/mapbox/streets-v11',
  outdoors:'mapbox://styles/mapbox/outdoors-v11',
  light:'mapbox://styles/mapbox/light-v10',
  dark:'mapbox://styles/mapbox/dark-v10',
  satellite:'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets:'mapbox://styles/mapbox/satellite-streets-v11'
}

export default function Result() {
  const [view, setView] = useState("card");
  const isDesktop = useResponsive("up", "md");
  const [value, setValue] = useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{ px: 3, py: 2 }} spacing={2}>
      <Box>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography
              variant="body2"
              textAlign={{ xs: "center", md: "start" }}
              sx={{ fontWeight: 600 }}
            >
              Found 100 more results based on your search
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={isDesktop ? "flex-end" : "center"}
            md={6}
            xs={12}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Chip
                onClick={() => {
                  setView("map");
                }}
                sx={{ p: 1 }}
                color="primary"
                variant={view == "map" ? "filled" : "outlined"}
                label={<Typography variant="subtitle2">Map View</Typography>}
                icon={<MapTrifold size={20} weight="bold" />}
              />
              <Chip
                onClick={() => {
                  setView("card");
                }}
                sx={{ p: 1 }}
                color="primary"
                variant={view == "card" ? "filled" : "outlined"}
                label={<Typography variant="subtitle2">Card View</Typography>}
                icon={<Columns size={20} weight="bold" />}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {view === "map" ? (
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <CardView view={view} value={value} handleChangeTab={handleChangeTab} />
            </Grid>
            <Grid item md={6} xs={12}>
                <Map {...baseSettings} data={COUNTRIES} mapStyle={THEMES.outdoors}/>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <CardView view={view} value={value} handleChangeTab={handleChangeTab} />
      )}
    </Stack>
  );
}
