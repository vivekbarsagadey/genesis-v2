import TextField from "@mui/material/TextField";
import React from "react";

const CnfPasswordComponent = () => {
  return (
    <TextField
      id="outlined-password-input"
      label="Confirm Password"
      type="password"
      autoComplete="current-password"
    />
  );
};

export default CnfPasswordComponent;
