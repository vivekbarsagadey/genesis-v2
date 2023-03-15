"use client";
import CallIcon from '@mui/icons-material/Call';
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { ValidatorContextBuilder,  } from "../../../validation/engine";
import { ValidatorType } from '../../../validation/engine/validator';
import { ErrorComponent, InputProps } from "./";
const InputNumberComponent = ({
  label,
  type,
  placeHolder,
  value,
  required,
  register
}: InputProps) => {
  // const engine = ValidatationEngine();
  const [_value, setValue] = useState<string>("");
  const [errors, setErrors] = useState<string[]>();
  const update: any = register({ name: label ?? '' });
  const _builder = new ValidatorContextBuilder(label);
  _builder.addValidator({
    field: label ?? '',
    validatorType: ValidatorType.REQUIRED,
    message: `${label} is required`,
  });
  _builder.addValidator({
    field: label ?? '',
    validatorType: ValidatorType.NUMBER,
    message: `${label} is unstatified`,
  });

  const onChangeHandller = (e: any) => {
    setValue(e.target.value);
    setErrors(_builder.doValidation(e.target.value));
    update({ name: label, value:e.target.value, errors: [errors] });
  };

  useEffect(() => {
    setValue(value ?? '');
  }, []);

  return (
    <Box component="form" noValidate autoComplete="off">
       <Typography>{label || "Field Name"}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        defaultValue={value}
        type="number"
        value={value}
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

