import React from "react";
import TextField from '@mui/material/TextField';

const NumberComponent = () => {
  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      placeholder="Number"
    />
  );
};

export default NumberComponent;
