"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { InputStyle } from "../../../../styles";
import { makeStyles } from "@mui/styles";
import InputProps from "./props";
import { ValidatationEngine, ValidatationError } from "../validation";
import { ValidationStatus } from "../validation/emailValidation/validator.context";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DoneIcon from "@mui/icons-material/Done";
const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
  input:{
    ...InputStyle.input
  },
 
});

const InputTextComponent = ({
  label,
  id,
  placeHolder,
  getData,
  icon
}: InputProps) => {
  const [_value, setValue] = useState<string>("");
  const [errors, setErrors] = useState<string[]>();
  const engine = ValidatationEngine();

  const handleChange = (e: any) => {
    getData(_value);
    setValue(e.target.value);
    setErrors(
      engine
        .execute({
          data: e.target.value,
          name: label,
          status: [ValidationStatus.REQUIRED, ValidationStatus.TEXT],
        })
        .map((e) => e.message)
    );
  };

  return (
    <>
      <Typography> {label}</Typography>
      <Typography  component="div"  style={InputStyle.input.container}>
        {icon}
        <input
          type="text"
          id={id}
          onChange={handleChange}
          placeholder={placeHolder}
          value={_value}
          maxLength={20}
           style={InputStyle.input.item}
        />
        {errors
          ? (() => {
              if (errors.length == 0) {
                return <DoneIcon style={{ color: "green" }} />;
              }

              return <ErrorOutlineIcon style={{ color: "red" }} />;
            })()
          : null}
      </Typography>

      {errors?.map((em, i) => {
        return <div key={i} style={InputStyle.error.item}>{em}</div>;
      })}
    </>
  );
};

export { InputTextComponent };
