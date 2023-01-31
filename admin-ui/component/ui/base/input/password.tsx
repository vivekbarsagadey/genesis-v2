import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";
import { InputStyle } from "../../../../styles";
import InputProps from "./props";
import { ValidatationEngine } from "../validation";
import { ValidationStatus } from "../validation/emailValidation/validator.context";

const InputPasswordComponent = ({
  label,
  id,
  placeHolder,
  getData,
  icon
}: InputProps) => {
  const [_value, setValue] = useState<string>("");
  const [errors, setErrors] = useState<string[]>();
  const [showPassword, setShowPassword] = useState(false);
  const engine = ValidatationEngine();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: any) => {
    getData(_value);
    setValue(e.target.value);
    setErrors(
      engine
        .execute({
          data: e.target.value,
          name: label,
          status: [
            ValidationStatus.REQUIRED,
            ValidationStatus.PASSWORD,
          ],
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
			  type={showPassword ? "text" : "password"}
                id={id}
          onChange={handleChange}
          placeholder={placeHolder}
          value={_value}
           style={InputStyle.input.item}
        />
        <IconButton onClick={handleShowPassword}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
      </Typography>

      {errors?.map((em, i) => {
        return <div key={i} style={InputStyle.error.item}>{em}</div>;
      })}
    </>
  );
};

export { InputPasswordComponent };
