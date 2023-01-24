import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";
import { InputStyle } from "../../../../styles";
import InputProps from "./props";
import Input from "@mui/material/Input";
import { ValidatationEngine } from "../validation";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

const InputPasswordComponent = ({ label, id, placeHolder }: InputProps) => {
  const [_value, setValue] = useState<string>("");
  const [errors, setErrors] = useState<string[]>();
  const [showPassword, setShowPassword] = useState(false);
  const engine = ValidatationEngine();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <>
      <Typography>{label}</Typography>
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        placeholder={placeHolder}
        value={_value}
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
      {errors}
    </>
  );
};

export { InputPasswordComponent };
