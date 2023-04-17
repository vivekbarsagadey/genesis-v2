import React from "react";
import TextField from "@mui/material/TextField";


const EmailComponent = () => {
 
  return (
    <>
       <TextField
      id="outlined-builder-password-input"
      label="Confirm Password"
      type="password"
      placeholder="Confirm Password" fullWidth size="small"
    />
    </>
  );
};

export default EmailComponent;
