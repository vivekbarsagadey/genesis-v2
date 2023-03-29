"use client";
import CallIcon from '@mui/icons-material/Call';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { ValidatorContextBuilder, ValidatorType } from '../../../../validation/engine';
import { ErrorComponent, InputProps, InputStyle } from "./";
const InputNumberComponent = ({
  label,
  type,
  placeHolder,
  value,
  required,
  maxLength,
  register
}: InputProps) => {
  // const engine = ValidationEngine();
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
    message: `${label} is unsatisfied`,
  });

  const onChangeHandler = (e: any) => {
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
       <div style={InputStyle.input.container}>
       <CallIcon />
      <input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        defaultValue={value}
        type="number"
        value={value}
        onChange={onChangeHandler}
        maxLength={10}
        style={InputStyle.input.item}
      />
       </div>
      {errors?.map((e, i) => (
        <ErrorComponent key={i} message={e}></ErrorComponent>
      ))}
    </Box>
  );
};

export { InputNumberComponent };

