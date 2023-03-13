"use client";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import React, { useState,useEffect } from "react";
import { ValidatorType } from "../../../../validation/validator";
import { ValidationEngine } from "../../../../validation/validation.engine";
import { ValidationErrors } from "../../../../validation/validation.error";
import { Constraint } from "../../../../validation/constrain";
import { ErrorComponent,InputProps} from "./";



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

    const update: any = register({name: label ?? " "});

  const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _v = e.target.value;
    setValue(_v);
    doValidation(_v);
    update({ name: label, value: e, errors: [errors] });

  };
   let _error: ValidationErrors = new ValidationErrors();
  const context = {
    constraints: new Array<Constraint>(),
  };
  const addValidator = (constraint: Constraint) => {
    context.constraints?.push(constraint);
  };

  const doValidation = (_v: string) => {
    _error = new ValidationErrors();
    _error.add({
      row: _v,
      _errors: ValidationEngine.validate({
        data: _v,
        constraints: context.constraints,
        name: label,
      }),
    });

    if (_error.isError()) {
      setErrors(_error.getAllErrors().map((e) => e.getErrorMessage()));
    }
  
  };

  useEffect(() => {
    setValue(value ?? "");
    addValidator({ field: label, validatorType: ValidatorType.REQUIRED,
    message:`${label} is Required`});
    addValidator({ field: label, validatorType: ValidatorType.TEXT,
    message:`${label} is Valid` });
  }, []);

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
