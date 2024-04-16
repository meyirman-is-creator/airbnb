import { Box, Button, Card, Typography, Stack, Divider } from "@mui/material";
import TypeOfPlace from "./TypeOfPlace";
import PriceRange from "./PriceRange";
import { Divide } from "phosphor-react";
import RoomsAndBeds from "./RoomsAndBeds";
import PropertyType from "./PropertyType";
import Amenities from "./Amenities";
import BookingOptions from "./BookingOptions";
export default function Filter() {
  
  return (
    <Box
      sx={{
        py: 4,
        pl: 1,
      }}
    >
      <Card sx={{width:1,pb:3}}>
        <Box
          sx={{
            mb: 2,
            py: 2,
            px: 3,
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">Filters</Typography>
            <Button size="small">Clear all filters</Button>
          </Stack>
        </Box>
        <Stack spacing={2} sx={{px:3}}>
          <TypeOfPlace/>
          <Divider/>
          <PriceRange/>
          <Divider/>
          <RoomsAndBeds/>
          <Divider/>
          <PropertyType/>
          <Divider/>
          <Amenities/>
          <Divider/>
          <BookingOptions/>
        </Stack>
      </Card>
    </Box>
  );
}
