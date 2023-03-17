"use client";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, Input, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState, useEffect } from "react";
import { ValidatorContextBuilder, ValidatorType } from "../../../../validation/engine";

import { ErrorComponent } from "./error";
import { InputProps } from "./props";

const InputPasswordComponent = ({
  label,
  placeHolder,
  value,
  required,
  register,
}: InputProps) => {
  // const engine = ValidatationEngine();
  const [_value, setValue] = useState<string>("");
  const [errors, setErrors] = useState<string[]>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const update: any = register({ name: label ?? "" });
  const _builder = new ValidatorContextBuilder(label);
  _builder.addValidator({
    field: label ?? "",
    validatorType: ValidatorType.REQUIRED,
    message: `${label} is required`,
  });
  _builder.addValidator({
    field: label ?? "",
    validatorType: ValidatorType.PASSWORD,
    message: `${label} is unsatisfied`,
  });

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
    setErrors(_builder.doValidation(e.target.value));
    update({ name: label, value: e.target.value, errors: [errors] });
  };

  useEffect(() => {
    setValue(value ?? "");
  }, []);

  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography>{label || "Field Name"}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChangeHandler}
        startAdornment={
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />

      {errors?.map((e, i) => (
        <ErrorComponent key={i} message={e}></ErrorComponent>
      ))}
    </Box>
  );
};

export { InputPasswordComponent };
