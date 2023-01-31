"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputStyle } from "../../../../styles";
import { makeStyles } from "@mui/styles";
import InputProps from "./props";
import { ValidatationEngine, ValidatationError } from "../validation";
import { ValidationStatus } from "../validation/emailValidation/validator.context";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DoneIcon from "@mui/icons-material/Done";
import { ErrorComponent } from "./error";
const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  input: {
    ...InputStyle.input,
  },
});

const InputEmailComponent = ({
  label,
  id,
  placeHolder,
  value,
  icon,
  required
}: InputProps) => {
  const engine = ValidatationEngine();
  const [_value, setValue] = useState< string | undefined | null>(value);
  const [errors, setErrors] = useState<string[]>();
  const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _v = e.target.value
    setValue(_v);
    doValidation(_v);

  };


  const doValidation=(_v:string)=>{
    setErrors(
      engine
        .execute({
          data: _v,
          name: label||"",
          status: [ValidationStatus.REQUIRED, ValidationStatus.EMAIL],
        })
        .map((e) => e.message)
    );
  }


  useEffect(()=>{

  },[])

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
          required={required}
          id="standard-required"
          label={label||"Field Name"}
          defaultValue={value}
          value={_value}
          variant="standard"
          onChange={onChangeHandller}
        />

        {errors?.map((e,i)=><ErrorComponent key={i} message={e}></ErrorComponent>)}

    </Box>
  );
};

export { InputEmailComponent };
