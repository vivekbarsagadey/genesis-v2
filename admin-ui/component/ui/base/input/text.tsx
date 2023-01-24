import React, { useState } from "react";
import InputProps from "./props";
import Input from "@mui/material/Input";
import { ValidatationEngine, ValidatationError } from "../validation";
import { ValidationStatus } from "../validation/emailValidation/validator.context";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";

const InputTextComponent = ({ label, id, placeHolder }: InputProps) => {
  const [_value, setValue] = useState<string>("");
  const [error, setError] = useState("");
  const engine = ValidatationEngine();

  const handleChange = (e) => {
    setValue(e.target.value);

    const errors = engine.execute({
      data: e,
      status: ValidationStatus.REQUIRED,
    });
    errors.forEach((e) => {
      setError(e.message);
    });
  };

  return (
    <>
      <Typography>{label}</Typography>
      <Input
        id={id}
        type="text"
        onChange={handleChange}
        placeholder={placeHolder}
        value={_value}
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      {error}
    </>
  );
};

export default InputTextComponent;
