import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const DropdownComponent = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      //   options={top100Films.map()}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default DropdownComponent;
