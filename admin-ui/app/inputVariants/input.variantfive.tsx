"use client";
import TextField from "@mui/material/TextField/TextField";
import React, { useState } from "react";
import { InputComponent } from "../../component/ui/base/input/input-type";
import InputProps from "../../component/ui/base/input/props";
import { makeStyles } from "@mui/styles";
import { InputStyle } from "../../styles";

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  inputVariantFive: {
    ...InputStyle.inputVariantFive,
  },
});

const InputVariantFive = ({ type, placeHolder, label, id,variant }: InputProps) => {
  const [_value, setValue] = useState<string>("");

  return (
    <>
      <TextField
        type={type}
        placeholder={placeHolder}
        label={label}
        id={id}
        variant={variant}
        fullWidth
        style={InputStyle.inputVariantFive.item}
        
      ></TextField>
    </>
  );
};

export { InputVariantFive };
