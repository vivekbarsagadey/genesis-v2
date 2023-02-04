"use client";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, Input, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
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

const InputPasswordComponent = ({
  label,
  placeHolder,
  value,
  required,
}: InputProps) => {
  const engine = ValidatationEngine();
  const [_value, setValue] = useState<string | undefined | null>(value);
  const [errors, setErrors] = useState<string[]>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _v = e.target.value;
    setValue(_v);
    doValidation(_v);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const doValidation = (_v: string) => {
    setErrors(
      engine
        .execute({
          data: _v,
          name: label || "",
          status: [ValidationStatus.REQUIRED, ValidationStatus.PASSWORD],
        })
        .map((e) => e.message)
    );
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography>{label || "Field Name"}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        defaultValue={value}
        type={showPassword ? "text" : "password"}
        value={_value}
        onChange={onChangeHandller}
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

