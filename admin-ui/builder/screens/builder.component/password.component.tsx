import React from "react";
import TextField from "@mui/material/TextField";

const PasswordComponent = () => {
  return (
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      placeholder="password"
    />
  );
};

export default PasswordComponent;
