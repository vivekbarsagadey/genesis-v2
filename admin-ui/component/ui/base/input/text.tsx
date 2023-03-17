"use client";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import React, { useState,useEffect } from "react";
import { ValidatorContextBuilder, ValidatorType } from "../../../../validation/engine";

import { ErrorComponent } from "./error";
import { InputProps } from "./props";




const InputTextComponent = ({
  label,
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
    validatorType: ValidatorType.TEXT,
    message: `${label} is unsatisfied`,
  });

  const onChangeHandler = (e: any) => {
    debugger;
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
        // defaultValue={value}
        value={value}
        type="text"
        onChange={onChangeHandler}
        startAdornment={
            <InputAdornment position="start">
              <TextSnippetIcon />
            </InputAdornment>
        }
      />

      {errors?.map((e, i) => (
        <ErrorComponent key={i} message={e}></ErrorComponent>
      ))}
    </Box>
  );
};

export { InputTextComponent };
