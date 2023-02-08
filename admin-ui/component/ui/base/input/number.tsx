"use client";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
// import { ValidatationEngine } from "../../../../validation/validatation.engine";
// import {ValidationStatus} from "../../../../validation/validator.context";
import { ErrorComponent, InputProps } from "./";
import CallIcon from '@mui/icons-material/Call';
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

const InputNumberComponent = ({
  label,
  type,
  placeHolder,
  value,
  required,
}: InputProps) => {
  // const engine = ValidatationEngine();
  const [_value, setValue] = useState<string | undefined | null>(value);
  const [errors, setErrors] = useState<string[]>();
  const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _v = e.target.value;
    setValue(_v);
    doValidation(_v);
  };

  const doValidation = (_v: string) => {
    // setErrors(
    //   engine
    //     .execute({
    //       data: _v,
    //       name: label || "",
    //       status: [ValidationStatus.REQUIRED, ValidationStatus.NUMBER],
    //     })
    //     .map((e) => e.message)
    // );
  };

  return (
    <Box component="form" noValidate autoComplete="off">
       <Typography>{label || "Field Name"}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        defaultValue={value}
        type="number"
        // value={_value}
        onInput={(e: any) => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 10);
        }}
        onChange={onChangeHandller}
    
          startAdornment= {
            <InputAdornment position="start">
            <CallIcon />
          </InputAdornment>
          }
      />

      {errors?.map((e, i) => (
        <ErrorComponent key={i} message={e}></ErrorComponent>
      ))}
    </Box>
  );
};

export { InputNumberComponent };
