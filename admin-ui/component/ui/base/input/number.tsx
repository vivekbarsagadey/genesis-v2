"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { InputStyle } from "../../../../styles";
import { makeStyles } from "@mui/styles";
import InputProps from "./props";
import { ValidatationEngine, ValidatationError } from "../validation";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { ValidationEmailStatus } from "../validation/emailValidation/validator.context";
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

const InputNumberComponent = ({
  label,
  id,
  placeHolder,
  getData,
  charLength,
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
          status: [ValidationEmailStatus.REQUIRED, ValidationEmailStatus.NUMBER],
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
          type="number"
          id={id}
          onChange={handleChange}
          placeholder={placeHolder}
          value={_value}
          maxLength={10}
           style={InputStyle.input.item}/>
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

export { InputNumberComponent};
