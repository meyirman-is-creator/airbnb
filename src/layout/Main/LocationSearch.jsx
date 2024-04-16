import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { MAPBOX_API } from "../../config";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function LocationSearch() {
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedInput = useDebounce(inputText, 500);
  const fetchLocations = async (text) => {
    const accessToken = MAPBOX_API;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${accessToken}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      const locations = data.features.map((feature) => feature.place_name);
      setOptions(locations);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching location:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (debouncedInput.length >= 2) {
      fetchLocations(debouncedInput);
    }
  }, [debouncedInput]);
  return (
    <Autocomplete
      fullWidth
      freeSolo
      options={options}
      loading={loading}
      onInputChange={(event, newValue) => {
        setInputText(newValue);
      }}
      renderInput={(params) => (
        <TextField
          placeholder="Enter location"
          {...params}
          variant="standard"
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
