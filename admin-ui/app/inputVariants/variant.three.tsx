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
  inputVariantOne: {
    ...InputStyle.inputVariantThree,
  },
});

const InputVariantThree = ({ type, placeHolder, label, id }: InputProps) => {
  const [_value, setValue] = useState<string>("");

  return (
    <>
      <TextField
        type={type}
        label={label}
        id={id}
        placeholder={placeHolder}
        fullWidth
        color="secondary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        style={InputStyle.inputVariantThree.item}
      />
    </>
  );
};

export {InputVariantThree}

