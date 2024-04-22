import {
  Popover,
  TextField,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { MinusCircle, PlusCircle } from "phosphor-react";
import { useState } from "react";

export default function GuestsSelector() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
    infants: 1,
    pets: 1,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleGuestsChange = (type, value) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: Math.max(0, prevGuests[type] + value),
    }));
  };
  const displayGuests = `${guests.adults} Adults, ${guests.children} Children, ${guests.infants} Infants, ${guests.pets} Pets`;
  return (
    <>
      <TextField
        onClick={handleClick}
        fullWidth
        value={displayGuests}
        placeholder="Enter guest details"
        variant="standard"
        InputProps={{
          disableUnderline: true,
          readOnly: true,
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Stack spacing={2} sx={{ px: 4, py: 2 }}>
          <Stack spacing={2}>
            <Stack
              sx={{ width: 300 }}
              direction="row"
              alignItems="center"
              justifyContennt="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Adults
                </Typography>
                <Typography variant="caption">Ages 13 or above</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", -1)}
                  disabled={guests.adults === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.adults}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction="row"
              alignItems="center"
              justifyContennt="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Children
                </Typography>
                <Typography variant="caption">Ages 2-12</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("children", -1)}
                  disabled={guests.children === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.children}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("children", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>                                                                                              
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction="row"                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
              alignItems="center"
              justifyContennt="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Infants
                </Typography>
                <Typography variant="caption">Under 2</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("infants", -1)}
                  disabled={guests.infants === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.children}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("children", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction="row"
              alignItems="center"
              justifyContennt="space-between"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Pets
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("infants", -1)}
                  disabled={guests.infants === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={guests.pets}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("pets", 1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {displayGuests}
          </Typography>
        </Stack>
      </Popover>
    </>
  );
}
