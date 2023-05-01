import React from 'react';
import TextField from '@mui/material/TextField';

function EmailComponent() {
  return (
    <>
      <TextField
        id="outlined-builder-password-input"
        type="password"
        placeholder="Confirm Password"
        fullWidth
        size="small"
      />
    </>
  );
}

export default EmailComponent;
