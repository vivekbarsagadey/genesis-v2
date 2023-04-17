import React from "react";
import TextField from "@mui/material/TextField";

const PasswordComponent = () => {
  return (
    <TextField
      id="outlined-password-input"
      type="password"
      placeholder="password" fullWidth size="small"
    />
  );
};

export default PasswordComponent;
