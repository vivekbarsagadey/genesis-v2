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
import MailIcon from '@mui/icons-material/Mail';

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
          type="email"
          value={_value}
          variant="standard"
          onChange={onChangeHandller}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />

        {errors?.map((e,i)=><ErrorComponent key={i} message={e} ></ErrorComponent>)}

    </Box>
  );
};

export { InputEmailComponent };

