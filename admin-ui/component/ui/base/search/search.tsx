'use client';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from '@mui/styles';
import { InputProps } from '../input';
import { ButtonStyles } from '../button/button.style';

const useStyles = makeStyles({
	...ButtonStyles,
	button: {
		...ButtonStyles.button,
	},
});

function SearchComponent({ placeHolder, type }: InputProps) {
	const [searchValue, setSearchValue] = useState('');
	const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchValue(value);
	};
	return (
  <TextField
  size="small"
  type={type}
  placeholder={placeHolder}
  onChange={onChangeHandller}
  InputProps={{
				startAdornment: (
  <InputAdornment position="start">
  <SearchIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}

export { SearchComponent };
