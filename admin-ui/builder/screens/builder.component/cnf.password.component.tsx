import TextField from "@mui/material/TextField";
import React from "react";

const CnfPasswordComponent = () => {
  return (
    <TextField
      id="outlined-builder-password-input"
      label="Confirm Password"
      type="password"
      autoComplete="current-password"
      placeholder="Confirm Password"
    />
  );
};

export default CnfPasswordComponent;
