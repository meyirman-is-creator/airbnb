import {
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

export default function TypeOfPlace() {
  return (
    <Stack spacing={1}>
      <InputLabel
        sx={{
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Type of place
      </InputLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="any-type"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="any-type"
          control={<Radio />}
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 13, fontWeight: 500 }}
            >
              Any type
            </Typography>
          }
        />
        <FormControlLabel
          value="Room"
          control={<Radio />}
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 13, fontWeight: 500 }}
            >
              Room
            </Typography>
          }
        />
        <FormControlLabel
          value="Entire-home"
          control={<Radio />}
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 13, fontWeight: 500 }}
            >
              Entire home
            </Typography>
          }
        />
      </RadioGroup>
    </Stack>
  );
}
