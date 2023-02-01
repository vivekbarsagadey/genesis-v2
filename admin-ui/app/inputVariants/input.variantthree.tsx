"use client";
import TextField from "@mui/material/TextField/TextField";
import React, { useState } from "react";
import { InputComponent } from "../../component/ui/base/input/input-type";
import InputProps from "../../component/ui/base/input/props";
import { makeStyles } from "@mui/styles";
import { InputStyle } from "../../styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  inputVariantOne: {
    ...InputStyle.inputVariantThree,
  },
});

const InputVariantThree = ({
  type,
  placeHolder,
  label,
  id,
  variant,
}: InputProps) => {
  const [_value, setValue] = useState<string>("");

  return (
    <>
      <TextField
        type={type}
        label={label}
        id={id}
        variant={variant}
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

export { InputVariantThree };
