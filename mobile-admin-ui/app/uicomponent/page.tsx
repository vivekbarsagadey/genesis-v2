"use client";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  error_style: {
    color: "red",
    margin: "0px",
    fontWeight: "bold",
    fontSize: "12 px",
  },
});

interface InputProps {
  placeholder?: string;
  name: string;
  label: string;
  value?: string;
  icon?: any;
  icon2?: any;
  type: any;
  showPassword: any;
  isPassword: boolean;
  validation: any;
  onSubmit: any;
  setValue: any;
  maxLength:any;
}

const InputComponent = ({
  label,
  placeholder,
  name,
  value,
  icon,
  icon2,
  type,
  showPassword,
  isPassword,
  setValue,
  maxLength
}: InputProps) => {
  const [isError, setIsError] = useState("");


  const showError = () => {
    if (placeholder == "eg.@.com") {
      if (value?.includes("@") && value.includes(".com")) {
        setIsError(" ");
      } else if (value?.trim().length === 0) {
        setIsError(" ");
      } else {
        setIsError("Please Valid Email");
      }
    } 
     if (placeholder === "Password") {
      const num = Number(value)
       
      if (value?.length == 8) {
        setIsError(" ");
      } else if (value?.trim().length === 0) {
        setIsError(" ");
      } else {
        setIsError(
          "Minimum 8 Characters are Required"
        );
      }
    }
  };
  const classes=useStyles()
  useEffect(() => {
    showError();
  }, [value]);

  return (
    <>
      <Typography style={{ fontWeight: "bold", fontSize: "1rem" }}>
        {label}{" "}
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          outline: "none",
          borderWidth: "10px",
          borderRadius: "5px",
          border: value?.length === 0 ? "2px solid red" : " 2px solid green",
        }}
      >
        <input
          value={value}
          placeholder={placeholder}
          name={name}
          maxLength={maxLength}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type={type}
          style={{
            outline: "none",
            border: "none",
            height: "5vh",
            width: "88%",
          }}
        />
        <IconButton onClick={showPassword} style={{ padding: "0" }}>
          {isPassword ? <div> {icon} </div> : <div>{icon2}</div>}
        </IconButton>
      </div>
      <div className={classes.error_style}>{isError}</div>
    </>
  );
};


export default InputComponent;
