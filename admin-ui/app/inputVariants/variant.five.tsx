"use client";
import TextField from "@mui/material/TextField/TextField";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { InputProps, InputStyle } from "../../component";

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  inputVariantFive: {
    ...InputStyle.inputVariantFive,
  },
});

const InputVariantFive = ({ type, placeHolder, label, id }: InputProps) => {
  const [_value, setValue] = useState<string>("");

  return (
    <>
      <TextField
        type={type}
        placeholder={placeHolder}
        label={label}
        id={id}
         variant={"standard"}
        fullWidth
        style={InputStyle.inputVariantFive.item}
        
      ></TextField>
    </>
  );
};

export  {InputVariantFive};
