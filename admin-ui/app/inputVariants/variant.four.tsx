"use client";
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
    ...InputStyle.inputVariantFour,
  },
});

const InputVariantFour = ({ type, placeHolder, label, id }: InputProps) => {
  const [_value, setValue] = useState<string>("");

  return (
    <>
      <TextField
        type="text"
        label={label}
        variant="standard"
        id={id}
        color="primary"
        placeholder={placeHolder}
        fullWidth
        style={InputStyle.inputVariantFour.item}
      />
    </>
  );
};

export {InputVariantFour}

