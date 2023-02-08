"use client";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
// import { ValidatationEngine } from "../../../../validation/validatation.engine";
// import {ValidationStatus} from "../../../../validation/validator.context";
import { ErrorComponent, InputProps, InputStyle } from "./";



const InputTextComponent = ({
  label,
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
    // doValidation(_v);
  };

  // const doValidation = (_v: string) => {
  //   // setErrors(
  //   //   engine
  //   //     .execute({
  //   //       data: _v,
  //   //       name: label || "",
  //   //       status: [ValidationStatus.REQUIRED, ValidationStatus.TEXT],
  //   //     })
  //   //     .map((e) => e.message)
  //   // );
  // };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography>{label || "Field Name"}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        defaultValue={value}
        // value={_value}
        type="text"
        onChange={onChangeHandller}
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
