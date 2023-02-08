"use client";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField/TextField";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { InputProps, InputStyle } from "../../component";


const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  inputVariantOne: {
    ...InputStyle.inputVariantOne,
  },
});

const InputVariantOne = ({ placeHolder, label, id }: InputProps) => {
  const [_value, setValue] = useState<string>("");
  const classes = useStyles()
  return (
    <>
      <TextField
      autoFocus={true}
      type="text"
      label={label}
      variant={'outlined'}
      id={id}
      placeholder={placeHolder}
      fullWidth
       style={InputStyle.inputVariantOne.item}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      />
    </>
  );
};

export {InputVariantOne};

