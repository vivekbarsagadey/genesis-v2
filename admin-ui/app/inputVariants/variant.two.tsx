"use client";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { InputProps, InputStyle } from "../../component";

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  inputVariantTwo: {
    ...InputStyle.inputVariantTwo,
  },
});

const InputVariantTwo = ({ type, placeHolder, label, id }: InputProps) => {
  const [_value, setValue] = useState<string>("");

  return (
    <>
      <TextField
        type={type}
        label={label}
        id={id}
        variant="filled"
        placeholder={placeHolder}
        fullWidth
        style={InputStyle.inputVariantTwo.item}
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

export {InputVariantTwo}

