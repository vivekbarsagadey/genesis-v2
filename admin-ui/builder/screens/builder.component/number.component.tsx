import React from 'react';
import TextField from '@mui/material/TextField';

function NumberComponent() {
	return (
  <TextField
  id="outlined-number"
  type="number"
  InputLabelProps={{
				shrink: true,
			}}
  placeholder="Number"
  fullWidth
  size="small"
		/>
	);
}

export default NumberComponent;
