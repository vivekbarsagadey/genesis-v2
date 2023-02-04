"use client";
import React, { useState } from "react";
import { InputStyle } from "../../../../styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    ...InputStyle,
    error: {
      ...InputStyle.error,
    },
    input: {
      ...InputStyle.input,
    },
  });
  
interface ErrorComponentPropes{
    message : string
}


const ErrorComponent = ({message}:ErrorComponentPropes)=>{
    return <p style={InputStyle.error.item}>{message}</p>
}



export {ErrorComponent}