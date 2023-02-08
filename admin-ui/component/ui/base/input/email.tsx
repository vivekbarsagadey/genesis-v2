"use client";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { ValidatorType } from "../../../../validation/validator";
import { ValidationEngine } from "../../../../validation/validation.engine";
// import {ValidationStatus} from "../../../../validation/validator.context";
import { ErrorComponent, InputProps } from "./";
import { ValidationErrors } from "../../../../validation/validation.error";
import { Constraint } from "../../../../validation/constrain";

const InputEmailComponent = ({
  label,
  id,
  placeHolder,
  value,
  required,
}: InputProps) => {
  const [_value, setValue] = useState<string | undefined | null>(value);
  const [errors, setErrors] = useState<string[]>();
  const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _v = e.target.value;
    setValue(_v);
    // doValidation(_v);
  };

  // let _error: ValidationErrors = new ValidationErrors();
  // const context = {
  //   constraints: new Array(),
  // };

  // const addValidator = (constraint: Constraint) => {
  //   context.constraints?.push(constraint);
  // };

  // const doValidation = (_v: string) => {
  //   _error = new ValidationErrors();
  //   _error.add({
  //     row: _v,
  //     errors: ValidationEngine.validate({
  //       data: v,
  //       constraints: context.constraints,
  //     }), 
  //   });
    // console.log(_error?.errorRows);

    /* setErrors(
      engine
        .execute({
          data: _v,
          name: label,
          status: [ValidationStatus.REQUIRED, ValidationStatus.EMAIL],
        })
        .map((e: any) => e.message)
    ); */
  // };

  // useEffect(() => {
  //   setValue(value || '');
  //   addValidator({ field: label, validatorType: ValidatorType.REQUIRED });
  //   addValidator({ field: label, validatorType: ValidatorType.EMAIL });
  // }, []);

  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography>{label || "Field Name"}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        defaultValue={value}
        type="email"
        // value={_value}
        onChange={onChangeHandller}
        startAdornment={
          <InputAdornment position="start">
            <MailIcon />
          </InputAdornment>
        }
      />

      {errors?.map((e, i) => (
        <ErrorComponent key={i} message={e}></ErrorComponent>
      ))}
    </Box>
  );
};

export { InputEmailComponent };
