import { useState } from "react";
import MapGL from "react-map-gl";
import { Card, CardContent } from "@mui/material";

import {
  MapControlScale,
  MapControlNavigation,
  MapControlFullscreen,
  MapControlGeolocate,
  MapControlMarker,
} from "../../components/map";
import { styled } from "@mui/material/styles";

const MapWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: "hidden",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "& .mapbox-ctrl-logo, .mapbox-ctrl-bottom-right": {
    display: "none",
  },
}));
export default function Map({ data, ...other }) {
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    zoom: 2,
  });
  return (
    <Card>
      <CardContent>
        <MapWrapperStyle>
          <>
            <MapGL {...viewport} onViewportChange={setViewport} {...other}>
              <MapControlScale />
              <MapControlNavigation />
              <MapControlFullscreen />
              <MapControlGeolocate />

              {data?.map((country) => (
                <MapControlMarker
                  key={country.name}
                  latitude={country.latlng[0]}
                  longitude={country.latlng[1]}
                  onClick={() => setTooltip(country)}
                />
              ))}
            </MapGL>
          </>
        </MapWrapperStyle>
      </CardContent>
    </Card>
  );
}
