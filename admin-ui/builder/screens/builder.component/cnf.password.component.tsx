import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

function CnfPasswordComponent() {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};
	return (
  <OutlinedInput
  id="outlined-adornment-password"
  type={showPassword ? 'text' : 'password'}
  endAdornment={(
				<InputAdornment position="end">
					<IconButton
						aria-label="toggle password visibility"
						onClick={handleClickShowPassword}
						onMouseDown={handleMouseDownPassword}
						edge="end"
  >
						{showPassword ? <VisibilityOff /> : <Visibility />}
  </IconButton>
    </InputAdornment>
			)}
  fullWidth
  size="small"
		/>
	);
}

export default CnfPasswordComponent;
