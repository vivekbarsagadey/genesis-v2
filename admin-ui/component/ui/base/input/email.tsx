"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { InputStyle } from "../../../../styles";
import { makeStyles } from "@mui/styles";
import InputProps from "./props";
import { ValidatationEngine, ValidatationError } from "../validation";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
import { ValidationEmailStatus } from "../validation/emailValidation/validator.context";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DoneIcon from "@mui/icons-material/Done";

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  },
});

const InputEmailComponent = ({
  label,
  id,
  placeHolder,
  getData,
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
          status: [ValidationEmailStatus.REQUIRED, ValidationEmailStatus.EMAIL],
        })
        .map((e) => e.message)
    );
  };

  const styles = {
    input: {
      border: "2px solid black",
    },
  };

  return (
    <>
      <Typography> {label}</Typography>
      <div style={{border: errors? "2px solid red ":"2px solid green"}}>
        <AccountCircle />
        <input
          type="email"
          id={id}
          onChange={handleChange}
          placeholder={placeHolder}
          value={_value}
          style={{ outline: "none", border: "none" }}
        />
        {errors
          ? (() => {
              if (errors.length == 0) {
                return <DoneIcon style={{ color: "green" }} />;
              }

              return <ErrorOutlineIcon style={{ color: "red" }} />;
            })()
          : null}
      </div>

      {errors?.map((em, i) => {
        return <div key={i}>{em}</div>;
      })}
    </>
  );
};

export { InputEmailComponent };
