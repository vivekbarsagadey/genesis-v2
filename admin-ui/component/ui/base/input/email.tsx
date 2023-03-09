"use client";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { ValidatorType } from "../../../../validation/validator";
import { ValidationEngine } from "../../../../validation/validation.engine";
import { ErrorComponent, InputProps } from "./";
import { ValidationErrors } from "../../../../validation/validation.error";
import { Constraint } from "../../../../validation/constrain";
import { useForm } from "../../../../hooks/from";

const InputEmailComponent = ({
  label,
  placeHolder,
  value,
  autofocus,
  register,
}: InputProps) => {
  const [_value, setValue] = useState<string>('');
  const [errors, setErrors] = useState<string[]>();
  const { update } = useForm();

  let updates = null;

  let _error: ValidationErrors = new ValidationErrors();
  const context = {
    constraints: new Array(),
  };

  const addValidator = (constraint: Constraint) => {
    context.constraints?.push(constraint);
  };

  const doValidation = (_v: string) => {
    _error = new ValidationErrors();
    _error.add({
      row: _v,
      _errors: ValidationEngine.validate({ data: _v, constraints: context.constraints }),
    });
    if (_error.isError()) {
      _error.getAllErrors().forEach((e) => {
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    doValidation(e);
     update({ name: label, value:e.target.value});    
     
  };
  updates = register({ name: label, value:_value });

  useEffect(() => {
    
    setValue(value || '');
    addValidator({ field: label, validatorType: ValidatorType.REQUIRED });
    addValidator({ field: label, validatorType: ValidatorType.EMAIL });
  }, []);

  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography>{label || "Field Name"}</Typography>
      <Input
        placeholder={placeHolder}
        defaultValue={value}
        type="email"
        //  value={_value}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <MailIcon />
          </InputAdornment>
        }
      />
      <div>
      {errors?.map(({e,i}) => {
          return <ErrorComponent key={i} message={e} />;
        })}
      </div>
      
    </Box>
  );
};

export { InputEmailComponent };
