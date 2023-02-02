"use client";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { InputStyle } from "../../../../styles";
import { ValidatationEngine } from "../validation";
import { ValidationStatus } from "../validation/emailValidation/validator.context";
import { ErrorComponent } from "./error";
import InputProps from "./props";

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  input: {
    ...InputStyle.input,
  },
});

const InputNumberComponent = ({
  label,
  type,
  placeHolder,
  value,
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
          status: [ValidationStatus.REQUIRED, ValidationStatus.NUMBER],
        })
        .map((e) => e.message)
    );
  }


  

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
          placeholder={placeHolder}
          defaultValue={value}
          type="number"
          value={_value}
          onInput = {(e:any) =>{
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
        }}
          variant="standard"
          onChange={onChangeHandller}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        {errors?.map((e,i)=><ErrorComponent key={i} message={e} ></ErrorComponent>)}

    </Box>
  );
};

export { InputNumberComponent };

