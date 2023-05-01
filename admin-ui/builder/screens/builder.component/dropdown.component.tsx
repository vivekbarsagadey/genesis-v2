import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function DropdownComponent() {
	return (
  <Autocomplete
  disablePortal
  id="combo-box-demo"
  fullWidth
  size="small"
			//   options={top100Films.map()}
  renderInput={(params) => <TextField {...params} label="Movie" />}
		/>
	);
}

export default DropdownComponent;
